export default defineEventHandler((event) => {
  const config = useRuntimeConfig()

  const rawSiteUrl = config.public.siteUrl || 'https://pavlovcraft.ru'
  const siteUrl = rawSiteUrl.replace(/\/$/, '')
  const host = siteUrl.replace(/^https?:\/\//, '')

  const lines = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${siteUrl}/sitemap.xml`,
    `Host: ${host}`
  ]

  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')

  return lines.join('\n')
})
