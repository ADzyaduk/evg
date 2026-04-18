export default defineEventHandler((event) => {
  const config = useRuntimeConfig()

  const rawSiteUrl = config.public.siteUrl || 'https://pavlovcraft.ru'
  const siteUrl = rawSiteUrl.replace(/\/$/, '')
  const host = siteUrl.replace(/^https?:\/\//, '')

  const lines = [
    'User-agent: *',
    'Allow: /',
    '',
    'User-agent: GPTBot',
    'Allow: /',
    '',
    'User-agent: ChatGPT-User',
    'Allow: /',
    '',
    'User-agent: PerplexityBot',
    'Allow: /',
    '',
    'User-agent: ClaudeBot',
    'Allow: /',
    '',
    'User-agent: anthropic-ai',
    'Allow: /',
    '',
    'User-agent: Google-Extended',
    'Allow: /',
    '',
    'User-agent: Bingbot',
    'Allow: /',
    '',
    `Sitemap: ${siteUrl}/sitemap.xml`,
    `Host: ${host}`
  ]

  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')

  return lines.join('\n')
})
