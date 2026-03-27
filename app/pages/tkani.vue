<script setup lang="ts">
useSeoMeta({
  title: 'Ткани — каталог материалов | PavlovCraft',
  description:
    'Поставляем ткани для производства и пошива: Оксфорд, Таффета, Флис, Твил, Репс, Бязь и другие материалы. Уточните наличие и условия.',
  ogTitle: 'Ткани — каталог материалов | PavlovCraft',
  ogDescription:
    'Широкий ассортимент тканей для производства и пошива. Работаем с оптовыми и розничными клиентами.',
  ogType: 'website',
  ogUrl: 'https://pavlovcraft.ru/tkani',
  ogImage: 'https://pavlovcraft.ru/img/hero.webp',
  twitterCard: 'summary_large_image',
  robots: 'index,follow'
})

const fabrics = [
  {
    name: 'Оксфорд',
    description: 'Прочная техническая ткань — популярна для сумок, уличных изделий и спецодежды',
    icon: 'i-lucide-shield'
  },
  {
    name: 'Таффета',
    description: 'Лёгкая гладкая ткань с шелковистым блеском — подкладки, ветровки, аксессуары',
    icon: 'i-lucide-sparkles'
  },
  {
    name: 'Флис',
    description: 'Мягкий тёплый материал с бархатистой фактурой — одежда, пледы, аксессуары',
    icon: 'i-lucide-wind'
  },
  {
    name: 'Твил',
    description: 'Диагональное переплетение нитей — устойчив к износу, хорошо держит форму',
    icon: 'i-lucide-grid-3x3'
  },
  {
    name: 'Репс',
    description: 'Фактурная рубчатая ткань — плотная, хорошо держит форму, широко применяется в интерьере',
    icon: 'i-lucide-align-justify'
  },
  {
    name: 'Бязь',
    description: 'Натуральная хлопковая ткань — мягкая, дышащая, классика постельного текстиля',
    icon: 'i-lucide-leaf'
  },
  {
    name: 'Грета',
    description: 'Лёгкая костюмная ткань с матовой поверхностью — элегантна и проста в пошиве',
    icon: 'i-lucide-gem'
  },
  {
    name: 'Спандекс',
    description: 'Эластичная ткань с высокой степенью растяжения — спортивная и облегающая одежда',
    icon: 'i-lucide-move-horizontal'
  },
  {
    name: 'Торнадо',
    description: 'Смесовая ткань повышенной прочности — выдерживает интенсивную нагрузку',
    icon: 'i-lucide-zap'
  },
  {
    name: 'Дюспа',
    description: 'Лёгкая ветрозащитная ткань с водоотталкивающими свойствами — ветровки, чехлы',
    icon: 'i-lucide-umbrella'
  },
  {
    name: 'Тиси',
    description: 'Смесовая ткань — широко применяется в спецодежде и рабочем текстиле',
    icon: 'i-lucide-hard-hat'
  },
  {
    name: 'Сетки',
    description: 'Воздухопроницаемые сетчатые полотна различной структуры — подкладки, спортивный текстиль',
    icon: 'i-lucide-network'
  }
]
</script>

<template>
  <div>
    <UPageHero
      v-animate
      title="Ткани"
      description="Поставляем ткани для производства и пошива. Широкий ассортимент — от технических материалов до лёгких подкладочных полотен. Работаем с нашими тканями или принимаем материал заказчика."
      orientation="horizontal"
    >
      <div class="flex flex-col gap-4 max-w-sm">
        <UCard>
          <div class="flex items-center gap-3">
            <UIcon name="i-lucide-truck" class="size-8 text-primary shrink-0" />
            <div>
              <p class="font-semibold text-sm">Поставки</p>
              <p class="text-xs text-muted">Оптом и в розницу, под заказ</p>
            </div>
          </div>
        </UCard>
        <UCard>
          <div class="flex items-center gap-3">
            <UIcon name="i-lucide-factory" class="size-8 text-primary shrink-0" />
            <div>
              <p class="font-semibold text-sm">Собственное производство</p>
              <p class="text-xs text-muted">Фабрика в Армении, г. Иджеван</p>
            </div>
          </div>
        </UCard>
        <UCard>
          <div class="flex items-center gap-3">
            <UIcon name="i-lucide-scissors" class="size-8 text-primary shrink-0" />
            <div>
              <p class="font-semibold text-sm">Пошив из ваших тканей</p>
              <p class="text-xs text-muted">Принимаем материал заказчика</p>
            </div>
          </div>
        </UCard>
      </div>
    </UPageHero>

    <UPageSection
      v-animate
      title="Ассортимент"
      description="Основные виды тканей в нашем каталоге. Цены и наличие — уточняйте при обращении."
      class="py-8!"
    >
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <UCard
          v-for="(fabric, index) in fabrics"
          :key="fabric.name"
          v-animate="(index % 6) + 1"
          class="card-hover"
        >
          <div class="flex flex-col gap-3">
            <div class="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <UIcon :name="fabric.icon" class="size-5 text-primary" />
            </div>
            <div>
              <p class="font-semibold text-base">{{ fabric.name }}</p>
              <p class="text-sm text-muted mt-1 leading-relaxed">{{ fabric.description }}</p>
            </div>
          </div>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection v-animate class="pt-4!">
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
