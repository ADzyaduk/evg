<script setup lang="ts">
import { SEO_LAST_UPDATED, createArticleSchema, createBreadcrumbSchema, createWebPageSchema } from '~/utils/seo'

const articleTitle = 'Какие ткани лучше для яхт и морского климата'
const articlePath = '/blog/kakie-tkani-dlya-yaht'
const articlePublished = '2025-01-25'
const articleImage = '/img/tkani/sunbrella-fabrics.webp'
const articleDescription
  = 'Разбираем, какие ткани подойдут для носовых подушек и мягкой мебели на яхте: Sunbrella, морские ткани, кожа и алькантара.'

useSeoMeta({
  title: `${articleTitle} — блог PavlovCraft`,
  description: articleDescription,
  ogTitle: 'Ткани для яхт и морского климата',
  ogDescription:
    'Чем специализированные морские ткани вроде Sunbrella отличаются от обычных уличных материалов и когда их лучше использовать на яхте.',
  ogType: 'article',
  ogUrl: 'https://pavlovcraft.ru/blog/kakie-tkani-dlya-yaht',
  ogImage: 'https://pavlovcraft.ru/img/tkani/sunbrella-fabrics.webp',
  twitterCard: 'summary_large_image',
  robots: 'index,follow'
})

const articleSchemas = [
  createWebPageSchema({
    path: articlePath,
    name: articleTitle,
    description: articleDescription
  }),
  createBreadcrumbSchema([
    { name: 'Главная', path: '/' },
    { name: 'Блог', path: '/blog' },
    { name: articleTitle, path: articlePath }
  ]),
  createArticleSchema({
    path: articlePath,
    headline: articleTitle,
    description: articleDescription,
    image: articleImage,
    datePublished: articlePublished,
    dateModified: SEO_LAST_UPDATED
  })
]

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(articleSchemas)
    }
  ]
})

const materials = [
  {
    icon: 'i-lucide-anchor',
    title: 'Sunbrella и морские ткани',
    desc: 'Устойчивы к соли, UV, плесени. Сохраняют цвет при круглогодичной эксплуатации.',
    image: '/img/tkani/sunbrella.webp'
  },
  {
    icon: 'i-lucide-gem',
    title: 'Кожа и алькантара',
    desc: 'Для кают и интерьеров. Статусный вид, сочетаются с деревом и фурнитурой.',
    image: '/img/tkani/alcantara.webp'
  },
  {
    icon: 'i-lucide-sun',
    title: 'Уличные ткани',
    desc: 'Бюджетный вариант для сезонного использования, когда подушки убирают на зиму.',
    image: '/img/tkani/oxford-300d.webp'
  }
]

const otherArticles = [
  {
    title: 'Как выбрать ткань для садовых подушек',
    to: '/blog/kak-vybrat-tkan-dlya-sadovykh-podushek',
    image: '/img/booka.webp'
  },
  {
    title: 'Уличные vs интерьерные подушки',
    to: '/blog/ulichnye-i-interernye-podushki',
    image: '/img/lezhak.webp'
  }
]
</script>

<template>
  <div>
    <div class="max-w-(--ui-container) mx-auto px-4 pt-6">
      <UBreadcrumb
        :items="[
          { label: 'Блог', to: '/blog' },
          { label: 'Ткани для яхт и морского климата' }
        ]"
      />
    </div>

    <article class="max-w-3xl mx-auto px-4 py-10 lg:py-16">
      <header v-animate>
        <div class="flex items-center gap-3 mb-4">
          <UBadge
            label="Яхты"
            variant="subtle"
            size="sm"
          />
          <span class="text-xs text-muted flex items-center gap-1">
            <UIcon
              name="i-lucide-clock"
              class="size-3"
            />
            5 мин
          </span>
          <time
            :datetime="articlePublished"
            class="text-xs text-muted"
          >
            25 января 2025
          </time>
          <span class="text-xs text-muted">
            Обновлено 18 апреля 2026
          </span>
        </div>

        <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">
          {{ articleTitle }}
        </h1>
        <p class="mt-3 text-lg text-muted">
          Чем Sunbrella и морские материалы отличаются от обычных уличных тканей.
        </p>
        <div class="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/8 px-3 py-1 text-xs text-toned">
          <UIcon
            name="i-lucide-badge-check"
            class="size-4 text-primary"
          />
          Материал подготовлен редакцией PavlovCraft
        </div>
      </header>

      <div
        v-animate
        class="mt-8 overflow-hidden rounded-2xl"
      >
        <img
          src="/img/tkani/sunbrella-fabrics.webp"
          alt="Образцы морских тканей Sunbrella для яхт"
          width="750"
          height="422"
          class="w-full object-cover aspect-[2/1]"
        >
      </div>

      <div
        v-animate
        class="mt-10 prose prose-base max-w-none dark:prose-invert"
      >
        <p>
          Носовые подушки и мягкая мебель на яхте работают в ещё более сложных условиях, чем
          подушки для уличной мебели на террасе. Здесь важно сочетание устойчивости к солёной
          воде, солнцу, ветру и постоянным механическим нагрузкам — особенно, если яхта
          эксплуатируется в Сочи и по всему побережью Чёрного моря.
        </p>
      </div>

      <div
        v-animate
        class="mt-8 grid gap-4"
      >
        <div
          v-for="mat in materials"
          :key="mat.title"
          class="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-elevated/50"
        >
          <img
            :src="mat.image"
            :alt="mat.title"
            width="200"
            height="140"
            loading="lazy"
            decoding="async"
            class="w-full sm:w-40 aspect-video rounded-lg object-cover shrink-0"
          >
          <div class="flex flex-col justify-center">
            <div class="flex items-center gap-2 mb-1">
              <UIcon
                :name="mat.icon"
                class="size-5 text-primary"
              />
              <p class="font-semibold text-sm">
                {{ mat.title }}
              </p>
            </div>
            <p class="text-sm text-muted">
              {{ mat.desc }}
            </p>
          </div>
        </div>
      </div>

      <div
        v-animate
        class="mt-10 prose prose-base max-w-none dark:prose-invert"
      >
        <h2>Sunbrella и аналогичные морские ткани</h2>
        <p>
          Ткани класса Sunbrella и их аналоги изначально разрабатывались как морские: для яхт,
          катеров и открытых палуб. Они отличаются высокой устойчивостью к выгоранию, плесени и
          истиранию. Такая ткань дольше сохраняет цвет и структуру даже при круглогодичной
          эксплуатации у моря.
        </p>
        <p>
          Ещё один плюс — комфорт при соприкосновении с кожей: современные морские ткани приятны
          на ощупь, не «пластиковые» и не перегреваются так сильно, как дешёвые материалы без
          защиты.
        </p>

        <h2>Кожа и алькантара для яхт</h2>
        <p>
          Для интерьерной части яхты и закрытых кают часто используют кожу или алькантару. Эти
          материалы выглядят статусно и хорошо сочетаются с деревом и хромированной фурнитурой.
          При этом для носовых подушек и открытых палуб мы всё равно рекомендуем более устойчивые
          к влаге и солнцу ткани.
        </p>

        <h2>Когда достаточно «обычных» уличных тканей</h2>
        <p>
          Если яхта используется в тёплый сезон и подушки снимаются на хранение зимой, иногда
          достаточно качественных уличных тканей для садовой мебели. Мы подбираем материалы под
          конкретный сценарий: частные прогулки, чартер, стоянка в марине, насколько часто подушки
          убирают во время дождя и зимы.
        </p>

        <h2>Выбор под конкретный проект</h2>
        <p>
          Для каждого проекта мы смотрим, где стоит яхта, как часто её используют и готовы ли вы
          убирать подушки на хранение. Исходя из этого предлагаем варианты тканей и объясняем
          плюсы и минусы каждого решения по бюджету и долговечности.
        </p>
      </div>

      <div
        v-animate
        class="mt-10 p-6 rounded-2xl bg-primary/5 border border-primary/10"
      >
        <p class="font-semibold">
          Нужны подушки для яхты?
        </p>
        <p class="text-sm text-muted mt-1">
          Пришлите фото палубы и мы подберём оптимальный материал
          с учётом вашего бюджета и условий эксплуатации.
        </p>
        <UButton
          to="/kontakty"
          label="Обсудить проект"
          variant="soft"
          trailing-icon="i-lucide-arrow-right"
          class="mt-4"
        />
      </div>

      <USeparator class="my-10" />

      <div v-animate>
        <p class="font-semibold mb-4">
          Читайте также
        </p>
        <div class="grid gap-4 sm:grid-cols-2">
          <NuxtLink
            v-for="a in otherArticles"
            :key="a.to"
            :to="a.to"
            class="group flex gap-4 items-center p-3 rounded-xl hover:bg-elevated/60 transition-colors"
          >
            <img
              :src="a.image"
              :alt="a.title"
              width="120"
              height="80"
              loading="lazy"
              class="size-16 rounded-lg object-cover shrink-0"
            >
            <p class="text-sm font-medium group-hover:text-primary transition-colors">
              {{ a.title }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </article>

    <p class="sr-only">
      Носовые подушки для яхт, ткани Sunbrella для яхт, мягкая мебель для
      яхты на заказ, пошив подушек для яхты в Сочи.
    </p>
  </div>
</template>
