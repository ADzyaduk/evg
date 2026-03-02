<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Главная',
    to: '/',
    active: route.path === '/'
  },
  {
    label: 'Услуги',
    to: '/uslugi',
    active: route.path.startsWith('/uslugi')
  },
  {
    label: 'О компании',
    to: '/o-kompanii',
    active: route.path.startsWith('/o-kompanii')
  },
  {
    label: 'Контакты',
    to: '/kontakty',
    active: route.path.startsWith('/kontakty')
  },
  {
    label: 'Блог',
    to: '/blog',
    active: route.path.startsWith('/blog')
  }
])
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <UHeader>
      <template #title>
        <NuxtLink to="/">
          <AppLogo class="h-6 w-auto" />
        </NuxtLink>
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <ClientOnly>
          <UColorModeButton />
          <template #fallback>
            <div class="size-9" />
          </template>
        </ClientOnly>

        <UButton
          color="neutral"
          variant="ghost"
          to="https://t.me/+79854240703"
          target="_blank"
          aria-label="Telegram"
          class="icon-hover"
        >
          <UIcon
            name="i-simple-icons-telegram"
            class="size-5 text-telegram"
          />
        </UButton>

        <UButton
          color="neutral"
          variant="ghost"
          to="https://max.ru/u/f9LHodD0cOIUkq5cHidDnAM2t5izIzxMfIIMB_L-q1EuNzpkF3htlB-9c2Q"
          target="_blank"
          aria-label="Мессенджер Max"
          class="icon-hover"
        >
          <img
            src="/max.webp"
            alt="Max"
            width="20"
            height="20"
            class="size-5 object-contain"
            decoding="async"
          >
        </UButton>

        <UButton
          color="neutral"
          variant="ghost"
          icon="i-lucide-phone"
          to="tel:+79854240703"
          aria-label="Позвонить"
          class="icon-hover"
        />
      </template>

      <template #body>
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          class="-mx-2.5"
        />
      </template>
    </UHeader>

    <UMain
      class="flex-1"
      :class="{ 'py-4!': route.path === '/kontakty' }"
    >
      <NuxtPage />
    </UMain>

    <!-- Нижняя навигация для мобильных -->
    <nav class="sm:hidden fixed inset-x-0 bottom-0 z-40 border-t border-default bg-default/95 backdrop-blur">
      <div class="max-w-(--ui-container) mx-auto px-2 py-1.5 flex items-center justify-around gap-1 text-xs">
        <UButton
          to="/"
          icon="i-lucide-home"
          label="Главная"
          size="md"
          color="neutral"
          variant="ghost"
          class="flex-1 flex flex-col items-center justify-center gap-0.5"
          :aria-pressed="route.path === '/'"
        />
        <UButton
          to="/uslugi"
          icon="i-lucide-briefcase"
          label="Услуги"
          size="md"
          color="neutral"
          variant="ghost"
          class="flex-1 flex flex-col items-center justify-center gap-0.5"
          :aria-pressed="route.path.startsWith('/uslugi')"
        />
        <UButton
          to="/kontakty"
          icon="i-lucide-phone"
          label="Контакты"
          size="md"
          color="neutral"
          variant="ghost"
          class="flex-1 flex flex-col items-center justify-center gap-0.5"
          :aria-pressed="route.path.startsWith('/kontakty')"
        />
        <UButton
          to="/blog"
          icon="i-lucide-book-open-text"
          label="Блог"
          size="md"
          color="neutral"
          variant="ghost"
          class="flex-1 flex flex-col items-center justify-center gap-0.5"
          :aria-pressed="route.path.startsWith('/blog')"
        />
      </div>
    </nav>

    <USeparator
      icon="i-lucide-scissors"
      type="dashed"
      class="h-px"
    />

    <footer class="border-t border-default">
      <div class="max-w-(--ui-container) mx-auto px-4 py-8 sm:py-10">
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <!-- Бренд -->
          <div class="space-y-3">
            <NuxtLink to="/">
              <AppLogo class="h-8 w-auto" />
            </NuxtLink>
            <p class="text-sm text-muted">
              Пошив подушек для уличной мебели, пляжных лежаков и яхт в Сочи и Краснодарском крае.
            </p>
          </div>

          <!-- Навигация -->
          <div class="space-y-3">
            <p class="text-sm font-semibold">
              Навигация
            </p>
            <ul class="space-y-2 text-sm text-muted">
              <li>
                <NuxtLink
                  to="/uslugi"
                  class="hover:text-primary transition-colors"
                >
                  Услуги
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/o-kompanii"
                  class="hover:text-primary transition-colors"
                >
                  О компании
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/blog"
                  class="hover:text-primary transition-colors"
                >
                  Блог
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Контакты -->
          <div class="space-y-3">
            <p class="text-sm font-semibold">
              Контакты
            </p>
            <ul class="space-y-2 text-sm text-muted">
              <li class="flex items-center gap-2">
                <UIcon
                  name="i-lucide-phone"
                  class="size-4 shrink-0"
                />
                <a
                  href="tel:+79854240703"
                  class="hover:text-primary transition-colors"
                >
                  +7 (985) 424-07-03
                </a>
              </li>
              <li class="flex items-center gap-2">
                <UIcon
                  name="i-lucide-map-pin"
                  class="size-4 shrink-0"
                />
                <span>Сочи, Краснодарский край</span>
              </li>
              <li class="flex items-center gap-2">
                <UIcon
                  name="i-lucide-clock"
                  class="size-4 shrink-0"
                />
                <span>Пн–Пт 9:00–18:00, Сб 10:00–16:00</span>
              </li>
            </ul>
          </div>

          <!-- Мессенджеры -->
          <div class="space-y-3">
            <p class="text-sm font-semibold">
              Мессенджеры
            </p>
            <div class="flex items-center gap-2">
              <UButton
                color="neutral"
                variant="ghost"
                to="https://t.me/+79854240703"
                target="_blank"
                aria-label="Telegram"
                class="icon-hover"
              >
                <UIcon
                  name="i-simple-icons-telegram"
                  class="size-5 text-telegram"
                />
              </UButton>

              <UButton
                color="neutral"
                variant="ghost"
                to="https://max.ru/u/f9LHodD0cOIUkq5cHidDnAM2t5izIzxMfIIMB_L-q1EuNzpkF3htlB-9c2Q"
                target="_blank"
                aria-label="Мессенджер Max"
                class="icon-hover"
              >
                <img
                  src="/max.webp"
                  alt="Max"
                  width="20"
                  height="20"
                  class="size-5 object-contain"
                  decoding="async"
                >
              </UButton>

              <UButton
                color="neutral"
                variant="ghost"
                icon="i-lucide-phone"
                to="tel:+79854240703"
                aria-label="Позвонить"
                class="icon-hover"
              />
            </div>
          </div>
        </div>

        <USeparator class="my-6" />

        <div class="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
          <p>© {{ new Date().getFullYear() }} PavlovCraft. Все права защищены.</p>
          <div class="flex flex-col sm:flex-row gap-1 sm:gap-3">
            <NuxtLink
              to="/politika-konfidentsialnosti"
              class="hover:text-primary underline-offset-2 hover:underline"
            >
              Политика конфиденциальности
            </NuxtLink>
            <span class="hidden sm:inline text-muted/40">|</span>
            <NuxtLink
              to="/soglasie-na-obrabotku"
              class="hover:text-primary underline-offset-2 hover:underline"
            >
              Согласие на обработку ПД
            </NuxtLink>
          </div>
        </div>
      </div>
    </footer>

    <ClientOnly>
      <CookieBanner />
    </ClientOnly>
  </div>
</template>
