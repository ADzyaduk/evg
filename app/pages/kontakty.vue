<script setup lang="ts">
const contacts = [
  {
    icon: 'i-lucide-phone',
    title: 'Телефон',
    value: '+7 (000) 000‑00‑00',
    link: 'tel:+70000000000',
    description: 'Для оперативных вопросов и согласования замеров'
  },
  {
    icon: 'i-simple-icons-telegram',
    title: 'Telegram',
    value: '@username',
    link: '#',
    description: 'Удобно отправить фото мебели и обсудить детали заказа'
  },
  {
    icon: 'i-lucide-mail',
    title: 'Email',
    value: 'info@example.com',
    link: 'mailto:info@example.com',
    description: 'Ответим в течение рабочего дня'
  },
  {
    icon: 'i-lucide-map-pin',
    title: 'Адрес',
    value: 'Сочи, Краснодарский край',
    link: 'https://maps.google.com/?q=Сочи',
    description: 'Выезжаем на замер в Сочи и по краю'
  }
]

const workingHours = [
  { day: 'Понедельник — Пятница', hours: '09:00 — 18:00' },
  { day: 'Суббота', hours: '10:00 — 16:00' },
  { day: 'Воскресенье', hours: 'По договорённости' }
]
</script>

<template>
  <div id="kontakty" class="max-w-(--ui-container) mx-auto px-4">
    <div class="mb-4 text-center">
      <h1 class="text-2xl font-semibold tracking-tight">
        Контакты
      </h1>
      <p class="text-muted mt-1">
        Выберите удобный способ связи или оставьте заявку — ответим в течение рабочего дня
      </p>
    </div>
    <div class="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        <!-- Контакты слева -->
        <div class="space-y-6">
          <div class="grid sm:grid-cols-2 gap-4">
            <UCard
              v-for="contact in contacts"
              :key="contact.title"
              class="hover:shadow-md transition-shadow"
            >
              <div class="flex items-start gap-4">
                <div class="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <UIcon :name="contact.icon" class="size-5 text-primary" />
                </div>
                <div class="min-w-0">
                  <h3 class="font-semibold text-sm mb-1">
                    {{ contact.title }}
                  </h3>
                  <a
                    :href="contact.link"
                    :target="contact.link.startsWith('http') ? '_blank' : undefined"
                    :rel="contact.link.startsWith('http') ? 'noopener' : undefined"
                    class="text-primary hover:underline font-medium text-sm break-all"
                  >
                    {{ contact.value }}
                  </a>
                  <p class="text-muted text-xs mt-1">
                    {{ contact.description }}
                  </p>
                </div>
              </div>
            </UCard>
          </div>

          <UCard>
            <template #header>
              <div class="flex items-center gap-2">
                <UIcon name="i-lucide-clock" class="size-5 text-primary" />
                <h3 class="font-semibold text-sm">
                  Часы работы
                </h3>
              </div>
            </template>
            <div class="space-y-2">
              <div
                v-for="item in workingHours"
                :key="item.day"
                class="flex justify-between items-center py-2 border-b border-default last:border-0 text-sm"
              >
                <span class="text-muted">{{ item.day }}</span>
                <span class="font-medium">{{ item.hours }}</span>
              </div>
            </div>
          </UCard>
        </div>

        <!-- Форма справа -->
        <div class="lg:sticky lg:top-24">
          <UCard>
            <template #header>
              <h2 class="text-lg font-semibold">
                Опишите задачу
              </h2>
              <p class="text-muted text-sm mt-1">
                Прикрепите фото мебели или зоны отдыха — предложим варианты тканей и стоимость
              </p>
            </template>
            <FeedbackForm />
          </UCard>
        </div>
      </div>
  </div>
</template>
