<script setup lang="ts">
import type { FabricCategory } from '~/utils/fabrics'
import { categoryAccentColor } from '~/utils/fabrics'

defineProps<{
  categories: FabricCategory[]
  modelValue: string
  categoryCount: (key: string) => number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const activePillStyle = (key: string, selected: string) => {
  if (selected !== key) return {}
  const color = categoryAccentColor[key] ?? '#10b981'
  return { backgroundColor: `${color}18`, borderColor: `${color}55`, color }
}
</script>

<template>
  <div class="flex flex-wrap gap-2 mb-8">
    <button
      v-for="cat in categories"
      :key="cat.key"
      class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      :class="
        modelValue === cat.key
          ? 'shadow-sm'
          : 'bg-elevated border-border text-muted hover:text-default hover:border-primary/40'
      "
      :style="activePillStyle(cat.key, modelValue)"
      @click="emit('update:modelValue', cat.key)"
    >
      <UIcon
        :name="cat.icon"
        class="size-3.5 shrink-0"
      />
      {{ cat.label }}
      <span
        class="rounded-full px-1.5 py-px text-xs font-semibold tabular-nums leading-none"
        :class="modelValue === cat.key ? 'bg-black/10 dark:bg-white/15' : 'bg-muted text-muted'"
      >
        {{ categoryCount(cat.key) }}
      </span>
    </button>
  </div>
</template>
