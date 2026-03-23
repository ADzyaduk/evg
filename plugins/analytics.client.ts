import { START_LOCATION } from 'vue-router'

type YmFn = (counterId: number | string, method: string, ...args: unknown[]) => void

declare global {
  interface Window {
    ym?: YmFn
  }
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const yandexMetrikaId = config.public.yandexMetrikaId as string | undefined

  if (import.meta.server) return

  const cookieConsent = useCookieConsent()
  /** До этого load() вызывался только в onMounted CookieBanner — плагин успевал раньше и не видел согласие из localStorage. */
  cookieConsent.load()

  const router = useRouter()

  function loadYandexMetrika(id: string) {
    if (document.getElementById('ym-script')) return

    const counterId = Number(id)
    if (!Number.isFinite(counterId)) return

    const s = document.createElement('script')
    s.id = 'ym-script'
    s.type = 'text/javascript'
    s.async = true
    s.textContent = `
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(${counterId}, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });
`
    document.head.appendChild(s)
  }

  function tryLoad() {
    if (!cookieConsent.hasConsent('analytics')) return
    if (yandexMetrikaId) loadYandexMetrika(yandexMetrikaId)
  }

  tryLoad()

  watch(cookieConsent.preferences, () => tryLoad(), { deep: true })

  /**
   * Первый просмотр уходит при init счётчика; при клиентской навигации Nuxt полной перезагрузки нет — шлём hit вручную.
   * Пропускаем только переход с START_LOCATION (первый заход), чтобы не дублировать первый hit.
   */
  router.afterEach((to, from) => {
    if (!yandexMetrikaId || !cookieConsent.hasConsent('analytics')) return
    if (from === START_LOCATION) return
    window.ym?.(Number(yandexMetrikaId), 'hit', window.location.href)
  })
})
