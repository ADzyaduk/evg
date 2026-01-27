<script setup lang="ts">
const title = 'Подушки для уличной мебели и яхт в Сочи'
const description =
  'Шьём подушки для уличной мебели, пляжных лежаков и носовые подушки для яхт из влагостойких тканей с UV‑защитой. Перешиваем диваны и мягкую мебель по вашим размерам в Сочи и по Краснодарскому краю.'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
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
