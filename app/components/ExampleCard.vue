<script setup lang="ts">
defineProps<{
  image: string
  imageAlt: string
  title: string
  description: string
  to: string
}>()
</script>

<template>
  <UCard class="card-hover">
    <template #header>
      <div class="aspect-video overflow-hidden rounded-lg bg-muted">
        <img
          :src="image"
          :alt="imageAlt"
          width="700"
          height="394"
          loading="lazy"
          decoding="async"
          class="h-full w-full object-cover"
        >
      </div>
    </template>
    <template #footer>
      <p class="font-medium">
        {{ title }}
      </p>
      <p class="text-sm text-muted">
        {{ description }}
      </p>
      <UButton
        :to="to"
        label="Заказать"
        size="sm"
        variant="outline"
        color="neutral"
        trailing-icon="i-lucide-arrow-right"
        class="mt-3"
      />
    </template>
  </UCard>
</template>
