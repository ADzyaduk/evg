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
    label: 'Каталог',
    to: '/katalog',
    active: route.path.startsWith('/katalog')
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
          to="#"
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
          to="#"
          target="_blank"
          aria-label="Мессенджер Max"
          class="icon-hover"
        >
          <img
            src="/max.png"
            alt="Max"
            class="size-5 object-contain"
          >
        </UButton>

        <UButton
          color="neutral"
          variant="ghost"
          icon="i-lucide-phone"
          to="tel:+70000000000"
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
          to="/katalog"
          icon="i-lucide-layout-grid"
          label="Каталог"
          size="md"
          color="neutral"
          variant="ghost"
          class="flex-1 flex flex-col items-center justify-center gap-0.5"
          :aria-pressed="route.path.startsWith('/katalog')"
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
      icon="i-simple-icons-nuxtdotjs"
      type="dashed"
      class="h-px"
    />

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          © {{ new Date().getFullYear() }} Ваша компания. Все права защищены.
        </p>
      </template>

      <template #right>
        <UButton
          color="neutral"
          variant="ghost"
          to="#"
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
          to="#"
          target="_blank"
          aria-label="Мессенджер Max"
          class="icon-hover"
        >
          <img
            src="/max.png"
            alt="Max"
            class="size-5 object-contain"
          >
        </UButton>

        <UButton
          color="neutral"
          variant="ghost"
          icon="i-lucide-phone"
          to="tel:+70000000000"
          aria-label="Позвонить"
          class="icon-hover"
        />
      </template>
    </UFooter>
  </div>
</template>
