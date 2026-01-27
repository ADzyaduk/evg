<template>
  <div>
    <UPageHero
      title="Каталог подушек и чехлов"
      description="Подушки для уличной мебели, пляжных лежаков, носовые подушки для яхт и перешив диванов. Все изделия шьём на заказ под ваши размеры."
    />

    <UPageSection
      title="Подушки для уличной мебели"
      description="Решения для садовых кресел, шезлонгов, уличных диванов и комплектов на террасе."
    >
      <div class="grid gap-6 lg:grid-cols-3">
        <UCard>
          <template #header>
            <div class="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/Booka-lounge-set-1-Sadovaya-mebel-akatsiya.jpg"
                alt="Подушки для садовых кресел и шезлонгов"
                class="h-full w-full object-cover"
              >
            </div>
          </template>
          <template #footer>
            <p class="font-semibold">Подушки для садовых кресел и шезлонгов</p>
            <p class="text-sm text-muted">
              Подушки со съёмными чехлами на молнии, которые легко стирать. Используем уличные ткани
              Oxford, полиэстер с водоотталкивающей пропиткой и материалы с UV‑защитой.
            </p>
            <ul class="mt-3 space-y-1 text-sm">
              <li>• Съёмные чехлы на молнии</li>
              <li>• Влагостойкие и плотные ткани для улицы</li>
              <li>• Индивидуальные размеры и форма под вашу мебель</li>
            </ul>
          </template>
        </UCard>

        <UCard>
          <template #header>
            <div class="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/1687874901_kartin-papik-pro-p-kartinki-more-plyazh-lezhak-59.jpg"
                alt="Чехлы для пляжных лежаков у моря"
                class="h-full w-full object-cover"
              >
            </div>
          </template>
          <template #footer>
            <p class="font-semibold">Чехлы для пляжных лежаков</p>
            <p class="text-sm text-muted">
              Чехлы для пляжных лежаков из износостойких материалов для отелей, апартаментов и
              частных террас. Учитываем частую стирку, прямое солнце и интенсивное использование.
            </p>
            <ul class="mt-3 space-y-1 text-sm">
              <li>• Устойчивость к выгоранию и многократной стирке</li>
              <li>• Фиксация на лежаке, чтобы чехлы не сползали</li>
              <li>• Возможность нанесения логотипа объекта</li>
            </ul>
          </template>
        </UCard>

        <UCard>
          <template #header>
            <div class="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/orig.webp"
                alt="Комплект подушек для уличной террасы"
                class="h-full w-full object-cover"
              >
            </div>
          </template>
          <template #footer>
            <p class="font-semibold">Комплекты для террас и веранд</p>
            <p class="text-sm text-muted">
              Комплекты подушек для уличных диванов, лавок и встроенной мебели. Подбираем оттенки и
              фактуру тканей под фасад, пол и декор, чтобы зона отдыха выглядела цельно.
            </p>
            <ul class="mt-3 space-y-1 text-sm">
              <li>• Решения для ресторанов, отелей и частных домов</li>
              <li>• Уличные ткани с UV‑защитой и влагостойкостью</li>
              <li>• Единый стиль для всей зоны отдыха</li>
            </ul>
          </template>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection
      title="Носовые подушки для яхт и мягкая мебель"
      description="Изготавливаем носовые подушки для яхт и перешиваем мягкую мебель из кожи, алькантары и специализированных уличных тканей."
    >
      <div class="grid gap-6 lg:grid-cols-2">
        <UCard>
          <template #header>
            <div class="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/1690563359_hdpic-club-p-yakhta-vid-szadi-49-e1755513283928.jpg"
                alt="Носовые подушки на палубе яхты"
                class="h-full w-full object-cover"
              >
            </div>
          </template>
          <template #footer>
            <p class="font-semibold">Носовые подушки для яхт</p>
            <p class="text-sm text-muted">
              Носовые подушки для яхт из кожи, алькантары или тканей Sunbrella. Учитываем форму
              палубы, точки крепления и эксплуатацию в морском климате, чтобы подушки не скользили и
              не выгорали.
            </p>
            <ul class="mt-3 space-y-1 text-sm">
              <li>• Ткани Sunbrella и аналогичные морские материалы</li>
              <li>• Устойчивость к солёной воде, солнцу и абразиву</li>
              <li>• Индивидуальный крой под ваш корпус и палубу</li>
            </ul>
          </template>
        </UCard>

        <UCard>
          <template #header>
            <div class="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/s-l1600.webp"
                alt="Перешитый диван с новой обивкой"
                class="h-full w-full object-cover"
              >
            </div>
          </template>
          <template #footer>
            <p class="font-semibold">Перешив диванов и мебели</p>
            <p class="text-sm text-muted">
              Перешиваем диваны, кресла и другую мягкую мебель по индивидуальным размерам. Меняем
              обивку, наполнитель и геометрию сиденья, чтобы вернуть комфорт и обновить интерьер.
            </p>
            <ul class="mt-3 space-y-1 text-sm">
              <li>• Кожа, алькантара, уличные и интерьерные ткани</li>
              <li>• Работаем с бытовой и коммерческой мебелью</li>
              <li>• Подбор материалов под стиль помещения</li>
            </ul>
          </template>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection
      title="Индивидуальный пошив под ваши задачи"
      description="Все изделия мы шьём на заказ. Можно изменить размер, толщину, плотность наполнителя, цвет и фактуру ткани."
    >
      <div class="prose prose-sm max-w-none dark:prose-invert">
        <p>
          Если вы не нашли в каталоге точный вариант, который вам нужен, — просто напишите нам.
          Мы подберём ткани и предложим решение под ваши условия эксплуатации: садовый участок,
          терраса с бассейном, панорамный балкон или яхта.
        </p>
        <p>
          Подушки для уличной мебели и чехлы на пляжные лежаки мы изготавливаем с учётом климата
          Сочи и побережья Чёрного моря: усиливаем места нагрузки, подбираем фурнитуру, которая
          выдерживает влагу и солнце, и даём рекомендации по уходу.
        </p>
      </div>
    </UPageSection>
  </div>
</template>

