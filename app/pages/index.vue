<script setup lang="ts">
useSeoMeta({
  title: 'Подушки для уличной мебели и яхт в Сочи — пошив на заказ | PavlovCraft',
  description:
    'Пошив подушек для уличной мебели, пляжных лежаков и яхт в Сочи. Влагостойкие ткани с UV‑защитой, индивидуальные размеры, выезд на замер и гарантия качества.',
  ogTitle: 'Подушки для уличной мебели и яхт в Сочи — PavlovCraft',
  ogDescription:
    'Подушки для уличной мебели, лежаков и яхт из влагостойких тканей с защитой от выгорания. Шьём на заказ под ваши размеры в Сочи и Краснодарском крае.',
  ogType: 'website',
  ogUrl: 'https://pavlovcraft.ru/',
  ogImage: 'https://pavlovcraft.ru/img/hero.webp',
  twitterCard: 'summary_large_image',
  robots: 'index,follow'
})

// Preload LCP-изображения для ускорения первой отрисовки
useHead({
  link: [{ rel: 'preload', as: 'image', href: '/img/about/hero.webp' }]
})
</script>

<template>
  <div>
    <section
      v-animate
      class="relative isolate overflow-hidden"
    >
      <img
        src="/img/about/hero.webp"
        alt="Зона отдыха с уличной мебелью и подушками"
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
            Пошив подушек и чехлов в Сочи
          </p>
          <h1 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Прочные подушки для уличной мебели, пляжа и яхт
          </h1>
          <p class="mt-4 text-base sm:text-lg text-gray-200 leading-relaxed">
            Производим подушки для уличной мебели, пляжных лежаков и носовые подушки для яхт
            из влагостойких тканей, не выгорающих на солнце. Перешиваем диваны и шьём подушки
            на заказ под ваши размеры.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <UButton
              to="/kontakty"
              label="Рассчитать заказ"
              trailing-icon="i-lucide-arrow-right"
              size="xl"
            />
            <UButton
              to="/uslugi"
              label="Наши услуги"
              icon="i-lucide-briefcase"
              size="xl"
              variant="outline"
              class="text-white! border-white/30! hover:bg-white/10!"
            />
          </div>
        </div>
      </div>
    </section>

    <UPageSection
      id="preimushchestva"
      v-animate
      title="Почему наши подушки служат дольше"
      description="Мы используем материалы, рассчитанные на улицу и морской климат Сочи — подушки не выгорают, не боятся влаги и сохраняют форму."
      :features="[
        {
          icon: 'i-lucide-sun-medium',
          title: 'UV‑защита',
          description:
            'Ткани с устойчивостью к выгоранию — подушки долго сохраняют цвет под солнцем.'
        },
        {
          icon: 'i-lucide-umbrella',
          title: 'Влагостойкие материалы',
          description:
            'Ткани и наполнители, рассчитанные на улицу, терпят брызги бассейна и морской воды.'
        },
        {
          icon: 'i-lucide-sofa',
          title: 'Индивидуальные размеры',
          description:
            'Шьём подушки и чехлы под ваши кресла, шезлонги, диваны и носовые зоны яхт.'
        },
        {
          icon: 'i-lucide-ruler',
          title: 'Точный замер',
          description:
            'Выезжаем на объект в Сочи и по Краснодарскому краю или помогаем с замерами онлайн.'
        },
        {
          icon: 'i-lucide-truck',
          title: 'Быстрая доставка',
          description:
            'Оперативное изготовление и доставка по Сочи и Краснодарскому краю.'
        },
        {
          icon: 'i-lucide-badge-check',
          title: 'Гарантия качества',
          description:
            'Аккуратный пошив, плотные швы и проверенные ткани — подушки служат не один сезон.'
        }
      ]"
    />

    <UPageSection
      id="primery-rabot"
      v-animate
      title="Примеры работ"
      description="Подушки для уличной мебели, пляжных лежаков и носовые подушки для яхт. Пока используем заглушки — позже сюда добавим реальные фото из Сочи."
    >
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-animate="1"
          class="card-hover"
        >
          <template #header>
            <div class="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/booka.webp"
                alt="Подушки для садовой мебели на террасе"
                width="700"
                height="394"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover"
              >
            </div>
          </template>
          <template #footer>
            <p class="font-medium">
              Подушки для садовых кресел и шезлонгов
            </p>
            <p class="text-sm text-muted">
              Съёмные чехлы, наполнитель повышенной упругости, влагостойкие ткани с защитой от выгорания.
            </p>
            <UButton
              to="/kontakty"
              label="Заказать"
              size="sm"
              variant="outline"
              color="neutral"
              trailing-icon="i-lucide-arrow-right"
              class="mt-3"
            />
          </template>
        </UCard>

        <UCard
          v-animate="2"
          class="card-hover"
        >
          <template #header>
            <div class="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/lezhak.webp"
                alt="Пляжные лежаки с подушками у моря"
                width="700"
                height="394"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover"
              >
            </div>
          </template>
          <template #footer>
            <p class="font-medium">
              Чехлы для пляжных лежаков
            </p>
            <p class="text-sm text-muted">
              Износостойкие чехлы на лежаки с фиксацией, рассчитанные на частую стирку и интенсивную нагрузку.
            </p>
            <UButton
              to="/kontakty"
              label="Заказать"
              size="sm"
              variant="outline"
              color="neutral"
              trailing-icon="i-lucide-arrow-right"
              class="mt-3"
            />
          </template>
        </UCard>

        <UCard
          v-animate="3"
          class="card-hover"
        >
          <template #header>
            <div class="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/yacht.webp"
                alt="Носовая зона отдыха на яхте"
                width="700"
                height="394"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover"
              >
            </div>
          </template>
          <template #footer>
            <p class="font-medium">
              Носовые подушки для яхт
            </p>
            <p class="text-sm text-muted">
              Носовые зоны из тканей Sunbrella, кожи или алькантары, адаптированные под морской климат.
            </p>
            <UButton
              to="/kontakty"
              label="Заказать"
              size="sm"
              variant="outline"
              color="neutral"
              trailing-icon="i-lucide-arrow-right"
              class="mt-3"
            />
          </template>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection
      id="kak-rabotaem"
      v-animate
      title="Как мы работаем"
      description="Прозрачный процесс от первого обращения до готовых изделий — всё под ключ."
    >
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <div
          v-animate="1"
          class="flex flex-col items-center text-center p-4 rounded-xl bg-elevated/50"
        >
          <div class="flex items-center justify-center size-10 rounded-full bg-primary text-white font-bold text-sm mb-3">
            1
          </div>
          <UIcon
            name="i-lucide-camera"
            class="size-6 text-primary mb-2"
          />
          <p class="font-semibold text-sm">
            Заявка
          </p>
          <p class="text-xs text-muted mt-1">
            Присылаете фото мебели и описание задачи
          </p>
        </div>

        <div
          v-animate="2"
          class="flex flex-col items-center text-center p-4 rounded-xl bg-elevated/50"
        >
          <div class="flex items-center justify-center size-10 rounded-full bg-primary text-white font-bold text-sm mb-3">
            2
          </div>
          <UIcon
            name="i-lucide-ruler"
            class="size-6 text-primary mb-2"
          />
          <p class="font-semibold text-sm">
            Замеры
          </p>
          <p class="text-xs text-muted mt-1">
            Выезжаем на объект или помогаем замерить онлайн
          </p>
        </div>

        <div
          v-animate="3"
          class="flex flex-col items-center text-center p-4 rounded-xl bg-elevated/50"
        >
          <div class="flex items-center justify-center size-10 rounded-full bg-primary text-white font-bold text-sm mb-3">
            3
          </div>
          <UIcon
            name="i-lucide-palette"
            class="size-6 text-primary mb-2"
          />
          <p class="font-semibold text-sm">
            Подбор тканей
          </p>
          <p class="text-xs text-muted mt-1">
            Предлагаем материалы под ваши условия
          </p>
        </div>

        <div
          v-animate="4"
          class="flex flex-col items-center text-center p-4 rounded-xl bg-elevated/50"
        >
          <div class="flex items-center justify-center size-10 rounded-full bg-primary text-white font-bold text-sm mb-3">
            4
          </div>
          <UIcon
            name="i-lucide-scissors"
            class="size-6 text-primary mb-2"
          />
          <p class="font-semibold text-sm">
            Пошив
          </p>
          <p class="text-xs text-muted mt-1">
            Изготавливаем с примеркой и корректировками
          </p>
        </div>

        <div
          v-animate="5"
          class="flex flex-col items-center text-center p-4 rounded-xl bg-elevated/50"
        >
          <div class="flex items-center justify-center size-10 rounded-full bg-primary text-white font-bold text-sm mb-3">
            5
          </div>
          <UIcon
            name="i-lucide-truck"
            class="size-6 text-primary mb-2"
          />
          <p class="font-semibold text-sm">
            Доставка
          </p>
          <p class="text-xs text-muted mt-1">
            Привозим по Сочи и краю с рекомендациями по уходу
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

    <UPageSection
      id="faq"
      v-animate
      title="Частые вопросы"
      description="Отвечаем на вопросы, которые чаще всего задают клиенты перед заказом."
    >
      <UAccordion
        :items="[
          {
            label: 'Какие ткани вы используете для уличных подушек?',
            content: 'Мы работаем с влагостойкими тканями, устойчивыми к солнцу и износу: Oxford, полиэстер с водоотталкивающей пропиткой, Sunbrella и аналогичные материалы с UV-защитой. Подбираем ткань под условия эксплуатации — будь то терраса, бассейн или палуба яхты.'
          },
          {
            label: 'Сколько времени занимает изготовление?',
            content: 'Сроки зависят от объёма заказа. Обычно пошив одного комплекта подушек занимает 5–10 рабочих дней. Для срочных заказов обсуждаем индивидуальные сроки.'
          },
          {
            label: 'Вы выезжаете на замер?',
            content: 'Да, выезжаем на объекты в Сочи и по Краснодарскому краю. Также можем помочь с замерами онлайн — подскажем, как правильно снять размеры самостоятельно.'
          },
          {
            label: 'Можно ли заказать подушки нестандартной формы?',
            content: 'Конечно. Все изделия мы шьём на заказ, поэтому можем сделать подушки любой формы, толщины и размера — под конкретную мебель, носовую зону яхты или нестандартный шезлонг.'
          },
          {
            label: 'Как ухаживать за уличными подушками?',
            content: 'Мы делаем съёмные чехлы на молнии, которые легко стирать. Рекомендуем стирать чехлы при 30–40°C и хранить подушки в сухом месте в межсезонье. Подробные рекомендации по уходу дадим при доставке.'
          }
        ]"
        class="max-w-3xl mx-auto"
      />
    </UPageSection>

    <UPageSection v-animate>
      <UPageCTA
        title="Расскажите о вашей мебели — подберём решение"
        description="Пришлите фото и примерные размеры в мессенджер Max или Telegram — мы предложим варианты тканей, ориентировочную стоимость и сроки изготовления."
        variant="subtle"
        :links="[
          {
            label: 'Оставить заявку',
            to: '/kontakty',
            trailingIcon: 'i-lucide-arrow-right',
            color: 'neutral'
          },
          {
            label: 'Подробнее об услугах',
            to: '/uslugi',
            icon: 'i-lucide-file-text',
            color: 'neutral',
            variant: 'outline'
          }
        ]"
      />
    </UPageSection>
  </div>
</template>
