<script setup lang="ts">
import { businessIdentity, createAbsoluteUrl, createOrganizationSchema, createWebsiteSchema, normalizeCanonicalPath } from '~/utils/seo'

const title = 'Подушки для уличной мебели и яхт в Сочи'
const description
  = 'Шьём подушки для уличной мебели, пляжных лежаков и носовые подушки для яхт из влагостойких тканей с UV‑защитой. Перешиваем диваны и мягкую мебель по вашим размерам в Сочи и по Краснодарскому краю.'

const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const siteUrl = runtimeConfig.public.siteUrl || businessIdentity.siteUrl
const canonicalUrl = computed(() => createAbsoluteUrl(siteUrl, normalizeCanonicalPath(route.fullPath)))
const globalSchemas = computed(() => [
  createOrganizationSchema(description),
  createWebsiteSchema()
])

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl }
  ],
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  htmlAttrs: {
    lang: 'ru'
  },
  script: [
    {
      key: 'global-structured-data',
      type: 'application/ld+json',
      innerHTML: JSON.stringify(globalSchemas.value)
    }
  ]
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogUrl: canonicalUrl,
  ogImage: `${siteUrl.replace(/\/$/, '')}/img/hero.webp`,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
