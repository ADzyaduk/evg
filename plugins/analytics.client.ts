export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const { yandexMetrikaId } = config.public as {
    yandexMetrikaId?: string
  }

  if (typeof document === 'undefined') return

  const { preferences } = useCookieConsent()

  function loadYandexMetrika(id: string) {
    if (document.getElementById('ym-script')) return

    const ymScript = document.createElement('script')
    ymScript.id = 'ym-script'
    ymScript.async = true
    ymScript.src = 'https://mc.yandex.ru/metrika/tag.js'
    document.head.appendChild(ymScript)

    const initScript = document.createElement('script')
    initScript.innerHTML = `
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        k=e.createElement(t),a=e.getElementsByTagName(t)[0];
        k.async=1;k.src=r;a.parentNode.insertBefore(k,a);
      })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      ym(${JSON.stringify(id)}, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });
    `
    document.head.appendChild(initScript)
  }

  function tryLoad() {
    if (!preferences.value?.analytics) return
    if (yandexMetrikaId) loadYandexMetrika(yandexMetrikaId)
  }

  tryLoad()

  watch(preferences, () => tryLoad(), { deep: true })
})
