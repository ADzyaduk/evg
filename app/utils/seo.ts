const SITE_NAME = 'PavlovCraft'
const SITE_DESCRIPTION = 'Швейное производство и поставки тканей в Сочи'
const SITE_URL = 'https://pavlovcraft.ru'
const LOGO_URL = `${SITE_URL}/logo.webp`
const TELEGRAM_URL = 'https://t.me/+79854240703'
const MAX_URL = 'https://max.ru/u/f9LHodD0cOIUkq5cHidDnAM2t5izIzxMfIIMB_L-q1EuNzpkF3htlB-9c2Q'

export const SEO_LAST_UPDATED = '2026-04-18'

export const businessIdentity = {
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  siteUrl: SITE_URL,
  logoUrl: LOGO_URL,
  email: 'info@pavlovcraft.ru',
  telephone: '+79854240703',
  sameAs: [TELEGRAM_URL, MAX_URL]
}

export function normalizeCanonicalPath(path: string) {
  const [pathname] = path.split(/[?#]/)

  if (!pathname || pathname === '/')
    return '/'

  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
}

export function createAbsoluteUrl(siteUrl: string, path: string) {
  const normalizedSiteUrl = siteUrl.replace(/\/$/, '')
  const normalizedPath = normalizeCanonicalPath(path)

  return normalizedPath === '/'
    ? `${normalizedSiteUrl}/`
    : `${normalizedSiteUrl}${normalizedPath}`
}

export function createOrganizationSchema(description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    'name': SITE_NAME,
    description,
    'url': SITE_URL,
    'logo': LOGO_URL,
    'image': `${SITE_URL}/img/hero.webp`,
    'email': businessIdentity.email,
    'telephone': businessIdentity.telephone,
    'sameAs': businessIdentity.sameAs,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'ул. Мира, 44а',
      'addressLocality': 'Сочи',
      'addressRegion': 'Краснодарский край',
      'addressCountry': 'RU'
    },
    'contactPoint': [
      {
        '@type': 'ContactPoint',
        'telephone': businessIdentity.telephone,
        'email': businessIdentity.email,
        'contactType': 'customer support',
        'areaServed': 'RU',
        'availableLanguage': ['Russian']
      }
    ],
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '09:00',
        'closes': '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Saturday',
        'opens': '10:00',
        'closes': '16:00'
      }
    ],
    'priceRange': '$$'
  }
}

export function createWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    'name': SITE_NAME,
    'url': SITE_URL,
    'inLanguage': 'ru',
    'publisher': {
      '@id': `${SITE_URL}/#organization`
    }
  }
}

export function createWebPageSchema({
  path,
  name,
  description
}: {
  path: string
  name: string
  description: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${createAbsoluteUrl(SITE_URL, path)}#webpage`,
    'url': createAbsoluteUrl(SITE_URL, path),
    name,
    description,
    'inLanguage': 'ru',
    'isPartOf': {
      '@id': `${SITE_URL}/#website`
    },
    'about': {
      '@id': `${SITE_URL}/#organization`
    }
  }
}

export function createBreadcrumbSchema(items: Array<{ name: string, path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': createAbsoluteUrl(SITE_URL, item.path)
    }))
  }
}

export function createArticleSchema({
  path,
  headline,
  description,
  image,
  datePublished,
  dateModified
}: {
  path: string
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified: string
}) {
  const url = createAbsoluteUrl(SITE_URL, path)
  const imageUrl = image.startsWith('http') ? image : createAbsoluteUrl(SITE_URL, image)

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline,
    description,
    'image': [imageUrl],
    datePublished,
    dateModified,
    'inLanguage': 'ru',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${url}#webpage`
    },
    'author': {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      'name': SITE_NAME
    },
    'publisher': {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      'name': SITE_NAME,
      'logo': {
        '@type': 'ImageObject',
        'url': LOGO_URL
      }
    }
  }
}
