<template>
  <div>
    <UPageHero
      eyebrow="Блог для клиентов и SEO"
      title="Живые советы о тканях и уходе за подушками"
      description="Простые статьи о том, как выбрать ткань для уличной мебели, ухаживать за подушками и продлить срок службы зон отдыха и яхт."
    />

    <UPageSection
      title="О чём этот блог"
      description="Здесь мы собираем ответы на вопросы, которые чаще всего задают клиенты перед заказом подушек и чехлов."
    >
      <div class="grid gap-4 lg:grid-cols-[2fr,3fr] items-center">
        <div class="hidden sm:block">
          <div class="aspect-video rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground">
            Здесь позже будет фото вашей мастерской или процесса пошива
          </div>
        </div>
        <div class="prose prose-sm max-w-none dark:prose-invert">
          <p>
            Мы не пишем «для галочки». Каждая заметка — это выжимка из реальных проектов: какие ткани
            лучше переживают сочинское солнце, как не ошибиться с толщиной подушек, чем уличные
            материалы отличаются от интерьерных.
          </p>
          <p>
            Эти тексты помогают и клиентам, и поисковикам: благодаря им проще найти нас по запросам
            вроде «подушки для уличной мебели в Сочи» или «чехлы на пляжные лежаки».
          </p>
        </div>
      </div>
    </UPageSection>

    <UPageSection
      title="Статьи"
      description="Начали с самых частых вопросов клиентов. Со временем блог можно расширять под SEO‑задачи."
    >
      <div class="grid gap-6 lg:grid-cols-2">
        <UBlogPost
          title="Как выбрать ткань для садовых подушек"
          description="На что смотреть при выборе ткани для подушек для уличной мебели, чтобы они служили дольше одного сезона."
          date="2025-01-15"
          image="/img/Booka-lounge-set-1-Sadovaya-mebel-akatsiya.jpg"
          to="/blog/kak-vybrat-tkan-dlya-sadovykh-podushek"
        />

        <UBlogPost
          title="Как ухаживать за подушками для уличной мебели"
          description="Простые правила ухода, чтобы подушки для уличной мебели и пляжных лежаков служили несколько сезонов."
          date="2025-01-20"
          image="/img/orig.webp"
          to="/blog/ukhod-za-ulichnymi-podushkami"
        />

        <UBlogPost
          title="Какие ткани лучше для яхт и морского климата"
          description="Разбираем, чем Sunbrella и похожие материалы отличаются от обычных тканей для уличной мебели на яхтах."
          date="2025-01-25"
          image="/img/1690563359_hdpic-club-p-yakhta-vid-szadi-49-e1755513283928.jpg"
          to="/blog/kakie-tkani-dlya-yaht"
        />

        <UBlogPost
          title="Чем уличные подушки отличаются от интерьерных"
          description="Почему нельзя просто вынести диванные подушки на улицу и чего ждать от настоящих уличных материалов."
          date="2025-01-28"
          image="/img/1687874901_kartin-papik-pro-p-kartinki-more-plyazh-lezhak-59.jpg"
          to="/blog/ulichnye-i-interernye-podushki"
        />
      </div>
    </UPageSection>
  </div>
</template>

