<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  name: z.string().min(1, 'Имя обязательно'),
  phone: z.string().min(1, 'Телефон обязателен'),
  email: z.union([z.string().email('Неверный формат email'), z.literal('')]).optional(),
  message: z.string().min(1, 'Сообщение обязательно')
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  name: undefined,
  phone: undefined,
  email: undefined,
  message: undefined
})

const photos = ref<File[]>([])
const MAX_FILES = 5
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']

const toast = useToast()

function validateFiles(): string | null {
  const files = photos.value ?? []
  if (files.length > MAX_FILES) {
    return `Максимум ${MAX_FILES} фото`
  }
  for (const file of files) {
    if (file.size > MAX_FILE_SIZE) {
      return `Файл ${file.name} слишком большой (макс. 5 МБ)`
    }
    if (!ACCEPTED_TYPES.includes(file.type)) {
      return `Формат ${file.name} не поддерживается (JPG, PNG, WebP, GIF)`
    }
  }
  return null
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const fileError = validateFiles()
  if (fileError) {
    toast.add({ title: 'Ошибка', description: fileError, color: 'error' })
    return
  }

  const formData = new FormData()
  formData.append('name', event.data.name)
  formData.append('phone', event.data.phone)
  formData.append('message', event.data.message)
  if (event.data.email) {
    formData.append('email', event.data.email)
  }
  for (const file of (photos.value ?? [])) {
    formData.append('photos', file)
  }

  try {
    await $fetch('/api/feedback', {
      method: 'POST',
      body: formData
    })
    toast.add({
      title: 'Заявка отправлена',
      description: 'Мы свяжемся с вами в ближайшее время.',
      color: 'success'
    })
    Object.assign(state, {
      name: undefined,
      phone: undefined,
      email: undefined,
      message: undefined
    })
    photos.value = []
  }
  catch (err: unknown) {
    const e = err as {
      statusCode?: number
      statusMessage?: string
      data?: { statusMessage?: string; message?: string; data?: { description?: string } }
      message?: string
    }
    const message =
      e?.statusMessage ??
      e?.data?.statusMessage ??
      e?.data?.data?.description ??
      e?.data?.message ??
      e?.message ??
      'Не удалось отправить заявку. Попробуйте позже.'
    if (import.meta.dev) {
      console.error('[FeedbackForm]', e)
    }
    toast.add({
      title: 'Ошибка',
      description: message,
      color: 'error'
    })
  }
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="w-full space-y-4"
    @submit="onSubmit"
  >
    <div class="grid gap-4 sm:grid-cols-2">
      <UFormField
        label="Имя"
        name="name"
        class="w-full"
      >
        <UInput
          v-model="state.name"
          placeholder="Как к вам обращаться"
          autocomplete="name"
          size="md"
          class="w-full"
        />
      </UFormField>

      <UFormField
        label="Телефон"
        name="phone"
        class="w-full"
      >
        <UInput
          v-model="state.phone"
          type="tel"
          placeholder="+7 (999) 123-45-67"
          autocomplete="tel"
          size="md"
          class="w-full"
        />
      </UFormField>
    </div>

    <UFormField
      label="Email"
      name="email"
      class="w-full"
    >
      <UInput
        v-model="state.email"
        type="email"
        placeholder="email@example.com"
        autocomplete="email"
        size="md"
        class="w-full"
      />
    </UFormField>

    <UFormField
      label="Сообщение"
      name="message"
      class="w-full"
    >
      <UTextarea
        v-model="state.message"
        placeholder="Опишите задачу: тип мебели, размеры, желаемые сроки, город..."
        :rows="4"
        autoresize
        :maxrows="8"
        autocomplete="off"
        size="md"
        class="w-full min-h-20"
      />
    </UFormField>

    <UFormField
      label="Фото"
      class="w-full"
    >
      <UFileUpload
        v-model="photos"
        :accept="ACCEPTED_TYPES.join(',')"
        :multiple="true"
        label="Перетащите или нажмите"
        description="JPG, PNG, WebP, GIF · до 5 МБ · макс. 5 шт"
        icon="i-lucide-image-plus"
        variant="area"
        size="sm"
        class="w-full min-h-24"
      />
    </UFormField>

    <UButton
      type="submit"
      size="lg"
      block
      trailing-icon="i-lucide-send"
      class="mt-1"
    >
      Отправить заявку
    </UButton>
  </UForm>
</template>
