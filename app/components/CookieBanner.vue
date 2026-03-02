<script setup lang="ts">
const { showBanner, acceptAll, rejectAll, savePreferences } = useCookieConsent()
const showSettings = ref(false)
const analyticsEnabled = ref(false)

onMounted(() => {
  useCookieConsent().load()
})

function onSave() {
  savePreferences(analyticsEnabled.value)
}
</script>

<template>
  <Transition name="cookie-slide">
    <div
      v-if="showBanner"
      class="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6"
    >
      <div class="max-w-3xl mx-auto rounded-2xl bg-white dark:bg-neutral-900 shadow-2xl shadow-black/10 ring-1 ring-neutral-200 dark:ring-neutral-800 p-5 sm:p-6">
        <div v-if="!showSettings">
          <div class="flex flex-col sm:flex-row gap-4 sm:items-center">
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-1.5">
                <UIcon
                  name="i-lucide-cookie"
                  class="size-5 text-primary shrink-0"
                />
                <p class="font-semibold text-sm">
                  Мы используем cookie
                </p>
              </div>
              <p class="text-xs text-muted leading-relaxed">
                Для корректной работы сайта и улучшения качества обслуживания мы используем файлы cookie.
                Подробнее в
                <NuxtLink
                  to="/politika-konfidentsialnosti#5-cookie"
                  class="text-primary underline-offset-2 hover:underline"
                >
                  политике конфиденциальности</NuxtLink>.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-2 shrink-0">
              <UButton
                label="Принять все"
                size="sm"
                @click="acceptAll"
              />
              <UButton
                label="Только необходимые"
                variant="outline"
                color="neutral"
                size="sm"
                @click="rejectAll"
              />
              <UButton
                label="Настроить"
                variant="ghost"
                color="neutral"
                size="sm"
                @click="showSettings = true"
              />
            </div>
          </div>
        </div>

        <div v-else>
          <div class="flex items-center gap-2 mb-4">
            <UIcon
              name="i-lucide-settings"
              class="size-5 text-primary shrink-0"
            />
            <p class="font-semibold text-sm">
              Настройка cookie
            </p>
          </div>

          <div class="space-y-3 mb-5">
            <div class="flex items-start justify-between gap-4 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800/50">
              <div>
                <p class="text-sm font-medium">
                  Необходимые
                </p>
                <p class="text-xs text-muted mt-0.5">
                  Обеспечивают работу сайта: навигация, формы, отображение страниц. Не могут быть отключены.
                </p>
              </div>
              <USwitch
                :model-value="true"
                disabled
                size="sm"
              />
            </div>

            <div class="flex items-start justify-between gap-4 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800/50">
              <div>
                <p class="text-sm font-medium">
                  Аналитические
                </p>
                <p class="text-xs text-muted mt-0.5">
                  Яндекс.Метрика — помогает понять, как посетители используют сайт, и улучшать его.
                </p>
              </div>
              <USwitch
                v-model="analyticsEnabled"
                size="sm"
              />
            </div>
          </div>

          <div class="flex gap-2">
            <UButton
              label="Сохранить выбор"
              size="sm"
              @click="onSave"
            />
            <UButton
              label="Назад"
              variant="ghost"
              color="neutral"
              size="sm"
              @click="showSettings = false"
            />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.cookie-slide-enter-active,
.cookie-slide-leave-active {
  transition: transform 0.4s ease, opacity 0.3s ease;
}

.cookie-slide-enter-from,
.cookie-slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
