interface CookiePreferences {
  necessary: true
  analytics: boolean
  timestamp: string
}

const STORAGE_KEY = 'cookie-consent'

const defaults: CookiePreferences = {
  necessary: true,
  analytics: false,
  timestamp: ''
}

export function useCookieConsent() {
  const preferences = useState<CookiePreferences | null>('cookie-consent', () => null)
  const showBanner = useState('cookie-banner-visible', () => false)

  function load() {
    if (import.meta.server) return
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        preferences.value = JSON.parse(raw)
        showBanner.value = false
      } else {
        showBanner.value = true
      }
    } catch {
      showBanner.value = true
    }
  }

  function save(prefs: CookiePreferences) {
    preferences.value = prefs
    showBanner.value = false
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
    }
  }

  function acceptAll() {
    save({ necessary: true, analytics: true, timestamp: new Date().toISOString() })
  }

  function rejectAll() {
    save({ necessary: true, analytics: false, timestamp: new Date().toISOString() })
  }

  function savePreferences(analytics: boolean) {
    save({ necessary: true, analytics, timestamp: new Date().toISOString() })
  }

  function hasConsent(category: keyof Omit<CookiePreferences, 'timestamp'>): boolean {
    if (!preferences.value) return false
    return preferences.value[category] ?? false
  }

  return {
    preferences: readonly(preferences),
    showBanner: readonly(showBanner),
    load,
    acceptAll,
    rejectAll,
    savePreferences,
    hasConsent
  }
}
