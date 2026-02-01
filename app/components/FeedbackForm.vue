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

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const body = {
    name: event.data.name,
    phone: event.data.phone,
    email: event.data.email || undefined,
    message: event.data.message
  }

  try {
    await $fetch('/api/feedback', {
      method: 'POST',
      body
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
  }
  catch (err: unknown) {
    const e = err as { statusMessage?: string; data?: { message?: string }; message?: string }
    const message = e?.statusMessage ?? e?.data?.message ?? e?.message ?? 'Не удалось отправить заявку. Попробуйте позже.'
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
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormField
      label="Имя"
      name="name"
    >
      <UInput
        v-model="state.name"
        placeholder="Как к вам обращаться"
      />
    </UFormField>

    <UFormField
      label="Телефон"
      name="phone"
    >
      <UInput
        v-model="state.phone"
        type="tel"
        placeholder="+7 (999) 123-45-67"
      />
    </UFormField>

    <UFormField
      label="Email"
      name="email"
    >
      <UInput
        v-model="state.email"
        type="email"
        placeholder="email@example.com"
      />
    </UFormField>

    <UFormField
      label="Сообщение"
      name="message"
    >
      <UTextarea
        v-model="state.message"
        placeholder="Опишите задачу: тип мебели, размеры, желаемые сроки, город..."
        :rows="4"
      />
    </UFormField>

    <UButton
      type="submit"
      size="lg"
    >
      Отправить заявку
    </UButton>
  </UForm>
</template>
