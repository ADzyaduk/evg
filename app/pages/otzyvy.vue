<template>
  <div>
    <UPageHero
      v-animate
      title="Отзывы клиентов"
      description="Честные впечатления клиентов, для которых мы шили подушки для уличной мебели, лежаков, яхт и перешивали диваны."
    />

    <UPageSection
      v-animate
      title="Что говорят о нашей работе"
      description="Нам важно, чтобы подушки радовали вас не один сезон. Поэтому внимательно относимся к деталям и срокам."
    >
      <div class="grid gap-6 lg:grid-cols-3">
        <UCard
          v-animate="1"
          class="card-hover"
        >
          <template #header>
            <p class="font-semibold">
              Подушки для террасы в Сочи
            </p>
          </template>
          <p class="text-sm text-muted">
            «Заказывали комплект подушек для уличной мебели на террасе. Помогли подобрать ткань под
            наш интерьер, сделали точные замеры и уложились в срок до открытия сезона. Подушки
            комфортные, цвет не выгорел за лето.»
          </p>
          <p class="mt-3 text-xs text-muted">
            — Мария, частный дом в Сочи
          </p>
        </UCard>

        <UCard
          v-animate="2"
          class="card-hover"
        >
          <template #header>
            <p class="font-semibold">
              Чехлы на пляжные лежаки
            </p>
          </template>
          <p class="text-sm text-muted">
            «Нужно было обновить чехлы для лежаков у бассейна в апартаментах. Сделали образец, потом
            быстро дошили всю партию. Чехлы плотные, легко стираются, гости часто отмечают, что на
            лежаках удобно.»
          </p>
          <p class="mt-3 text-xs text-muted">
            — Управляющая апартаментов
          </p>
        </UCard>

        <UCard
          v-animate="3"
          class="card-hover"
        >
          <template #header>
            <p class="font-semibold">
              Носовые подушки для яхты
            </p>
          </template>
          <p class="text-sm text-muted">
            «Заказывали носовые подушки из Sunbrella. Учли форму палубы, сделали аккуратные швы и
            крепления, которые не мешают. Второй сезон выглядят как новые, обслуживанием довольны.»
          </p>
          <p class="mt-3 text-xs text-muted">
            — Владельцы яхты
          </p>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection
      v-animate
      title="Оставьте свой отзыв"
      description="Если вы уже работали с нами, напишите пару строк о впечатлениях — это помогает нам становиться лучше."
    >
      <div class="prose prose-sm max-w-none dark:prose-invert">
        <p>
          Вы можете отправить отзыв в мессенджер Max или Telegram вместе с фотографиями зоны отдыха или
          яхты. С вашего разрешения мы разместим его на сайте и в соцсетях.
        </p>
      </div>
    </UPageSection>
  </div>
</template>
