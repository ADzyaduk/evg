// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/a11y'],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
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
  },

  compatibilityDate: '2026-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})