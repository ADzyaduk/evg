<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  name: z.string().min(1, 'Укажите ваше имя'),
  phone: z.string().min(1, 'Укажите номер телефона'),
  message: z.string().min(1, 'Напишите сообщение'),
  consent: z.boolean().refine(
    val => val === true,
    { message: 'Нужно согласиться с обработкой персональных данных' }
  )
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  name: undefined,
  phone: undefined,
  message: undefined,
  consent: false
})

const photos = ref<File[]>([])
const MAX_FILES = 5
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']

const toast = useToast()

function validateFiles(): string | null {
  const files = photos.value ?? []
  if (files.length > MAX_FILES) {
    return `Можно загрузить не более ${MAX_FILES} фото`
  }
  for (const file of files) {
    if (file.size > MAX_FILE_SIZE) {
      return `Файл «${file.name}» слишком большой. Максимальный размер — 5 МБ`
    }
    if (!ACCEPTED_TYPES.includes(file.type)) {
      return `Файл «${file.name}» в неподдерживаемом формате. Используйте JPG, PNG, WebP или GIF`
    }
  }
  return null
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const fileError = validateFiles()
  if (fileError) {
    toast.add({ title: 'Проверьте форму', description: fileError, color: 'error' })
    return
  }

  const formData = new FormData()
  formData.append('name', event.data.name)
  formData.append('phone', event.data.phone)
  formData.append('message', event.data.message)
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
      description: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
      color: 'success'
    })
    Object.assign(state, {
      name: undefined,
      phone: undefined,
      message: undefined,
      consent: false
    })
    photos.value = []
  } catch (err: unknown) {
    const e = err as {
      statusCode?: number
      statusMessage?: string
      data?: { statusMessage?: string, message?: string, data?: { description?: string } }
      message?: string
    }
    const message
      = e?.statusMessage
        ?? e?.data?.statusMessage
        ?? e?.data?.data?.description
        ?? e?.data?.message
        ?? e?.message
        ?? 'Не удалось отправить заявку. Попробуйте позже.'
    if (import.meta.dev) {
      console.error('[FeedbackForm]', e)
    }
    toast.add({
      title: 'Не удалось отправить',
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

    <UFormField
      name="consent"
      class="w-full"
    >
      <UCheckbox
        :model-value="(state.consent ?? false) as boolean"
        label="Я согласен(а) на обработку персональных данных"
        class="text-sm"
        @update:model-value="(v: unknown) => { state.consent = v === true }"
      >
        <template #description>
          <span class="text-xs sm:text-sm">
            Отправляя форму, вы подтверждаете согласие с
            <NuxtLink
              to="/politika-konfidentsialnosti"
              class="text-primary underline-offset-2 hover:underline"
            >
              политикой обработки персональных данных
            </NuxtLink>
            .
          </span>
        </template>
      </UCheckbox>
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
