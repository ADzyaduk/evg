<script setup lang="ts">
useSeoMeta({
  title: 'Каталог переехал — PavlovCraft',
  description:
    'Раздел «Каталог» объединён со страницей «Услуги». Перейдите по ссылке, чтобы посмотреть все изделия PavlovCraft.',
  ogTitle: 'Каталог — PavlovCraft',
  ogDescription:
    'Используйте ссылку на страницу «Услуги», чтобы увидеть актуальный ассортимент PavlovCraft.',
  ogType: 'website',
  ogUrl: 'https://pavlovcraft.ru/katalog',
  ogImage: 'https://pavlovcraft.ru/img/orig-opt.webp',
  twitterCard: 'summary_large_image',
  robots: 'noindex,follow'
})
</script>

<template>
  <div>
    <UPageHero
      title="Каталог"
      description="Этот раздел объединён со страницей «Услуги». Все изделия и направления теперь в одном месте."
      :links="[
        {
          label: 'Перейти к услугам',
          to: '/uslugi',
          trailingIcon: 'i-lucide-arrow-right',
          size: 'lg'
        }
      ]"
    />
  </div>
</template>
