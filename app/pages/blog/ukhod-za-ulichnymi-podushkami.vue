<script setup lang="ts">
import { SEO_LAST_UPDATED, createArticleSchema, createBreadcrumbSchema, createWebPageSchema } from '~/utils/seo'

const articleTitle = 'Как ухаживать за подушками для уличной мебели'
const articlePath = '/blog/ukhod-za-ulichnymi-podushkami'
const articlePublished = '2025-01-20'
const articleImage = '/img/orig1-opt.webp'
const articleDescription
  = 'Подробно рассказываем, как ухаживать за подушками для уличной мебели и пляжных лежаков: чистка, сушка, стирка чехлов и хранение вне сезона.'

useSeoMeta({
  title: `${articleTitle} — блог PavlovCraft`,
  description: articleDescription,
  ogTitle: 'Уход за подушками для уличной мебели',
  ogDescription:
    'Регулярная чистка, правильная сушка, бережная стирка чехлов и хранение садовых подушек — простые правила, чтобы они служили дольше.',
  ogType: 'article',
  ogUrl: 'https://pavlovcraft.ru/blog/ukhod-za-ulichnymi-podushkami',
  ogImage: 'https://pavlovcraft.ru/img/orig1-opt.webp',
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

const tips = [
  {
    icon: 'i-lucide-wind',
    title: 'Чистка от пыли',
    text: 'Раз в неделю проходитесь мягкой щёткой или пылесосом с насадкой для мебели.'
  },
  {
    icon: 'i-lucide-droplets',
    title: 'После дождя',
    text: 'Стряхните воду и поставьте подушки вертикально в проветриваемом месте.'
  },
  {
    icon: 'i-lucide-washing-machine',
    title: 'Стирка чехлов',
    text: 'Стирайте чехлы отдельно от наполнителя, при 30–40°C, без агрессивных отбеливателей.'
  },
  {
    icon: 'i-lucide-warehouse',
    title: 'Хранение зимой',
    text: 'Уберите подушки в сухое место, не вплотную к стене — оставьте зазор для вентиляции.'
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
          { label: 'Уход за подушками для уличной мебели' }
        ]"
      />
    </div>

    <article class="max-w-3xl mx-auto px-4 py-10 lg:py-16">
      <header v-animate>
        <div class="flex items-center gap-3 mb-4">
          <UBadge
            label="Уход"
            variant="subtle"
            size="sm"
          />
          <span class="text-xs text-muted flex items-center gap-1">
            <UIcon
              name="i-lucide-clock"
              class="size-3"
            />
            3 мин
          </span>
          <time
            :datetime="articlePublished"
            class="text-xs text-muted"
          >
            20 января 2025
          </time>
          <span class="text-xs text-muted">
            Обновлено 18 апреля 2026
          </span>
        </div>

        <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">
          {{ articleTitle }}
        </h1>
        <p class="mt-3 text-lg text-muted">
          Простые правила, чтобы подушки служили несколько сезонов и сохраняли внешний вид.
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
          src="/img/orig1-opt.webp"
          alt="Подушки для уличной мебели на террасе"
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
          Даже самые качественные подушки для уличной мебели требуют минимального ухода. Если
          вовремя убирать пыль, сушить после дождя и стирать чехлы по инструкции, подушки спокойно
          переживут несколько сезонов без потери формы и цвета.
        </p>
      </div>

      <div
        v-animate
        class="mt-8 grid gap-4 sm:grid-cols-2"
      >
        <div
          v-for="(tip, i) in tips"
          :key="i"
          class="flex gap-4 p-5 rounded-xl bg-elevated/50"
        >
          <div class="flex shrink-0 items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
            <UIcon
              :name="tip.icon"
              class="size-5"
            />
          </div>
          <div>
            <p class="font-semibold text-sm">
              {{ tip.title }}
            </p>
            <p class="text-xs text-muted mt-1">
              {{ tip.text }}
            </p>
          </div>
        </div>
      </div>

      <div
        v-animate
        class="mt-10 prose prose-base max-w-none dark:prose-invert"
      >
        <h2>Подробнее о каждом этапе</h2>

        <h3>Регулярная чистка от пыли и мусора</h3>
        <p>
          На открытых террасах и возле моря подушки быстро собирают пыль, песок и листву. Раз в
          неделю достаточно пройтись по поверхности мягкой щёткой или пылесосом с насадкой для
          мебели. Так вы снизите нагрузку при стирке и продлите срок службы ткани.
        </p>

        <h3>Что делать после дождя</h3>
        <p>
          Если подушки намокли под дождём или от брызг бассейна, важно дать им полностью высохнуть.
          Влагостойкие ткани не боятся капель, но при длительной сырости внутри может появиться
          запах. Стряхните воду и поставьте подушки вертикально в проветриваемом месте.
        </p>

        <div class="not-prose my-6 overflow-hidden rounded-xl">
          <img
            src="/img/sl1600-opt.webp"
            alt="Подушки для мебели"
            width="700"
            height="394"
            loading="lazy"
            decoding="async"
            class="w-full object-cover aspect-video"
          >
        </div>

        <h3>Стирка съёмных чехлов</h3>
        <p>
          Съёмные чехлы лучше всего стирать отдельно от наполнителя. Ориентируйтесь на рекомендации
          производителя ткани: обычно это бережный режим без агрессивных отбеливателей. Для
          уличных коллекций с пропиткой от воды и грязи важно не использовать слишком горячую воду,
          чтобы не повредить защитный слой.
        </p>

        <h3>Хранение вне сезона</h3>
        <p>
          На зиму или в период длительного отсутствия лучше убрать подушки в сухое помещение.
          Используйте чехлы или плотные мешки, чтобы защитить наполнитель от пыли. Не храните
          подушки вплотную к сырой стене или полу — оставьте небольшой зазор для вентиляции.
        </p>

        <h3>Когда стоит обновить наполнитель</h3>
        <p>
          Со временем даже качественный наполнитель может потерять упругость, особенно на наиболее
          нагруженных местах. Если подушки сильно просели или стали комом, разумно заменить
          наполнитель и освежить чехлы. Это дешевле полной замены мебели и заметно повышает комфорт.
        </p>
      </div>

      <div
        v-animate
        class="mt-10 p-6 rounded-2xl bg-primary/5 border border-primary/10"
      >
        <p class="font-semibold">
          Хотите обновить подушки?
        </p>
        <p class="text-sm text-muted mt-1">
          Если подушки потеряли форму или выгорели — мы поможем подобрать ткани и наполнители
          под ваш объект в Сочи и Краснодарском крае.
        </p>
        <UButton
          to="/kontakty"
          label="Заказать новые подушки"
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
      Уход за подушками для уличной мебели, стирка чехлов на шезлонги, хранение
      садовых подушек, пошив подушек на заказ.
    </p>
  </div>
</template>
