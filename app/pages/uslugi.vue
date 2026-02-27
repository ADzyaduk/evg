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
            Шьём подушки для уличной мебели, пляжных лежаков и яхт из влагостойких тканей
            с UV-защитой. Перешиваем диваны и мягкую мебель. Полный цикл — от замеров до доставки
            по Сочи и Краснодарскому краю.
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
      <div class="grid gap-6 sm:grid-cols-2">
        <UCard
          v-animate="1"
          class="card-hover"
        >
          <template #header>
            <div class="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/booka.webp"
                alt="Подушки для садовых кресел и шезлонгов"
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
              Подушки для уличной мебели
            </p>
            <p class="text-sm text-muted">
              Подушки для садовых кресел, шезлонгов и уличных диванов со съёмными чехлами
              на молнии. Используем ткани Oxford, полиэстер с водоотталкивающей пропиткой
              и материалы с UV-защитой.
            </p>
            <ul class="mt-3 space-y-1 text-sm">
              <li>• Съёмные чехлы на молнии</li>
              <li>• Влагостойкие и плотные ткани для улицы</li>
              <li>• Индивидуальные размеры и форма</li>
            </ul>
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
                alt="Чехлы для пляжных лежаков у моря"
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
              Чехлы на пляжные лежаки
            </p>
            <p class="text-sm text-muted">
              Чехлы из износостойких материалов для отелей, апартаментов и частных террас.
              Учитываем частую стирку, прямое солнце и интенсивное использование у моря.
            </p>
            <ul class="mt-3 space-y-1 text-sm">
              <li>• Устойчивость к выгоранию и стирке</li>
              <li>• Фиксация на лежаке — не сползают</li>
              <li>• Возможность нанесения логотипа</li>
            </ul>
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
                alt="Носовые подушки на палубе яхты"
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
              Носовые подушки для яхт
            </p>
            <p class="text-sm text-muted">
              Носовые подушки из кожи, алькантары или тканей Sunbrella. Учитываем форму
              палубы, точки крепления и эксплуатацию в морском климате.
            </p>
            <ul class="mt-3 space-y-1 text-sm">
              <li>• Sunbrella и морские материалы</li>
              <li>• Устойчивость к соли, солнцу и абразиву</li>
              <li>• Индивидуальный крой под корпус</li>
            </ul>
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
          v-animate="4"
          class="card-hover"
        >
          <template #header>
            <div class="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/sl1600-opt.webp"
                alt="Перешитый диван с новой обивкой"
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
              Перешив диванов и мебели
            </p>
            <p class="text-sm text-muted">
              Перешиваем диваны, кресла и другую мягкую мебель. Меняем обивку, наполнитель
              и геометрию сиденья, чтобы вернуть комфорт и обновить интерьер.
            </p>
            <ul class="mt-3 space-y-1 text-sm">
              <li>• Кожа, алькантара, уличные и интерьерные ткани</li>
              <li>• Бытовая и коммерческая мебель</li>
              <li>• Подбор материалов под стиль помещения</li>
            </ul>
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
                src="/img/tkani/sunbrella.jpg"
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
              Специализированные ткани для яхт и объектов у моря. Устойчивы к солёной воде,
              ультрафиолету и плесени. Сохраняют цвет и структуру при круглогодичной эксплуатации.
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
                src="/img/tkani/oxford.webp"
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
              Плотные ткани с водоотталкивающей и грязеотталкивающей пропиткой для уличной мебели,
              террас и балконов. Быстро сохнут, легко чистятся, выдерживают интенсивное использование.
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
                src="/img/tkani/Alcantara.jpg"
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
              Премиальные материалы для интерьеров, кают и перешива мягкой мебели. Выглядят
              статусно, приятны на ощупь и хорошо сочетаются с деревом и фурнитурой.
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
          v-animate="1"
          class="flex flex-col items-center text-center p-4 rounded-xl bg-elevated/50"
        >
          <div class="flex items-center justify-center size-10 rounded-full bg-primary text-white font-bold text-sm mb-3">
            1
          </div>
          <UIcon
            name="i-lucide-ruler"
            class="size-6 text-primary mb-2"
          />
          <p class="font-semibold text-sm">
            Замеры
          </p>
          <p class="text-xs text-muted mt-1">
            Выезжаем на объект или помогаем снять размеры онлайн
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
            name="i-lucide-palette"
            class="size-6 text-primary mb-2"
          />
          <p class="font-semibold text-sm">
            Разработка
          </p>
          <p class="text-xs text-muted mt-1">
            Подбираем ткани, наполнитель и обсуждаем детали
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
            name="i-lucide-scissors"
            class="size-6 text-primary mb-2"
          />
          <p class="font-semibold text-sm">
            Пошив
          </p>
          <p class="text-xs text-muted mt-1">
            Изготавливаем изделия, при необходимости делаем примерку
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
            name="i-lucide-truck"
            class="size-6 text-primary mb-2"
          />
          <p class="font-semibold text-sm">
            Доставка
          </p>
          <p class="text-xs text-muted mt-1">
            Доставляем по Сочи и краю, даём рекомендации по уходу
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
            name="i-lucide-shield-check"
            class="size-6 text-primary mb-2"
          />
          <p class="font-semibold text-sm">
            Гарантия
          </p>
          <p class="text-xs text-muted mt-1">
            Сервисная поддержка и обновление к новому сезону
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
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-animate="1"
          class="group flex gap-4 p-5 rounded-xl bg-elevated/50 hover:bg-elevated transition-colors"
        >
          <div class="flex shrink-0 items-center justify-center size-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <UIcon
              name="i-lucide-sun-medium"
              class="size-6"
            />
          </div>
          <div>
            <p class="font-semibold text-sm">
              UV-защита и влагостойкость
            </p>
            <p class="text-xs text-muted mt-1">
              Используем ткани с защитой от солнца, влаги и плесени — для улицы и морского климата.
            </p>
          </div>
        </div>

        <div
          v-animate="2"
          class="group flex gap-4 p-5 rounded-xl bg-elevated/50 hover:bg-elevated transition-colors"
        >
          <div class="flex shrink-0 items-center justify-center size-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <UIcon
              name="i-lucide-ruler"
              class="size-6"
            />
          </div>
          <div>
            <p class="font-semibold text-sm">
              Точные размеры
            </p>
            <p class="text-xs text-muted mt-1">
              Каждое изделие повторяет форму вашей мебели — от садового кресла до носа яхты.
            </p>
          </div>
        </div>

        <div
          v-animate="3"
          class="group flex gap-4 p-5 rounded-xl bg-elevated/50 hover:bg-elevated transition-colors"
        >
          <div class="flex shrink-0 items-center justify-center size-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <UIcon
              name="i-lucide-shield-check"
              class="size-6"
            />
          </div>
          <div>
            <p class="font-semibold text-sm">
              Гарантия на изделия
            </p>
            <p class="text-xs text-muted mt-1">
              Отвечаем за качество швов, фурнитуры и материалов. При необходимости — бесплатная корректировка.
            </p>
          </div>
        </div>

        <div
          v-animate="4"
          class="group flex gap-4 p-5 rounded-xl bg-elevated/50 hover:bg-elevated transition-colors"
        >
          <div class="flex shrink-0 items-center justify-center size-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <UIcon
              name="i-lucide-truck"
              class="size-6"
            />
          </div>
          <div>
            <p class="font-semibold text-sm">
              Доставка по краю
            </p>
            <p class="text-xs text-muted mt-1">
              Привозим готовые изделия по Сочи и Краснодарскому краю. Выезжаем на замер.
            </p>
          </div>
        </div>

        <div
          v-animate="5"
          class="group flex gap-4 p-5 rounded-xl bg-elevated/50 hover:bg-elevated transition-colors"
        >
          <div class="flex shrink-0 items-center justify-center size-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <UIcon
              name="i-lucide-palette"
              class="size-6"
            />
          </div>
          <div>
            <p class="font-semibold text-sm">
              Подбор материалов
            </p>
            <p class="text-xs text-muted mt-1">
              Привозим образцы тканей, помогаем выбрать цвет, фактуру и плотность под ваш проект.
            </p>
          </div>
        </div>

        <div
          v-animate="6"
          class="group flex gap-4 p-5 rounded-xl bg-elevated/50 hover:bg-elevated transition-colors"
        >
          <div class="flex shrink-0 items-center justify-center size-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <UIcon
              name="i-lucide-heart-handshake"
              class="size-6"
            />
          </div>
          <div>
            <p class="font-semibold text-sm">
              Честный сервис
            </p>
            <p class="text-xs text-muted mt-1">
              Называем реальные сроки и стоимость. Без скрытых наценок и переносов без предупреждения.
            </p>
          </div>
        </div>
      </div>
    </UPageSection>

    <!-- Фото производства -->
    <UPageSection
      v-animate
      title="Наше производство"
      description="Собственный швейный цех с профессиональным оборудованием — от раскроя до финальной сборки."
    >
      <div class="grid gap-4 sm:grid-cols-3">
        <div
          v-animate="1"
          class="overflow-hidden rounded-xl"
        >
          <img
            src="/img/about/001.webp"
            alt="Стёжка и лазерная обрезка"
            width="700"
            height="394"
            loading="lazy"
            decoding="async"
            class="h-full w-full object-cover aspect-video"
          >
          <p class="text-sm text-muted mt-2 text-center">
            Стёжка и лазерная обрезка
          </p>
        </div>

        <div
          v-animate="2"
          class="overflow-hidden rounded-xl"
        >
          <img
            src="/img/about/009.webp"
            alt="Раскройный цех"
            width="700"
            height="394"
            loading="lazy"
            decoding="async"
            class="h-full w-full object-cover aspect-video"
          >
          <p class="text-sm text-muted mt-2 text-center">
            Раскройный цех
          </p>
        </div>

        <div
          v-animate="3"
          class="overflow-hidden rounded-xl"
        >
          <img
            src="/img/about/011.webp"
            alt="Швейное оборудование"
            width="700"
            height="394"
            loading="lazy"
            decoding="async"
            class="h-full w-full object-cover aspect-video"
          >
          <p class="text-sm text-muted mt-2 text-center">
            Швейное оборудование
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
