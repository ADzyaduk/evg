<script setup lang="ts">
useSeoMeta({
  title: 'О компании — швейное производство полного цикла',
  description:
    'Швейная фабрика полного цикла: разработка, пошив, упаковка и доставка. Более 300 сотрудников и свыше 380 единиц оборудования.',
  ogTitle: 'О компании — швейное производство полного цикла',
  ogDescription:
    'Узнайте больше о нашей фабрике: оборудование, команда и подход к работе.',
  ogType: 'website',
  ogUrl: 'https://ВАШ_ДОМЕН/o-kompanii',
  ogImage: 'https://ВАШ_ДОМЕН/img/about/hero.PNG',
  twitterCard: 'summary_large_image',
  robots: 'index,follow'
})
</script>

<template>
  <div>
    <UPageHero
      v-animate
      title="О компании"
      description="Швейное производство полного цикла — от идеи до готового изделия. Берём на себя всё: разработку, пошив, упаковку и доставку. Работаем как с нашими материалами, так и с тканями заказчика."
      orientation="horizontal"
    >
      <img
        src="/img/about/hero.PNG"
        alt="Швейный цех — ряды промышленных машин"
        width="760"
        height="428"
        fetchpriority="high"
        decoding="async"
        class="rounded-2xl shadow-2xl ring ring-default w-full max-w-xl mx-auto"
      >
    </UPageHero>

    <UPageSection
      v-animate
      title="Кто мы"
      description="Больше 300 сотрудников и свыше 380 единиц техники — от швейных машин до вышивальных автоматов."
      class="pt-8! pb-4!"
    >
      <div class="grid gap-8 lg:grid-cols-2 items-center">
        <div class="prose prose-sm max-w-none dark:prose-invert">
          <p>
            У нас всё под одной крышей: закройщики кроят ткань, швеи собирают изделия,
            технологи следят за тем, чтобы каждая деталь соответствовала образцу. Благодаря
            этому заказы выходят вовремя — без беготни между подрядчиками.
          </p>
          <p>
            Мы контролируем качество на каждом шаге: от первых выкроек до упаковки готовой
            продукции. Поэтому спокойно берёмся за сложные заказы, нестандартные ткани
            и большие серии.
          </p>
        </div>
        <img
          v-animate="1"
          src="/img/about/015.PNG"
          alt="Сотрудницы за стёгальным оборудованием"
          width="760"
          height="428"
          loading="lazy"
          decoding="async"
          class="rounded-2xl shadow-lg ring ring-default w-full"
        >
      </div>
    </UPageSection>

    <UPageSection
      v-animate
      title="Производство в цифрах"
      description="Несколько цифр, чтобы вы представляли масштаб нашей фабрики."
      class="py-8!"
    >
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <UCard v-animate="1" class="text-center">
          <p class="text-4xl font-bold text-primary">300+</p>
          <p class="mt-1 text-sm text-muted">Специалистов в коллективе</p>
        </UCard>
        <UCard v-animate="2" class="text-center">
          <p class="text-4xl font-bold text-primary">380+</p>
          <p class="mt-1 text-sm text-muted">Единиц оборудования</p>
        </UCard>
        <UCard v-animate="3" class="text-center">
          <p class="text-4xl font-bold text-primary">205</p>
          <p class="mt-1 text-sm text-muted">Универсальных швейных машин</p>
        </UCard>
        <UCard v-animate="4" class="text-center">
          <p class="text-4xl font-bold text-primary">4</p>
          <p class="mt-1 text-sm text-muted">Раскройных стола с автоматической раскладкой</p>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection
      v-animate
      title="Оборудование"
      description="Покажем, чем оснащена фабрика — от раскроя до нанесения логотипов."
      class="py-8!"
    >
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <UCard v-animate="1" class="card-hover">
          <template #header>
            <div class="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/about/011.PNG"
                alt="Швейная машина TYPICAL в цехе"
                width="700"
                height="394"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover"
              >
            </div>
          </template>
          <template #footer>
            <p class="font-semibold">Швейный цех</p>
            <ul class="mt-2 space-y-1 text-sm text-muted">
              <li>205 универсальных швейных машин</li>
              <li>52 машины для одновременной строчки и обмётки</li>
              <li>48 двухигольных машин для параллельных швов</li>
              <li>10 машин для работы с толстыми тканями</li>
            </ul>
          </template>
        </UCard>

        <UCard v-animate="2" class="card-hover">
          <template #header>
            <div class="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/about/008.PNG"
                alt="Полуавтомат для установки кнопок и люверсов"
                width="700"
                height="394"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover"
              >
            </div>
          </template>
          <template #footer>
            <p class="font-semibold">Фурнитура и отделка</p>
            <ul class="mt-2 space-y-1 text-sm text-muted">
              <li>8 машин для закрепок</li>
              <li>6 машин для нашивки липучек (велкро)</li>
              <li>4 пуговичных и 3 петельных автомата</li>
              <li>6 автоматов для установки кнопок и люверсов</li>
            </ul>
          </template>
        </UCard>

        <UCard v-animate="3" class="card-hover">
          <template #header>
            <div class="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/about/009.PNG"
                alt="Раскройный цех — работа на оборудовании"
                width="700"
                height="394"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover"
              >
            </div>
          </template>
          <template #footer>
            <p class="font-semibold">Раскройный цех</p>
            <ul class="mt-2 space-y-1 text-sm text-muted">
              <li>4 больших раскройных стола</li>
              <li>14 ножей для точного раскроя ткани</li>
              <li>Инструмент для контрольной разметки деталей</li>
              <li>2 плоттера COMTENSE для автоматической раскладки</li>
            </ul>
          </template>
        </UCard>

        <UCard v-animate="4" class="card-hover">
          <template #header>
            <div class="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/about/001.PNG"
                alt="Полуавтомат для стёжки с лазерной обрезкой"
                width="700"
                height="394"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover"
              >
            </div>
          </template>
          <template #footer>
            <p class="font-semibold">Стёжка и заготовка деталей</p>
            <ul class="mt-2 space-y-1 text-sm text-muted">
              <li>8 автоматов для стёжки с лазерной обрезкой по контуру</li>
              <li>Стёгальное оборудование для утеплителя шириной до 2 метров</li>
              <li>5 машин для изготовления манжет, поясов и лямок</li>
            </ul>
          </template>
        </UCard>

        <UCard v-animate="5" class="card-hover">
          <template #header>
            <div class="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/about/004.PNG"
                alt="Термотрансферный принтер AUDLEY для нанесения логотипов"
                width="700"
                height="394"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover"
              >
            </div>
          </template>
          <template #footer>
            <p class="font-semibold">Нанесение логотипов</p>
            <ul class="mt-2 space-y-1 text-sm text-muted">
              <li>4 вышивальных машины — вышиваем логотипы и надписи нитками</li>
              <li>Термопресс — переносим логотип на ткань с помощью тепла и давления</li>
            </ul>
          </template>
        </UCard>

        <UCard v-animate="6" class="card-hover">
          <template #header>
            <div class="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/about/003.PNG"
                alt="Панель управления термотрансферным оборудованием"
                width="700"
                height="394"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover"
              >
            </div>
          </template>
          <template #footer>
            <p class="font-semibold">Упаковка и доставка</p>
            <ul class="mt-2 space-y-1 text-sm text-muted">
              <li>Вакуумная упаковка — изделия занимают меньше места и защищены от влаги</li>
              <li>Организуем доставку и сопровождаем груз до получателя</li>
            </ul>
          </template>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection
      v-animate
      title="Наш подход"
      class="py-8!"
      :features="[
        {
          icon: 'i-lucide-file-pen-line',
          title: 'Придумаем и разработаем',
          description:
            'Составим задание вместе с вами, сделаем выкройки, сошьём пробный образец — и только после вашего одобрения запустим партию.'
        },
        {
          icon: 'i-lucide-scissors',
          title: 'Раскроим аккуратно',
          description:
            'Четыре раскройных стола и автоматические плоттеры COMTENSE — ткань расходуется экономно, детали вырезаются точно.'
        },
        {
          icon: 'i-lucide-settings-2',
          title: 'Сошьём на своём оборудовании',
          description:
            'Больше 380 машин: от обычных швейных до вышивальных и стёгальных. Справимся с любой сложностью и объёмом.'
        },
        {
          icon: 'i-lucide-package-check',
          title: 'Упакуем и доставим',
          description:
            'При необходимости упакуем в вакуум, организуем доставку и проследим за грузом до получателя.'
        }
      ]"
    />

    <UPageSection v-animate class="pt-4!">
      <UPageCTA
        title="Есть задача? Давайте обсудим"
        description="Расскажите, что нужно сшить — мы предложим удобный вариант: по вашим выкройкам, по нашим разработкам или из ваших тканей."
        :links="[
          {
            label: 'Перейти к контактам',
            to: '/kontakty',
            trailingIcon: 'i-lucide-arrow-right',
            color: 'neutral'
          }
        ]"
      />
    </UPageSection>
  </div>
</template>
