export default defineNuxtPlugin(() => {
  // Плагины *.client.ts выполняются только в браузере
  const config = useRuntimeConfig()
  const { yandexMetrikaId, gaMeasurementId } = config.public as {
    yandexMetrikaId?: string
    gaMeasurementId?: string
  }

  if (typeof document === 'undefined') {
    return
  }

  // Яндекс.Метрика
  if (yandexMetrikaId) {
    const ymScriptId = 'ym-script'

    if (!document.getElementById(ymScriptId)) {
      const ymScript = document.createElement('script')
      ymScript.id = ymScriptId
      ymScript.async = true
      ymScript.src = 'https://mc.yandex.ru/metrika/tag.js'
      document.head.appendChild(ymScript)

      // Инициализация счётчика
      const initScript = document.createElement('script')
      initScript.innerHTML = `
        (function(m,e,t,r,i,k,a){
          m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          k=e.createElement(t),a=e.getElementsByTagName(t)[0];
          k.async=1;k.src=r;a.parentNode.insertBefore(k,a);
        })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(${JSON.stringify(
          yandexMetrikaId
        )}, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });
      `
      document.head.appendChild(initScript)
    }
  }

  // Google Analytics 4
  if (gaMeasurementId) {
    const gaScriptId = 'ga4-script'

    if (!document.getElementById(gaScriptId)) {
      const gaScript = document.createElement('script')
      gaScript.id = gaScriptId
      gaScript.async = true
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
        gaMeasurementId
      )}`
      document.head.appendChild(gaScript)

      const inlineScript = document.createElement('script')
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaMeasurementId}');
      `
      document.head.appendChild(inlineScript)
    }
  }
})
