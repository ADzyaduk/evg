<script setup lang="ts">
const title = 'Современный сервис на Nuxt'
const description =
  'Создаем быстрые и красивые веб‑приложения на Nuxt и Nuxt UI. Фокус на результате, скорости и удобстве для ваших клиентов.'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'ru'
  }
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
