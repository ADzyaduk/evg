// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/a11y'],

  /** SSR включён по умолчанию в Nuxt; явно указываем для SEO и соцсетей (og, превью). */
  ssr: true,

  /** В продакшене отключаем, чтобы не отдавать лишнее и не влиять на производительность. */
  devtools: { enabled: process.env.NODE_ENV === 'development' },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    telegramBotToken: '',
    telegramChatId: '',
    public: {
      siteUrl: 'https://pavlovcraft.ru',
      /** ID счётчика Яндекс.Метрики (например, 12345678). */
      yandexMetrikaId: '',
      /** GA4 Measurement ID (например, G-XXXXXXX). */
      gaMeasurementId: ''
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/blog': { prerender: true },
    '/katalog': { prerender: true },
    '/kontakty': { prerender: true },
    '/uslugi': { prerender: true },
    '/o-kompanii': { prerender: true },
    '/otzyvy': { prerender: true },
    '/politika-konfidentsialnosti': { prerender: true },
    // Долгий кэш для статики — меньше повторных запросов, быстрее повторные заходы
    '/img/**': {
      headers: { 'Cache-Control': 'public, max-age=31536000, immutable' }
    },
    '/logo.png': {
      headers: { 'Cache-Control': 'public, max-age=31536000, immutable' }
    },
    '/max.png': {
      headers: { 'Cache-Control': 'public, max-age=31536000, immutable' }
    },
    '/_nuxt/**': {
      headers: { 'Cache-Control': 'public, max-age=31536000, immutable' }
    }
  },

  compatibilityDate: '2026-01-15',

  nitro: {
    compressPublicAssets: true
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  /**
   * Nuxt Fonts / unifont configuration
   * Отключаем удалённых провайдеров (Google, Google Icons, Fontshare),
   * чтобы не было попыток ходить в интернет за шрифтами.
   */
  fonts: {
    // использовать только локальные шрифты (если появятся)
    provider: 'local',
    // явно отключаем удалённые провайдеры
    providers: {
      google: false,
      googleicons: false,
      fontshare: false
    },
    // devtools можно тоже выключить, чтобы меньше шума
    devtools: false
  }
})
