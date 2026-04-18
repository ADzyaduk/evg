<script setup lang="ts">
import { SEO_LAST_UPDATED, createArticleSchema, createBreadcrumbSchema, createWebPageSchema } from '~/utils/seo'

const articleTitle = 'Чем уличные подушки отличаются от интерьерных'
const articlePath = '/blog/ulichnye-i-interernye-podushki'
const articlePublished = '2025-01-28'
const articleImage = '/img/lezhak.webp'
const articleDescription
  = 'Объясняем, почему нельзя просто вынести диванные подушки на улицу и чем уличные ткани и наполнители отличаются от интерьерных.'

useSeoMeta({
  title: `${articleTitle} — блог PavlovCraft`,
  description: articleDescription,
  ogTitle: 'Отличия уличных и интерьерных подушек',
  ogDescription:
    'Подушки для уличной мебели и диванные подушки в доме — разные задачи. Рассказываем о тканях, наполнителях и практическом использовании.',
  ogType: 'article',
  ogUrl: 'https://pavlovcraft.ru/blog/ulichnye-i-interernye-podushki',
  ogImage: 'https://pavlovcraft.ru/img/lezhak.webp',
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

const comparison = [
  {
    param: 'Ткань',
    outdoor: 'Плотная, с пропиткой от воды и UV-защитой',
    indoor: 'Мягкая, декоративная, без защиты'
  },
  {
    param: 'Наполнитель',
    outdoor: 'Быстросохнущий, устойчивый к влаге',
    indoor: 'Пух, синтепон, поролон — впитывают воду'
  },
  {
    param: 'Выгорание',
    outdoor: 'Устойчива к солнцу на несколько сезонов',
    indoor: 'Выгорает за 1–2 месяца на улице'
  },
  {
    param: 'Уход',
    outdoor: 'Съёмные чехлы, стирка, чистка щёткой',
    indoor: 'Химчистка, бережная стирка'
  },
  {
    param: 'Стоимость',
    outdoor: 'Выше, но окупается сроком службы',
    indoor: 'Ниже, но для улицы непригодна'
  }
]

const otherArticles = [
  {
    title: 'Как выбрать ткань для садовых подушек',
    to: '/blog/kak-vybrat-tkan-dlya-sadovykh-podushek',
    image: '/img/booka.webp'
  },
  {
    title: 'Уход за подушками для уличной мебели',
    to: '/blog/ukhod-za-ulichnymi-podushkami',
    image: '/img/orig-opt.webp'
  }
]
</script>

<template>
  <div>
    <div class="max-w-(--ui-container) mx-auto px-4 pt-6">
      <UBreadcrumb
        :items="[
          { label: 'Блог', to: '/blog' },
          { label: 'Уличные и интерьерные подушки' }
        ]"
      />
    </div>

    <article class="max-w-3xl mx-auto px-4 py-10 lg:py-16">
      <header v-animate>
        <div class="flex items-center gap-3 mb-4">
          <UBadge
            label="Советы"
            variant="subtle"
            size="sm"
          />
          <span class="text-xs text-muted flex items-center gap-1">
            <UIcon
              name="i-lucide-clock"
              class="size-3"
            />
            4 мин
          </span>
          <time
            :datetime="articlePublished"
            class="text-xs text-muted"
          >
            28 января 2025
          </time>
          <span class="text-xs text-muted">
            Обновлено 18 апреля 2026
          </span>
        </div>

        <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">
          {{ articleTitle }}
        </h1>
        <p class="mt-3 text-lg text-muted">
          Почему нельзя просто вынести домашние подушки на улицу и чего ждать от уличных материалов.
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
          src="/img/lezhak.webp"
          alt="Уличные подушки на пляжных лежаках"
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
          Интерьерные диванные подушки и подушки для уличной мебели решают разные задачи. Внутри
          дома ткани почти не сталкиваются с ультрафиолетом, влагой и резкими перепадами
          температур, а на улице это норма. Поэтому уличные материалы устроены иначе.
        </p>
      </div>

      <div
        v-animate
        class="mt-8 overflow-x-auto"
      >
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="border-b border-default">
              <th class="text-left py-3 pr-4 font-semibold">
                Параметр
              </th>
              <th class="text-left py-3 px-4 font-semibold text-primary">
                <UIcon
                  name="i-lucide-sun"
                  class="size-4 mr-1 inline-block align-middle"
                />
                Уличные
              </th>
              <th class="text-left py-3 pl-4 font-semibold">
                <UIcon
                  name="i-lucide-sofa"
                  class="size-4 mr-1 inline-block align-middle"
                />
                Интерьерные
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in comparison"
              :key="row.param"
              class="border-b border-default/50"
            >
              <td class="py-3 pr-4 font-medium">
                {{ row.param }}
              </td>
              <td class="py-3 px-4 text-muted">
                {{ row.outdoor }}
              </td>
              <td class="py-3 pl-4 text-muted">
                {{ row.indoor }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        v-animate
        class="mt-10 prose prose-base max-w-none dark:prose-invert"
      >
        <h2>Ткани и пропитки</h2>
        <p>
          Уличные ткани плотнее, часто имеют водоотталкивающую пропитку и защиту от выгорания.
          Интерьерная хлопковая или вискозная ткань быстро намокнет, потускнеет и может покрыться
          пятнами плесени, если оставить её под дождём.
        </p>

        <h2>Наполнители</h2>
        <p>
          Внутри уличных подушек используют наполнители, которые меньше впитывают влагу и быстрее
          сохнут. Интерьерные подушки при намокании дольше остаются сырыми, могут комковаться и
          накапливать запах.
        </p>

        <h2>Практика использования</h2>
        <p>
          Настоящие уличные подушки терпят случайные брызги бассейна, утреннюю росу и регулярную
          чистку. Это не значит, что их можно постоянно держать под ливнем, но запас прочности у
          них заметно выше, чем у интерьерных аналогов.
        </p>
      </div>

      <div
        v-animate
        class="mt-10 p-6 rounded-2xl bg-primary/5 border border-primary/10"
      >
        <p class="font-semibold">
          Хотите подушки, которые переживут не один сезон?
        </p>
        <p class="text-sm text-muted mt-1">
          Мы подберём уличные ткани и наполнители под ваш объект — от садового кресла до яхты.
        </p>
        <UButton
          to="/kontakty"
          label="Заказать подушки"
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
      Подушки для уличной мебели, отличие уличных и интерьерных подушек, чехлы
      для террас и балконов в Сочи.
    </p>
  </div>
</template>
