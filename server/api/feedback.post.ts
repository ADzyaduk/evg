import { z } from 'zod'

const feedbackSchema = z.object({
  name: z.string().min(1, 'Имя обязательно'),
  phone: z.string().min(1, 'Телефон обязателен'),
  email: z.string().email().optional().or(z.literal('')),
  message: z.string().min(1, 'Сообщение обязательно')
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const parseResult = feedbackSchema.safeParse(body)
  if (!parseResult.success) {
    const firstError = parseResult.error.issues[0]
    throw createError({
      statusCode: 400,
      statusMessage: firstError?.message ?? 'Ошибка валидации'
    })
  }

  const { name, phone, email, message } = parseResult.data

  const config = useRuntimeConfig()
  const token = config.telegramBotToken
  const chatId = config.telegramChatId

  if (!token || !chatId) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Telegram не настроен. Укажите NUXT_TELEGRAM_BOT_TOKEN и NUXT_TELEGRAM_CHAT_ID.'
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

  const url = `https://api.telegram.org/bot${token}/sendMessage`
  const response = await $fetch<{ ok: boolean; description?: string }>(url, {
    method: 'POST',
    body: {
      chat_id: chatId,
      text
    }
  }).catch((err) => {
    throw createError({
      statusCode: 500,
      statusMessage: err?.data?.description ?? 'Ошибка отправки в Telegram'
    })
  })

  if (!response.ok) {
    throw createError({
      statusCode: 500,
      statusMessage: response.description ?? 'Ошибка отправки в Telegram'
    })
  }

  return { success: true }
})
