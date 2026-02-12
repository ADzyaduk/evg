/**
 * Проверка настройки Telegram для формы обратной связи.
 * Возвращает статус без раскрытия секретов.
 */
export default defineEventHandler(() => {
  const config = useRuntimeConfig()
  const token = String(config.telegramBotToken || '').trim()
  const chatId = String(config.telegramChatId || '').trim()
  const hasToken = Boolean(token)
  const hasChatId = Boolean(chatId)
  return {
    configured: hasToken && hasChatId,
    hasToken,
    hasChatId
  }
})
