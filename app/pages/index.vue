<template>
  <div>
    <UPageHero
      eyebrow="Пошив подушек и чехлов в Сочи"
      title="Прочные подушки для уличной мебели, пляжа и яхт"
      description="Производим подушки для уличной мебели, пляжных лежаков и носовые подушки для яхт из влагостойких тканей, не выгорающих на солнце. Перешиваем диваны и шьём подушки на заказ под ваши размеры."
      orientation="horizontal"
      :links="[
        {
          label: 'Рассчитать заказ',
          to: '/kontakty',
          trailingIcon: 'i-lucide-arrow-right',
          size: 'xl'
        },
        {
          label: 'Каталог подушек',
          to: '/katalog',
          icon: 'i-lucide-layout-grid',
          size: 'xl',
          color: 'neutral',
          variant: 'subtle'
        }
      ]"
    >
      <img
        src="/img/hero.jpg"
        alt="Зона отдыха с уличной мебелью и подушками"
        class="rounded-2xl shadow-2xl ring ring-default w-full max-w-xl mx-auto"
      >
    </UPageHero>

    <UPageSection
      id="preimushchestva"
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
      title="Примеры работ"
      description="Подушки для уличной мебели, пляжных лежаков и носовые подушки для яхт. Пока используем заглушки — позже сюда добавим реальные фото из Сочи."
    >
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <UCard>
          <template #header>
            <div class="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/Booka-lounge-set-1-Sadovaya-mebel-akatsiya.jpg"
                alt="Подушки для садовой мебели на террасе"
                class="h-full w-full object-cover"
              >
            </div>
          </template>
          <template #footer>
            <p class="font-medium">Подушки для садовых кресел и шезлонгов</p>
            <p class="text-sm text-muted">
              Съёмные чехлы, наполнитель повышенной упругости, влагостойкие ткани с защитой от выгорания.
            </p>
          </template>
        </UCard>

        <UCard>
          <template #header>
            <div class="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/1687874901_kartin-papik-pro-p-kartinki-more-plyazh-lezhak-59.jpg"
                alt="Пляжные лежаки с подушками у моря"
                class="h-full w-full object-cover"
              >
            </div>
          </template>
          <template #footer>
            <p class="font-medium">Чехлы для пляжных лежаков</p>
            <p class="text-sm text-muted">
              Износостойкие чехлы на лежаки с фиксацией, рассчитанные на частую стирку и интенсивную нагрузку.
            </p>
          </template>
        </UCard>

        <UCard>
          <template #header>
            <div class="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/1690563359_hdpic-club-p-yakhta-vid-szadi-49-e1755513283928.jpg"
                alt="Носовая зона отдыха на яхте"
                class="h-full w-full object-cover"
              >
            </div>
          </template>
          <template #footer>
            <p class="font-medium">Носовые подушки для яхт</p>
            <p class="text-sm text-muted">
              Носовые зоны из тканей Sunbrella, кожи или алькантары, адаптированные под морской климат.
            </p>
          </template>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection
      id="uslugi-kratko"
      title="Пошив подушек и перешив мебели на заказ"
      description="От идеи до готовых подушек — помогаем подобрать ткань, наполнитель и форму под ваш интерьер и задачи."
    >
      <div class="grid gap-6 lg:grid-cols-4">
        <UCard class="lg:col-span-2">
          <template #header>
            <p class="font-semibold">Как мы работаем</p>
          </template>
          <ol class="space-y-3 text-sm">
            <li><span class="font-semibold">1. Заявка.</span> Вы присылаете фото мебели и краткое описание задачи.</li>
            <li><span class="font-semibold">2. Замеры.</span> Делаем выезд на объект в Сочи или подсказываем, как сделать замеры самостоятельно.</li>
            <li><span class="font-semibold">3. Подбор материалов.</span> Предлагаем варианты тканей (влагостойкость, UV‑защита, фактура) и наполнителей.</li>
            <li><span class="font-semibold">4. Пошив и примерка.</span> Шьём подушки, при необходимости делаем примерку и корректировки.</li>
            <li><span class="font-semibold">5. Доставка и гарантия.</span> Привозим готовые изделия, даём рекомендации по уходу.</li>
          </ol>
        </UCard>

        <UCard>
          <template #header>
            <p class="font-semibold">Подушки для улицы</p>
          </template>
          <ul class="space-y-2 text-sm">
            <li>Подушки для уличной мебели и садовых гарнитуров</li>
            <li>Чехлы на шезлонги и пляжные лежаки</li>
            <li>Подушки для террас, веранд, беседок</li>
          </ul>
        </UCard>

        <UCard>
          <template #header>
            <p class="font-semibold">Яхты и мягкая мебель</p>
          </template>
          <ul class="space-y-2 text-sm">
            <li>Носовые подушки для яхт</li>
            <li>Перешив диванов и мягкой мебели</li>
            <li>Кожа, алькантара, Sunbrella под ваш проект</li>
          </ul>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection
      id="seo-blok"
      title="Подушки для уличной мебели и пошив на заказ в Сочи"
      description="Ищете, где заказать подушки для уличной мебели, чехлы на пляжные лежаки или носовые подушки для яхт в Сочи? Мы работаем с влагостойкими тканями с UV‑защитой и предлагаем быстрый пошив под ваши размеры."
    >
      <div class="prose prose-sm max-w-none dark:prose-invert">
        <p>
          Мы специализируемся на пошиве подушек для уличной мебели, садовых кресел и шезлонгов,
          носовых подушек для яхт, а также на перешиве диванов и мягкой мебели. Используем
          современные влагостойкие материалы, устойчивые к солнцу и износу, чтобы подушки
          сохраняли внешний вид и комфорт не один сезон.
        </p>
        <p>
          В наших проектах мы учитываем климат Сочи и Краснодарского края: повышенную влажность,
          солнце и соль. Поэтому ткани с UV‑защитой, устойчивые к выгоранию, и качественные
          наполнители — обязательный стандарт. Мы подберём решения под частный дом, террасу отеля,
          апартаменты у моря или яхту.
        </p>
        <p class="font-semibold">
          Ключевые направления: подушки для уличной мебели, чехлы на пляжные лежаки,
          носовые подушки для яхт, перешив диванов в Сочи, пошив подушек на заказ.
        </p>
      </div>
    </UPageSection>

    <UPageSection>
      <UPageCTA
        title="Расскажите о вашей мебели — подберём решение"
        description="Пришлите фото и примерные размеры в мессенджер — мы предложим варианты тканей, ориентировочную стоимость и сроки изготовления."
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
