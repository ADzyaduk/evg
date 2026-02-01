/**
 * Проверка настройки Telegram для формы обратной связи.
 * Возвращает статус без раскрытия секретов.
 */
export default defineEventHandler(() => {
  const config = useRuntimeConfig()
  const hasToken = Boolean(config.telegramBotToken?.trim())
  const hasChatId = Boolean(config.telegramChatId?.trim())
  return {
    configured: hasToken && hasChatId,
    hasToken,
    hasChatId
  }
})
