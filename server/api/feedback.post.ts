import { z } from 'zod'

const feedbackSchema = z.object({
  name: z.string().min(1, 'Имя обязательно'),
  phone: z.string().min(1, 'Телефон обязателен'),
  email: z.union([z.string().email(), z.literal('')]).optional(),
  message: z.string().min(1, 'Сообщение обязательно')
})

export default defineEventHandler(async (event) => {
  const contentType = getHeader(event, 'content-type') ?? ''
  let name: string
  let phone: string
  let email: string | undefined
  let message: string
  let photoFiles: { data: Uint8Array; filename: string; type?: string }[] = []

  if (contentType.includes('multipart/form-data')) {
    const parts = await readMultipartFormData(event)
    if (!parts?.length) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Неверный формат запроса'
      })
    }

    const fields: Record<string, string> = {}
    for (const part of parts) {
      const value = part.data.toString('utf-8')
      if (part.filename) {
        photoFiles.push({
          data: part.data,
          filename: part.filename,
          type: part.type
        })
      }
      else if (part.name) {
        fields[part.name] = value
      }
    }

    const parseResult = feedbackSchema.safeParse(fields)
    if (!parseResult.success) {
      const firstError = parseResult.error.issues[0]
      throw createError({
        statusCode: 400,
        statusMessage: firstError?.message ?? 'Ошибка валидации'
      })
    }
    ;({ name, phone, message } = parseResult.data)
    email = parseResult.data.email || undefined
  }
  else {
    const body = await readBody(event)
    const parseResult = feedbackSchema.safeParse(body)
    if (!parseResult.success) {
      const firstError = parseResult.error.issues[0]
      throw createError({
        statusCode: 400,
        statusMessage: firstError?.message ?? 'Ошибка валидации'
      })
    }
    ;({ name, phone, email, message } = parseResult.data)
  }

  const config = useRuntimeConfig()
  const token = String(config.telegramBotToken || '').trim()
  const chatId = String(config.telegramChatId || '').trim()

  if (!token || !chatId) {
    const missing = []
    if (!token) missing.push('NUXT_TELEGRAM_BOT_TOKEN')
    if (!chatId) missing.push('NUXT_TELEGRAM_CHAT_ID')
    throw createError({
      statusCode: 500,
      statusMessage: `Telegram не настроен. Добавьте в Amvera: ${missing.join(', ')}`
    })
  }

  const text = [
    'Новая заявка с сайта',
    '',
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    email ? `Email: ${email}` : null,
    '',
    'Сообщение:',
    message
  ]
    .filter(Boolean)
    .join('\n')

  const baseUrl = `https://api.telegram.org/bot${token}`

  const sendMessageResponse = await $fetch<{ ok: boolean; description?: string }>(`${baseUrl}/sendMessage`, {
    method: 'POST',
    body: {
      chat_id: chatId,
      text
    }
  }).catch((err: unknown) => {
    const e = err as { data?: { description?: string }; statusMessage?: string }
    const msg = e?.data?.description ?? e?.statusMessage ?? 'Ошибка отправки в Telegram'
    throw createError({ statusCode: 500, statusMessage: msg })
  })

  if (!sendMessageResponse.ok) {
    throw createError({
      statusCode: 500,
      statusMessage: sendMessageResponse.description ?? 'Ошибка отправки в Telegram'
    })
  }

  for (const file of photoFiles) {
    const formData = new FormData()
    formData.append('chat_id', chatId)
    formData.append('photo', new Blob([file.data as BlobPart], { type: file.type || 'image/jpeg' }), file.filename)

    await $fetch<{ ok: boolean; description?: string }>(`${baseUrl}/sendPhoto`, {
      method: 'POST',
      body: formData
    }).catch((err: unknown) => {
      const e = err as { data?: { description?: string }; statusMessage?: string }
      const msg = e?.data?.description ?? e?.statusMessage ?? 'Ошибка отправки фото в Telegram'
      throw createError({ statusCode: 500, statusMessage: msg })
    })
  }

  return { success: true }
})
