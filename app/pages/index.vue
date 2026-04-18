<script setup lang="ts">
import { faq } from '~/utils/faq'
import { createWebPageSchema } from '~/utils/seo'

const pageTitle = 'Швейное производство и поставки тканей в Сочи | PavlovCraft'
const pageDescription
  = 'Швейное производство на заказ и поставки тканей в Сочи. Пошив подушек для яхт, лежаков и мебели. Влагостойкие материалы с UV‑защитой, индивидуальные размеры, выезд на замер.'

const homepageSchemas = [
  createWebPageSchema({
    path: '/',
    name: pageTitle,
    description: pageDescription
  }),
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faq.map(item => ({
      '@type': 'Question',
      'name': item.label,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.content
      }
    }))
  }
]

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: 'Швейное производство и поставки тканей — PavlovCraft, Сочи',
  ogDescription:
    'Пошив на заказ и поставки тканей: Оксфорд, Флис, Твил, Таффета и другие материалы. Работаем в Сочи и Краснодарском крае.',
  ogType: 'website',
  ogUrl: 'https://pavlovcraft.ru/',
  ogImage: 'https://pavlovcraft.ru/img/hero.webp',
  twitterCard: 'summary_large_image',
  robots: 'index,follow'
})

useHead({
  link: [{ rel: 'preload', as: 'image', href: '/img/hero.webp' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(homepageSchemas)
    }
  ]
})

const examples = [
  {
    image: '/img/booka.webp',
    imageAlt: 'Подушки для садовой мебели на террасе',
    title: 'Подушки для садовых кресел и шезлонгов',
    description: 'Съёмные чехлы, наполнитель повышенной упругости, влагостойкие ткани с защитой от выгорания.',
    to: '/kontakty'
  },
  {
    image: '/img/lezhak.webp',
    imageAlt: 'Пляжные лежаки с подушками у моря',
    title: 'Чехлы для пляжных лежаков',
    description: 'Износостойкие чехлы на лежаки с фиксацией, рассчитанные на частую стирку и интенсивную нагрузку.',
    to: '/kontakty'
  },
  {
    image: '/img/yacht.webp',
    imageAlt: 'Носовая зона отдыха на яхте',
    title: 'Носовые подушки для яхт',
    description: 'Носовые зоны из тканей Sunbrella, кожи или алькантары, адаптированные под морской климат.',
    to: '/kontakty'
  }
]

const processSteps = [
  { num: 1, icon: 'i-lucide-camera', title: 'Заявка', text: 'Присылаете фото мебели и описание задачи' },
  { num: 2, icon: 'i-lucide-ruler', title: 'Замеры', text: 'Выезжаем на объект или помогаем замерить онлайн' },
  { num: 3, icon: 'i-lucide-palette', title: 'Подбор тканей', text: 'Предлагаем материалы под ваши условия' },
  { num: 4, icon: 'i-lucide-scissors', title: 'Пошив', text: 'Изготавливаем с примеркой и корректировками' },
  { num: 5, icon: 'i-lucide-truck', title: 'Доставка', text: 'Привозим по Сочи и краю с рекомендациями по уходу' }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <UPageHero
      headline="Швейное производство · Сочи"
      title="Пошив на заказ и поставки тканей"
      description="Шьём на заказ и поставляем ткани для производства. Носовые подушки для яхт, чехлы для лежаков, мягкая мебель — из влагостойких материалов с UV‑защитой."
      orientation="horizontal"
      :links="[
        { label: 'Рассчитать заказ', to: '/kontakty', trailingIcon: 'i-lucide-arrow-right' },
        { label: 'Наши услуги', to: '/uslugi', icon: 'i-lucide-briefcase', color: 'neutral', variant: 'subtle' }
      ]"
    >
      <img
        src="/img/hero.webp"
        alt="Зона отдыха с уличной мебелью и подушками"
        width="1920"
        height="1080"
        fetchpriority="high"
        decoding="async"
        class="rounded-lg shadow-2xl ring ring-default w-full object-cover"
      >
    </UPageHero>

    <!-- Почему выбирают нас -->
    <UPageSection
      id="preimushchestva"
      v-animate
      title="Почему выбирают нас"
      description="Работаем с материалами, рассчитанными на улицу и морской климат Сочи — изделия не выгорают, не боятся влаги и сохраняют форму сезон за сезоном."
      :features="[
        { icon: 'i-lucide-sun-medium', title: 'UV‑защита', description: 'Ткани с устойчивостью к выгоранию — подушки долго сохраняют цвет под солнцем.' },
        { icon: 'i-lucide-umbrella', title: 'Влагостойкие материалы', description: 'Ткани и наполнители, рассчитанные на улицу, терпят брызги бассейна и морской воды.' },
        { icon: 'i-lucide-sofa', title: 'Индивидуальные размеры', description: 'Шьём подушки и чехлы под ваши кресла, шезлонги, диваны и носовые зоны яхт.' },
        { icon: 'i-lucide-ruler', title: 'Точный замер', description: 'Выезжаем на объект в Сочи и по Краснодарскому краю или помогаем с замерами онлайн.' },
        { icon: 'i-lucide-truck', title: 'Быстрая доставка', description: 'Оперативное изготовление и доставка по Сочи и Краснодарскому краю.' },
        { icon: 'i-lucide-badge-check', title: 'Гарантия качества', description: 'Аккуратный пошив, плотные швы и проверенные ткани — подушки служат не один сезон.' }
      ]"
    />

    <!-- Примеры работ -->
    <UPageSection
      id="primery-rabot"
      v-animate
      title="Примеры работ"
      description="Подушки для уличной мебели, пляжных лежаков и носовые подушки для яхт. Пока используем заглушки — позже сюда добавим реальные фото из Сочи."
    >
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ExampleCard
          v-for="(ex, i) in examples"
          :key="ex.image"
          v-animate="i + 1"
          v-bind="ex"
        />
      </div>
    </UPageSection>

    <!-- CTA ткани -->
    <UPageSection
      v-animate
      class="py-8!"
    >
      <UPageCTA
        title="Поставляем ткани"
        description="В нашем ассортименте — Оксфорд, Таффета, Флис, Твил, Репс, Бязь и другие материалы. Работаем оптом и в розницу, принимаем заказы под производство."
        variant="subtle"
        :links="[{ label: 'Каталог тканей', to: '/tkani', trailingIcon: 'i-lucide-arrow-right', color: 'neutral' }]"
      />
    </UPageSection>

    <!-- Как мы работаем -->
    <UPageSection
      id="kak-rabotaem"
      v-animate
      title="Как мы работаем"
      description="Прозрачный процесс от первого обращения до готовых изделий — всё под ключ."
    >
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <div
          v-for="(step, i) in processSteps"
          :key="step.num"
          v-animate="i + 1"
          class="flex flex-col items-center text-center p-4 rounded-xl bg-elevated/50"
        >
          <div class="flex items-center justify-center size-10 rounded-full bg-primary text-white font-bold text-sm mb-3">
            {{ step.num }}
          </div>
          <UIcon
            :name="step.icon"
            class="size-6 text-primary mb-2"
          />
          <p class="font-semibold text-sm">
            {{ step.title }}
          </p>
          <p class="text-xs text-muted mt-1">
            {{ step.text }}
          </p>
        </div>
      </div>
      <div class="mt-8 text-center">
        <UButton
          to="/uslugi"
          label="Подробнее об услугах"
          variant="outline"
          color="neutral"
          trailing-icon="i-lucide-arrow-right"
          size="lg"
        />
      </div>
    </UPageSection>

    <!-- FAQ -->
    <UPageSection
      id="faq"
      v-animate
      title="Частые вопросы"
      description="Отвечаем на вопросы, которые чаще всего задают клиенты перед заказом."
    >
      <UAccordion
        :items="faq"
        class="max-w-3xl mx-auto"
      />
    </UPageSection>

    <!-- CTA финальный -->
    <UPageSection v-animate>
      <UPageCTA
        title="Расскажите о вашей мебели — подберём решение"
        description="Пришлите фото и примерные размеры в мессенджер Max или Telegram — мы предложим варианты тканей, ориентировочную стоимость и сроки изготовления."
        variant="subtle"
        :links="[
          { label: 'Оставить заявку', to: '/kontakty', trailingIcon: 'i-lucide-arrow-right', color: 'neutral' },
          { label: 'Подробнее об услугах', to: '/uslugi', icon: 'i-lucide-file-text', color: 'neutral', variant: 'outline' }
        ]"
      />
    </UPageSection>
  </div>
</template>
