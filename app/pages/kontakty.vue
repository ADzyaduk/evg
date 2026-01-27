<template>
  <div>
    <UPageHero
      title="Контакты"
      description="Выберите удобный способ связи: мессенджер или звонок. Ответим на вопросы по пошиву подушек, подскажем по тканям и срокам."
      :links="[
        {
          label: 'Написать в Telegram',
          to: '#',
          icon: 'i-simple-icons-telegram',
          size: 'lg'
        },
        {
          label: 'Позвонить',
          to: 'tel:+70000000000',
          icon: 'i-lucide-phone',
          size: 'lg',
          color: 'neutral',
          variant: 'outline'
        }
      ]"
    />

    <UPageSection
      title="Как с нами связаться"
      :features="[
        {
          icon: 'i-lucide-phone',
          title: 'Телефон',
          description: 'Телефон для оперативных вопросов и согласования замеров: +7 (000) 000‑00‑00.',
          to: 'tel:+70000000000'
        },
        {
          icon: 'i-simple-icons-telegram',
          title: 'Telegram',
          description: 'Удобно отправить фото мебели, зоны отдыха или яхты и обсудить детали заказа.',
          to: '#'
        },
        {
          icon: 'i-simple-icons-x',
          title: 'Max / X',
          description: 'Канал для новостей и анонсов. Можно написать в личные сообщения.',
          to: '#'
        }
      ]"
    />

    <UPageSection>
      <UPageCTA
        title="Опишите задачу в свободной форме"
        description="Прикрепите фото мебели или зоны отдыха, напишите город и желаемые сроки — мы предложим варианты тканей и ориентировочную стоимость."
        :links="[
          {
            label: 'Написать в Telegram',
            to: '#',
            trailingIcon: 'i-simple-icons-telegram',
            color: 'neutral'
          }
        ]"
      />
    </UPageSection>
  </div>
</template>

