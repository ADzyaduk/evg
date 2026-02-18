<script setup lang="ts">
useSeoMeta({
  title: 'Блог о подушках для уличной мебели и яхт — PavlovCraft',
  description:
    'Статьи о выборе тканей, уходе за подушками для уличной мебели и особенностях материалов для яхт в сочинском климате.',
  ogTitle: 'Блог PavlovCraft — советы по тканям и уходу',
  ogDescription:
    'Практичные советы по выбору тканей и уходу за подушками для уличной мебели, пляжных лежаков и яхт.',
  ogType: 'website',
  ogUrl: 'https://pavlovcraft.ru/blog',
  ogImage: 'https://pavlovcraft.ru/img/Booka-lounge-set-1-Sadovaya-mebel-akatsiya.jpg',
  twitterCard: 'summary_large_image',
  robots: 'index,follow'
})
</script>

<template>
  <div>
    <UPageHero
      v-animate
      eyebrow="Блог для клиентов и SEO"
      title="Живые советы о тканях и уходе за подушками"
      description="Простые статьи о том, как выбрать ткань для уличной мебели, ухаживать за подушками и продлить срок службы зон отдыха и яхт."
    />

    <UPageSection
      v-animate
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
      v-animate
      title="Статьи"
      description="Начали с самых частых вопросов клиентов. Со временем блог можно расширять под SEO‑задачи."
    >
      <div class="grid gap-6 lg:grid-cols-2">
        <UBlogPost
          v-animate="1"
          class="card-hover"
          title="Как выбрать ткань для садовых подушек"
          description="На что смотреть при выборе ткани для подушек для уличной мебели, чтобы они служили дольше одного сезона."
          date="2025-01-15"
          image="/img/Booka-lounge-set-1-Sadovaya-mebel-akatsiya.jpg"
          to="/blog/kak-vybrat-tkan-dlya-sadovykh-podushek"
        />

        <UBlogPost
          v-animate="2"
          class="card-hover"
          title="Как ухаживать за подушками для уличной мебели"
          description="Простые правила ухода, чтобы подушки для уличной мебели и пляжных лежаков служили несколько сезонов."
          date="2025-01-20"
          image="/img/orig.webp"
          to="/blog/ukhod-za-ulichnymi-podushkami"
        />

        <UBlogPost
          v-animate="3"
          class="card-hover"
          title="Какие ткани лучше для яхт и морского климата"
          description="Разбираем, чем Sunbrella и похожие материалы отличаются от обычных тканей для уличной мебели на яхтах."
          date="2025-01-25"
          image="/img/1690563359_hdpic-club-p-yakhta-vid-szadi-49-e1755513283928.jpg"
          to="/blog/kakie-tkani-dlya-yaht"
        />

        <UBlogPost
          v-animate="4"
          class="card-hover"
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
