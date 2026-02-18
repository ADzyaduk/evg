<script setup lang="ts">
useSeoMeta({
  title: 'О нас — раздел переехал на страницу «О компании» | PavlovCraft',
  description:
    'Раздел «О нас» переехал на обновлённую страницу «О компании» PavlovCraft. Перейдите по ссылке, чтобы узнать больше о мастерской по пошиву подушек и чехлов в Сочи.',
  ogTitle: 'О нас — PavlovCraft',
  ogDescription:
    'Используйте ссылку на страницу «О компании», чтобы прочитать актуальную информацию о PavlovCraft.',
  ogType: 'website',
  ogUrl: 'https://pavlovcraft.ru/o-nas',
  ogImage: 'https://pavlovcraft.ru/img/hero.webp',
  twitterCard: 'summary_large_image',
  robots: 'noindex,follow'
})
</script>

<template>
  <div>
    <UPageHero
      title="О нас"
      description="Раздел переехал на страницу «О компании». Используйте новое меню, чтобы перейти к актуальной информации."
      :links="[
        {
          label: 'Перейти на страницу «О компании»',
          to: '/o-kompanii',
          trailingIcon: 'i-lucide-arrow-right',
          size: 'lg'
        }
      ]"
    />
  </div>
</template>
