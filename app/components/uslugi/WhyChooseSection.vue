<script setup lang="ts">
interface Feature {
  icon: string
  title: string
  description: string
}

defineProps<{ features: Feature[] }>()
</script>

<template>
  <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="(f, i) in features"
      :key="f.title"
      v-animate="i + 1"
      class="group flex gap-4 p-5 rounded-xl bg-elevated/50 hover:bg-elevated transition-colors"
    >
      <div class="flex shrink-0 items-center justify-center size-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        <UIcon
          :name="f.icon"
          class="size-6"
        />
      </div>
      <div>
        <p class="font-semibold text-sm">
          {{ f.title }}
        </p>
        <p class="text-xs text-muted mt-1">
          {{ f.description }}
        </p>
      </div>
    </div>
  </div>
</template>
