<script setup lang="ts">
useSeoMeta({
  title: 'Как выбрать ткань для садовых подушек — блог PavlovCraft',
  description:
    'Рассказываем, какую ткань выбрать для садовых подушек и подушек для уличной мебели, чтобы они не выгорали, не намокали и служили несколько сезонов.',
  ogTitle: 'Как выбрать ткань для садовых подушек',
  ogDescription:
    'Критерии выбора ткани для подушек для уличной мебели: влагостойкость, UV‑защита, плотность и удобство ухода.',
  ogType: 'article',
  ogUrl: 'https://pavlovcraft.ru/blog/kak-vybrat-tkan-dlya-sadovykh-podushek',
  ogImage: 'https://pavlovcraft.ru/img/booka.webp',
  twitterCard: 'summary_large_image',
  robots: 'index,follow'
})

const otherArticles = [
  {
    title: 'Уход за подушками для уличной мебели',
    to: '/blog/ukhod-za-ulichnymi-podushkami',
    image: '/img/orig-opt.webp'
  },
  {
    title: 'Какие ткани лучше для яхт',
    to: '/blog/kakie-tkani-dlya-yaht',
    image: '/img/yacht.webp'
  }
]
</script>

<template>
  <div>
    <div class="max-w-(--ui-container) mx-auto px-4 pt-6">
      <UBreadcrumb
        :items="[
          { label: 'Блог', to: '/blog' },
          { label: 'Как выбрать ткань для садовых подушек' }
        ]"
      />
    </div>

    <article class="max-w-3xl mx-auto px-4 py-10 lg:py-16">
      <header v-animate>
        <div class="flex items-center gap-3 mb-4">
          <UBadge
            label="Ткани"
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
            datetime="2025-01-15"
            class="text-xs text-muted"
          >
            15 января 2025
          </time>
        </div>

        <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">
          Как выбрать ткань для садовых подушек
        </h1>
        <p class="mt-3 text-lg text-muted">
          На что обратить внимание, чтобы подушки служили дольше одного сезона.
        </p>
      </header>

      <div
        v-animate
        class="mt-8 overflow-hidden rounded-2xl"
      >
        <img
          src="/img/booka.webp"
          alt="Садовые подушки на уличной мебели"
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
          Подушки для уличной мебели работают в более жёстких условиях, чем домашние: солнце,
          влага, перепады температур, пыль и контакт с кремами для загара. Поэтому обычные
          обивочные ткани здесь быстро теряют вид: выгорают, намокают, собирают грязь.
        </p>

        <h2>1. Влагостойкость и быстрое высыхание</h2>
        <p>
          Для садовых подушек важно, чтобы ткань не впитывала влагу как губка и быстро высыхала.
          Ищите уличные коллекции с пропиткой от воды и грязи. Это особенно актуально, если подушки
          лежат возле бассейна или моря.
        </p>

        <div class="not-prose my-6 overflow-hidden rounded-xl">
          <img
            src="/img/tkani/oxford-300d.webp"
            alt="Ткань Oxford 300D для уличных подушек"
            width="700"
            height="394"
            loading="lazy"
            decoding="async"
            class="w-full object-cover aspect-video"
          >
          <p class="text-xs text-muted mt-2 text-center">
            Oxford 300D — одна из популярных тканей для уличных подушек
          </p>
        </div>

        <h2>2. UV‑защита и устойчивость к выгоранию</h2>
        <p>
          Солнце в Сочи и на побережье активно большую часть года. Ткани для уличной мебели должны
          иметь защиту от ультрафиолета, иначе уже через сезон они станут бледными и потеряют
          привлекательность. В описании материалов ищите отметки о стойкости к выгоранию.
        </p>

        <h2>3. Плотность и износостойкость</h2>
        <p>
          Подушки на шезлонгах и диванах активно используют гости и жильцы. Чем выше плотность и
          износостойкость ткани, тем дольше изделие сохранит аккуратный вид. Для коммерческих
          объектов (отели, апартаменты) лучше выбирать ткани с повышенными показателями по тестам
          на истирание.
        </p>

        <h2>4. Удобство ухода</h2>
        <p>
          Оптимальный вариант — съёмные чехлы на молнии, которые можно стирать или сдавать в
          химчистку. Проверьте рекомендации производителя по уходу: температуру стирки, допустимость
          отбеливателей, глажки и сушки.
        </p>

        <h2>5. Совместимость с наполнителем</h2>
        <p>
          Для уличных подушек чаще используют влагостойкие наполнители, которые не сплющиваются и не
          накапливают запахи. Важно, чтобы ткань и наполнитель «работали в паре»: ткань не должна
          промокать до внутреннего слоя при небольшом дожде или брызгах.
        </p>
      </div>

      <div
        v-animate
        class="mt-10 p-6 rounded-2xl bg-primary/5 border border-primary/10"
      >
        <p class="font-semibold">
          Итог
        </p>
        <p class="text-sm text-muted mt-1">
          Ориентируйтесь на влагостойкость, UV‑защиту, плотность и удобство ухода.
          Если не уверены, какая ткань подойдёт — мы покажем образцы и подберём под ваши условия.
        </p>
        <UButton
          to="/kontakty"
          label="Получить консультацию"
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
      Подушки для уличной мебели, ткань для садовых подушек, чехлы на пляжные
      лежаки, пошив подушек на заказ в Сочи.
    </p>
  </div>
</template>
