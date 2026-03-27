<script setup lang="ts">
const title = 'Подушки для уличной мебели и яхт в Сочи'
const description
  = 'Шьём подушки для уличной мебели, пляжных лежаков и носовые подушки для яхт из влагостойких тканей с UV‑защитой. Перешиваем диваны и мягкую мебель по вашим размерам в Сочи и по Краснодарскому краю.'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  htmlAttrs: {
    lang: 'ru'
  },
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'PavlovCraft',
        'description': description,
        'url': 'https://pavlovcraft.ru',
        'telephone': '+79854240703',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'ул. Мира, 44а',
          'addressLocality': 'Сочи',
          'addressRegion': 'Краснодарский край',
          'addressCountry': 'RU'
        },
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            'opens': '09:00',
            'closes': '18:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': 'Saturday',
            'opens': '10:00',
            'closes': '16:00'
          }
        ],
        'image': 'https://pavlovcraft.ru/img/hero.webp',
        'priceRange': '$$'
      })
    }
  ]
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
