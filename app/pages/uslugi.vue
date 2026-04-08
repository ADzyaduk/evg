<script setup lang="ts">
useSeoMeta({
  title: 'Пошив подушек и чехлов на заказ в Сочи — PavlovCraft',
  description:
    'Подушки для уличной мебели, чехлы на пляжные лежаки, носовые подушки для яхт и перешив диванов в Сочи. Влагостойкие ткани с UV-защитой, индивидуальные размеры. Полный цикл — от замеров до доставки.',
  ogTitle: 'Пошив подушек и чехлов на заказ — PavlovCraft',
  ogDescription:
    'Подушки для уличной мебели, лежаков и яхт, а также перешив диванов под ваши размеры и задачи в Сочи и Краснодарском крае.',
  ogType: 'website',
  ogUrl: 'https://pavlovcraft.ru/uslugi',
  ogImage: 'https://pavlovcraft.ru/img/orig-opt.webp',
  twitterCard: 'summary_large_image',
  robots: 'index,follow'
})

const services = [
  {
    image: '/img/booka.webp',
    imageAlt: 'Подушки для садовых кресел и шезлонгов',
    title: 'Подушки для уличной мебели',
    description:
      'Подушки для садовых кресел, шезлонгов и уличных диванов со съёмными чехлами на молнии. Используем ткани Oxford, полиэстер с водоотталкивающей пропиткой и материалы с UV-защитой.',
    features: ['Съёмные чехлы на молнии', 'Влагостойкие и плотные ткани для улицы', 'Индивидуальные размеры и форма']
  },
  {
    image: '/img/lezhak.webp',
    imageAlt: 'Чехлы для пляжных лежаков у моря',
    title: 'Чехлы на пляжные лежаки',
    description:
      'Чехлы из износостойких материалов для отелей, апартаментов и частных террас. Учитываем частую стирку, прямое солнце и интенсивное использование у моря.',
    features: ['Устойчивость к выгоранию и стирке', 'Фиксация на лежаке — не сползают', 'Возможность нанесения логотипа']
  },
  {
    image: '/img/yacht.webp',
    imageAlt: 'Носовые подушки на палубе яхты',
    title: 'Носовые подушки для яхт',
    description:
      'Носовые подушки из кожи, алькантары или тканей Sunbrella. Учитываем форму палубы, точки крепления и эксплуатацию в морском климате.',
    features: ['Sunbrella и морские материалы', 'Устойчивость к соли, солнцу и абразиву', 'Индивидуальный крой под корпус']
  },
  {
    image: '/img/sl1600-opt.webp',
    imageAlt: 'Перешитый диван с новой обивкой',
    title: 'Перешив диванов и мебели',
    description:
      'Перешиваем диваны, кресла и другую мягкую мебель. Меняем обивку, наполнитель и геометрию сиденья, чтобы вернуть комфорт и обновить интерьер.',
    features: ['Кожа, алькантара, уличные и интерьерные ткани', 'Бытовая и коммерческая мебель', 'Подбор материалов под стиль помещения']
  }
]

const whyFeatures = [
  {
    icon: 'i-lucide-sun-medium',
    title: 'UV-защита и влагостойкость',
    description: 'Используем ткани с защитой от солнца, влаги и плесени — для улицы и морского климата.'
  },
  {
    icon: 'i-lucide-ruler',
    title: 'Точные размеры',
    description: 'Каждое изделие повторяет форму вашей мебели — от садового кресла до носа яхты.'
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'Гарантия на изделия',
    description: 'Отвечаем за качество швов, фурнитуры и материалов. При необходимости — бесплатная корректировка.'
  },
  {
    icon: 'i-lucide-truck',
    title: 'Доставка по краю',
    description: 'Привозим готовые изделия по Сочи и Краснодарскому краю. Выезжаем на замер.'
  },
  {
    icon: 'i-lucide-palette',
    title: 'Подбор материалов',
    description: 'Привозим образцы тканей, помогаем выбрать цвет, фактуру и плотность под ваш проект.'
  },
  {
    icon: 'i-lucide-heart-handshake',
    title: 'Честный сервис',
    description: 'Называем реальные сроки и стоимость. Без скрытых наценок и переносов без предупреждения.'
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section
      v-animate
      class="relative isolate overflow-hidden"
    >
      <img
        src="/img/about/015.webp"
        alt="Швейный цех PavlovCraft — сотрудницы за оборудованием"
        width="1920"
        height="1080"
        fetchpriority="high"
        decoding="async"
        class="absolute inset-0 -z-10 h-full w-full object-cover"
      >
      <div class="absolute inset-0 -z-10 bg-linear-to-r from-black/70 via-black/50 to-black/30" />
      <div class="max-w-(--ui-container) mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <div class="max-w-2xl">
          <p class="text-sm font-medium text-emerald-300 tracking-wide uppercase">
            Пошив на заказ в Сочи
          </p>
          <h1 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Подушки, чехлы и перешив мебели
          </h1>
          <p class="mt-4 text-base sm:text-lg text-gray-200 leading-relaxed">
            Шьём подушки для уличной мебели, пляжных лежаков и яхт из влагостойких тканей с UV-защитой.
            Перешиваем диваны и мягкую мебель. Полный цикл — от замеров до доставки по Сочи и Краснодарскому краю.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <UButton
              to="/kontakty"
              label="Оставить заявку"
              trailing-icon="i-lucide-arrow-right"
              size="xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Что мы изготавливаем -->
    <UPageSection
      v-animate
      title="Что мы изготавливаем"
      description="Все изделия шьём на заказ под ваши размеры, форму мебели и условия эксплуатации."
    >
      <UslugiServiceSection :items="services" />
    </UPageSection>

    <!-- Материалы и ткани -->
    <UPageSection
      v-animate
      title="Материалы и ткани"
      description="Подбираем ткани под условия эксплуатации — от палубы яхты до садовой террасы."
    >
      <div class="grid gap-6 lg:grid-cols-3">
        <UCard
          v-animate="1"
          class="card-hover"
        >
          <template #header>
            <div class="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/tkani/sunbrella.webp"
                alt="Образцы тканей Sunbrella и морских материалов"
                width="700"
                height="394"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover"
              >
            </div>
          </template>
          <template #footer>
            <p class="font-semibold">
              Sunbrella и морские ткани
            </p>
            <p class="text-sm text-muted">
              Специализированные ткани для яхт и объектов у моря. Устойчивы к солёной воде, ультрафиолету и плесени. Сохраняют цвет и структуру при круглогодичной эксплуатации.
            </p>
          </template>
        </UCard>

        <UCard
          v-animate="2"
          class="card-hover"
        >
          <template #header>
            <div class="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/tkani/oxford-300d.webp"
                alt="Уличные ткани Oxford и полиэстер с пропиткой"
                width="700"
                height="394"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover"
              >
            </div>
          </template>
          <template #footer>
            <p class="font-semibold">
              Oxford и полиэстер с пропиткой
            </p>
            <p class="text-sm text-muted">
              Плотные ткани с водоотталкивающей и грязеотталкивающей пропиткой для уличной мебели, террас и балконов. Быстро сохнут, легко чистятся, выдерживают интенсивное использование.
            </p>
          </template>
        </UCard>

        <UCard
          v-animate="3"
          class="card-hover"
        >
          <template #header>
            <div class="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/tkani/alcantara.webp"
                alt="Кожа и алькантара для интерьеров и яхт"
                width="700"
                height="394"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover"
              >
            </div>
          </template>
          <template #footer>
            <p class="font-semibold">
              Кожа и алькантара
            </p>
            <p class="text-sm text-muted">
              Премиальные материалы для интерьеров, кают и перешива мягкой мебели. Выглядят статусно, приятны на ощупь и хорошо сочетаются с деревом и фурнитурой.
            </p>
          </template>
        </UCard>
      </div>
    </UPageSection>

    <!-- Этапы работы -->
    <UPageSection
      v-animate
      title="Этапы работы"
      description="Прозрачный процесс от первого обращения до готовых изделий."
    >
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <div
          v-for="(step, i) in [
            { num: 1, icon: 'i-lucide-ruler', title: 'Замеры', text: 'Выезжаем на объект или помогаем снять размеры онлайн' },
            { num: 2, icon: 'i-lucide-palette', title: 'Разработка', text: 'Подбираем ткани, наполнитель и обсуждаем детали' },
            { num: 3, icon: 'i-lucide-scissors', title: 'Пошив', text: 'Изготавливаем изделия, при необходимости делаем примерку' },
            { num: 4, icon: 'i-lucide-truck', title: 'Доставка', text: 'Доставляем по Сочи и краю, даём рекомендации по уходу' },
            { num: 5, icon: 'i-lucide-shield-check', title: 'Гарантия', text: 'Сервисная поддержка и обновление к новому сезону' }
          ]"
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
    </UPageSection>

    <!-- Почему нас выбирают -->
    <UPageSection
      v-animate
      title="Почему нас выбирают"
      description="Работаем для тех, кому важны качество материалов, точность исполнения и надёжность."
    >
      <UslugiWhyChooseSection :features="whyFeatures" />
    </UPageSection>

    <!-- Фото производства -->
    <UPageSection
      v-animate
      title="Наше производство"
      description="Собственный швейный цех с профессиональным оборудованием — от раскроя до финальной сборки."
    >
      <div class="grid gap-4 sm:grid-cols-3">
        <div
          v-for="(photo, i) in [
            { src: '/img/about/001.webp', alt: 'Стёжка и лазерная обрезка', caption: 'Стёжка и лазерная обрезка' },
            { src: '/img/about/009.webp', alt: 'Раскройный цех', caption: 'Раскройный цех' },
            { src: '/img/about/011.webp', alt: 'Швейное оборудование', caption: 'Швейное оборудование' }
          ]"
          :key="photo.src"
          v-animate="i + 1"
          class="overflow-hidden rounded-xl"
        >
          <img
            :src="photo.src"
            :alt="photo.alt"
            width="700"
            height="394"
            loading="lazy"
            decoding="async"
            class="h-full w-full object-cover aspect-video"
          >
          <p class="text-sm text-muted mt-2 text-center">
            {{ photo.caption }}
          </p>
        </div>
      </div>
    </UPageSection>

    <!-- CTA -->
    <UPageSection v-animate>
      <UPageCTA
        title="Нужен пошив на заказ?"
        description="Опишите мебель или зону отдыха, пришлите фото — подскажем, какие материалы и решения подойдут лучше всего."
        :links="[
          { label: 'Перейти к контактам', to: '/kontakty', trailingIcon: 'i-lucide-arrow-right', color: 'neutral' }
        ]"
      />
    </UPageSection>
  </div>
</template>
