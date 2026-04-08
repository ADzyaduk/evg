<script setup lang="ts">
import { fabrics, fabricCategories } from '~/utils/fabrics'

useSeoMeta({
  title: 'Ткани — каталог материалов | PavlovCraft',
  description:
    'Поставляем ткани для производства и пошива: Твил, Грета, Оксфорд, Флис, Спандекс и другие материалы. Уточните наличие и условия.',
  ogTitle: 'Ткани — каталог материалов | PavlovCraft',
  ogDescription:
    'Широкий ассортимент тканей для производства и пошива. Работаем с оптовыми и розничными клиентами.',
  ogType: 'website',
  ogUrl: 'https://pavlovcraft.ru/tkani',
  ogImage: 'https://pavlovcraft.ru/img/hero.webp',
  twitterCard: 'summary_large_image',
  robots: 'index,follow'
})

const selectedCategory = ref('all')

const filteredFabrics = computed(() =>
  selectedCategory.value === 'all'
    ? fabrics
    : fabrics.filter(f => f.category === selectedCategory.value)
)

const categoryCount = (key: string) =>
  key === 'all' ? fabrics.length : fabrics.filter(f => f.category === key).length
</script>

<template>
  <div>
    <!-- ── Hero ──────────────────────────────────────────────────────────────── -->
    <UPageHero
      title="Ткани"
      description="Поставляем ткани для производства и пошива. Широкий ассортимент — от технических полиэфирных материалов до натуральных хлопковых полотен."
      orientation="horizontal"
    >
      <div class="flex flex-col gap-3 max-w-sm">
        <UCard>
          <div class="flex items-center gap-3">
            <UIcon
              name="i-lucide-truck"
              class="size-8 text-primary shrink-0"
            />
            <div>
              <p class="font-semibold text-sm">
                Поставки
              </p>
              <p class="text-xs text-muted">
                Оптом и в розницу, под заказ
              </p>
            </div>
          </div>
        </UCard>
        <UCard>
          <div class="flex items-center gap-3">
            <UIcon
              name="i-lucide-scissors"
              class="size-8 text-primary shrink-0"
            />
            <div>
              <p class="font-semibold text-sm">
                Пошив на заказ
              </p>
              <p class="text-xs text-muted">
                Полный цикл — от раскроя до доставки
              </p>
            </div>
          </div>
        </UCard>
        <UCard>
          <div class="flex items-center gap-3">
            <UIcon
              name="i-lucide-swatch-book"
              class="size-8 text-primary shrink-0"
            />
            <div>
              <p class="font-semibold text-sm">
                {{ fabrics.length }} артикулов
              </p>
              <p class="text-xs text-muted">
                Широкая палитра оттенков по каждой позиции
              </p>
            </div>
          </div>
        </UCard>
      </div>
    </UPageHero>

    <!-- ── Catalog ────────────────────────────────────────────────────────────── -->
    <UPageSection class="py-8!">
      <template #title>
        Ассортимент
      </template>
      <template #description>
        Цены и наличие уточняйте при обращении.
      </template>

      <FabricFilter
        v-model="selectedCategory"
        :categories="fabricCategories"
        :category-count="categoryCount"
      />

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <FabricCard
          v-for="fabric in filteredFabrics"
          :key="fabric.id"
          :fabric="fabric"
        />
      </div>

      <div
        v-if="!filteredFabrics.length"
        class="text-center py-16 text-muted"
      >
        <UIcon
          name="i-lucide-search-x"
          class="size-10 mx-auto mb-3 opacity-40"
        />
        <p class="text-sm">
          Ничего не найдено
        </p>
      </div>
    </UPageSection>

    <!-- ── CTA ───────────────────────────────────────────────────────────────── -->
    <UPageSection class="pt-4!">
      <UPageCTA
        title="Уточните наличие и условия"
        description="Напишите нам — расскажем про наличие нужного артикула, объём, сроки и стоимость доставки."
        :links="[
          {
            label: 'Связаться с нами',
            to: '/kontakty',
            trailingIcon: 'i-lucide-arrow-right',
            color: 'neutral'
          }
        ]"
      />
    </UPageSection>
  </div>
</template>
