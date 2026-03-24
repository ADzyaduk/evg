// https://nuxt.com/docs/api/configuration/nuxt-config
declare const process: { env?: { NODE_ENV?: string } }

const YANDEX_METRIKA_COUNTER_ID = '106779888'

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
      ],
      script: [
        {
          key: 'yandex-metrika',
          type: 'text/javascript',
          innerHTML: `(function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_COUNTER_ID}', 'ym');

          ym(${YANDEX_METRIKA_COUNTER_ID}, 'init', { ssr: true, webvisor: true, clickmap: true, ecommerce: 'dataLayer', referrer: document.referrer, url: location.href, accurateTrackBounce: true, trackLinks: true });`
        }
      ],
      noscript: [
        {
          key: 'yandex-metrika-noscript',
          innerHTML: `<div><img src="https://mc.yandex.ru/watch/${YANDEX_METRIKA_COUNTER_ID}" style="position:absolute; left:-9999px;" alt="" /></div>`
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    telegramBotToken: '',
    telegramChatId: '',
    public: {
      siteUrl: 'https://pavlovcraft.ru',
      yandexMetrikaId: YANDEX_METRIKA_COUNTER_ID
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
    '/soglasie-na-obrabotku': { prerender: true },
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
