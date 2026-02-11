/**
 * v-animate directive (runs on server + client; behavior is client-only).
 *
 * Usage: <div v-animate>…</div>
 *        <div v-animate="2">…</div>  (adds stagger-2 class)
 *
 * On client: adds "animate-on-scroll", then "is-visible" when in viewport.
 * On server: directive must be defined so SSR does not call getSSRProps on undefined.
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('animate', {
    getSSRProps() {
      return {}
    },
    mounted(el: HTMLElement, binding) {
      if (import.meta.server) return

      el.classList.add('animate-on-scroll')

      if (binding.value !== undefined && binding.value !== null) {
        el.classList.add(`stagger-${binding.value}`)
      }

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          }
        },
        { threshold: 0.1 }
      )

      observer.observe(el)
      const elWithObserver = el as HTMLElement & { __animateObserver?: IntersectionObserver }
      elWithObserver.__animateObserver = observer
    },
    unmounted(el: HTMLElement) {
      const elWithObserver = el as HTMLElement & { __animateObserver?: IntersectionObserver }
      const observer = elWithObserver.__animateObserver
      if (observer) {
        observer.unobserve(el)
        observer.disconnect()
      }
    }
  })
})
