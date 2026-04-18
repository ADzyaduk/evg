<script setup lang="ts">
import { createAbsoluteUrl, createBreadcrumbSchema, createWebPageSchema, businessIdentity } from '~/utils/seo'

const pageTitle = 'Блог о подушках для уличной мебели и яхт — PavlovCraft'
const pageDescription
  = 'Статьи о выборе тканей, уходе за подушками для уличной мебели и особенностях материалов для яхт в сочинском климате.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: 'Блог PavlovCraft — советы по тканям и уходу',
  ogDescription:
    'Практичные советы по выбору тканей и уходу за подушками для уличной мебели, пляжных лежаков и яхт.',
  ogType: 'website',
  ogUrl: 'https://pavlovcraft.ru/blog',
  ogImage: 'https://pavlovcraft.ru/img/booka.webp',
  twitterCard: 'summary_large_image',
  robots: 'index,follow'
})

const articles = [
  {
    title: 'Как выбрать ткань для садовых подушек',
    description: 'На что смотреть при выборе ткани для подушек, чтобы они служили дольше одного сезона.',
    date: '2025-01-15',
    image: '/img/booka.webp',
    to: '/blog/kak-vybrat-tkan-dlya-sadovykh-podushek',
    badge: 'Ткани',
    readTime: '4 мин'
  },
  {
    title: 'Как ухаживать за подушками для уличной мебели',
    description: 'Простые правила ухода, чтобы подушки и чехлы служили несколько сезонов подряд.',
    date: '2025-01-20',
    image: '/img/orig-opt.webp',
    to: '/blog/ukhod-za-ulichnymi-podushkami',
    badge: 'Уход',
    readTime: '3 мин'
  },
  {
    title: 'Какие ткани лучше для яхт и морского климата',
    description: 'Чем Sunbrella и морские материалы отличаются от обычных уличных тканей.',
    date: '2025-01-25',
    image: '/img/yacht.webp',
    to: '/blog/kakie-tkani-dlya-yaht',
    badge: 'Яхты',
    readTime: '5 мин'
  },
  {
    title: 'Чем уличные подушки отличаются от интерьерных',
    description: 'Почему нельзя просто вынести домашние подушки на улицу и чего ждать от уличных материалов.',
    date: '2025-01-28',
    image: '/img/lezhak.webp',
    to: '/blog/ulichnye-i-interernye-podushki',
    badge: 'Советы',
    readTime: '4 мин'
  }
]

const blogSchemas = [
  createWebPageSchema({
    path: '/blog',
    name: pageTitle,
    description: pageDescription
  }),
  createBreadcrumbSchema([
    { name: 'Главная', path: '/' },
    { name: 'Блог', path: '/blog' }
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${businessIdentity.siteUrl}/blog#collection`,
    'url': `${businessIdentity.siteUrl}/blog`,
    'name': pageTitle,
    'description': pageDescription,
    'isPartOf': {
      '@id': `${businessIdentity.siteUrl}/#website`
    },
    'about': {
      '@id': `${businessIdentity.siteUrl}/#organization`
    },
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': articles.map((article, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'url': createAbsoluteUrl(businessIdentity.siteUrl, article.to),
        'name': article.title
      }))
    }
  }
]

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(blogSchemas)
    }
  ]
})

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
</script>

<template>
  <div>
    <section
      v-animate
      class="relative overflow-hidden bg-linear-to-br from-primary/5 via-transparent to-primary/5 py-16 lg:py-24"
    >
      <div class="max-w-(--ui-container) mx-auto px-4 text-center">
        <UBadge
          label="Блог"
          variant="subtle"
          size="lg"
          class="mb-4"
        />
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          Полезные статьи о тканях и уходе
        </h1>
        <p class="mt-4 text-lg text-muted max-w-2xl mx-auto">
          Делимся опытом из реальных проектов: какие ткани выбрать, как продлить срок службы подушек и что учесть при заказе.
        </p>
      </div>
    </section>

    <UPageSection v-animate>
      <div class="grid gap-8">
        <NuxtLink
          v-for="(article, i) in articles"
          :key="article.to"
          v-animate="i + 1"
          :to="article.to"
          class="group grid gap-6 lg:grid-cols-[1fr,2fr] items-center p-4 -mx-4 rounded-2xl hover:bg-elevated/60 transition-colors"
        >
          <div class="overflow-hidden rounded-xl bg-muted">
            <img
              :src="article.image"
              :alt="article.title"
              width="700"
              height="394"
              loading="lazy"
              decoding="async"
              class="aspect-video w-full object-cover group-hover:scale-105 transition-transform duration-500"
            >
          </div>

          <div>
            <div class="flex items-center gap-3 mb-3">
              <UBadge
                :label="article.badge"
                variant="subtle"
                size="sm"
              />
              <span class="text-xs text-muted flex items-center gap-1">
                <UIcon
                  name="i-lucide-clock"
                  class="size-3"
                />
                {{ article.readTime }}
              </span>
            </div>

            <h2 class="text-xl font-semibold group-hover:text-primary transition-colors">
              {{ article.title }}
            </h2>

            <p class="mt-2 text-sm text-muted line-clamp-2">
              {{ article.description }}
            </p>

            <div class="mt-4 flex items-center justify-between">
              <time
                :datetime="article.date"
                class="text-xs text-muted"
              >
                {{ formatDate(article.date) }}
              </time>
              <span class="text-sm text-primary font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Читать
                <UIcon
                  name="i-lucide-arrow-right"
                  class="size-4"
                />
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </UPageSection>
  </div>
</template>
