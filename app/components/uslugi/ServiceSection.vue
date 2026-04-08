<script setup lang="ts">
interface ServiceItem {
  image: string
  imageAlt: string
  title: string
  description: string
  features: string[]
}

defineProps<{ items: ServiceItem[] }>()
</script>

<template>
  <div class="grid gap-6 sm:grid-cols-2">
    <UCard
      v-for="(item, i) in items"
      :key="item.title"
      v-animate="i + 1"
      class="card-hover"
    >
      <template #header>
        <div class="aspect-video overflow-hidden rounded-lg bg-muted">
          <img
            :src="item.image"
            :alt="item.imageAlt"
            width="700"
            height="394"
            loading="lazy"
            decoding="async"
            class="h-full w-full object-cover"
          >
        </div>
      </template>
      <template #footer>
        <p class="font-semibold">
          {{ item.title }}
        </p>
        <p class="text-sm text-muted">
          {{ item.description }}
        </p>
        <ul class="mt-3 space-y-1 text-sm">
          <li
            v-for="f in item.features"
            :key="f"
          >
            • {{ f }}
          </li>
        </ul>
        <UButton
          to="/kontakty"
          label="Заказать"
          size="sm"
          variant="outline"
          color="neutral"
          trailing-icon="i-lucide-arrow-right"
          class="mt-3"
        />
      </template>
    </UCard>
  </div>
</template>
