<template>
  <div>
    <UPageHero
      title="О нас"
      description="Раздел переехал на страницу «О компании». Используйте новое меню, чтобы перейти к актуальной информации."
      :links="[
        {
          label: 'Перейти на страницу «О компании»',
          to: '/o-kompanii',
          trailingIcon: 'i-lucide-arrow-right',
          size: 'lg'
        }
      ]"
    />
  </div>
</template>
