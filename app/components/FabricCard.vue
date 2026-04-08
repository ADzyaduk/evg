<script setup lang="ts">
import type { Fabric } from '~/utils/fabrics'
import { coatingBadgeClass, coatingTip, imgPath, categoryAccentColor } from '~/utils/fabrics'

const props = defineProps<{ fabric: Fabric }>()

const MAX_COLLAPSED = 12
const activeColor = ref<string | null>(null)
const expanded = ref(false)

const hasMore = computed(() => props.fabric.images.length > MAX_COLLAPSED)
const remaining = computed(() => props.fabric.images.length - MAX_COLLAPSED)
const displayImages = computed(() =>
  expanded.value ? props.fabric.images : props.fabric.images.slice(0, MAX_COLLAPSED)
)

function onSwatchEnter(color: string) {
  activeColor.value = color
}
function onSwatchLeave() {
  activeColor.value = null
}
function onSwatchClick(color: string) {
  activeColor.value = activeColor.value === color ? null : color
}
</script>

<template>
  <div
    class="fabric-card flex flex-col rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm"
    :style="{ '--accent': categoryAccentColor[fabric.category] ?? '#94a3b8' }"
  >
    <!-- Accent stripe -->
    <div
      class="h-[3px] shrink-0"
      style="background-color: var(--accent)"
    />

    <!-- Header zone with subtle tint -->
    <div
      class="px-4 pt-4 pb-3"
      style="background-color: color-mix(in srgb, var(--accent) 5%, transparent)"
    >
      <div class="flex items-start justify-between gap-2">
        <p class="font-bold text-base leading-snug">
          {{ fabric.name }}
        </p>
        <span
          v-if="fabric.density"
          class="shrink-0 text-xs font-semibold tabular-nums text-primary bg-primary/10 px-2 py-0.5 rounded-full"
        >
          {{ fabric.density }}
        </span>
      </div>
      <p class="text-xs text-muted mt-1">
        {{ fabric.type }}
        <span v-if="fabric.composition"> · {{ fabric.composition }}</span>
        <span v-if="fabric.weave"> · {{ fabric.weave }}</span>
      </p>
    </div>

    <!-- Main content -->
    <div class="px-4 pt-3 pb-4 flex flex-col gap-3 flex-1">
      <!-- Coating badges -->
      <div
        v-if="fabric.coatings.length"
        class="flex flex-wrap gap-1.5"
      >
        <span
          v-for="c in fabric.coatings"
          :key="c"
          class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium cursor-help"
          :class="coatingBadgeClass(c)"
          :title="coatingTip[c] ?? c"
        >
          {{ c }}
        </span>
      </div>

      <!-- Description -->
      <p class="text-sm text-muted leading-relaxed flex-1 line-clamp-3">
        {{ fabric.description }}
      </p>

      <!-- Swatches section -->
      <div
        v-if="fabric.images.length"
        class="border-t border-neutral-100 dark:border-neutral-800 pt-3"
      >
        <!-- Header: label + active color name -->
        <div class="flex items-center justify-between mb-2 min-h-[1.125rem]">
          <span class="text-xs text-muted">Оттенки · {{ fabric.images.length }}</span>
          <Transition name="color-fade">
            <span
              v-if="activeColor"
              key="color-name"
              class="text-xs font-medium text-default"
            >
              {{ activeColor }}
            </span>
          </Transition>
        </div>

        <!-- Swatch grid -->
        <div class="grid grid-cols-6 gap-1">
          <button
            v-for="img in displayImages"
            :key="img.file"
            class="swatch w-full aspect-square rounded-md overflow-hidden ring-1 ring-black/10 dark:ring-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            :aria-label="img.color"
            @mouseenter="onSwatchEnter(img.color)"
            @mouseleave="onSwatchLeave"
            @click="onSwatchClick(img.color)"
          >
            <img
              :src="imgPath(fabric.folder, img.file)"
              :alt="img.color"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover"
            >
          </button>
        </div>

        <!-- Expand toggle -->
        <button
          v-if="hasMore"
          class="mt-2 inline-flex items-center gap-1 text-xs text-muted hover:text-default transition-colors cursor-pointer"
          @click="expanded = !expanded"
        >
          <UIcon
            :name="expanded ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
            class="size-3.5 shrink-0"
          />
          {{ expanded ? 'Свернуть' : `Показать ещё ${remaining}` }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fabric-card {
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.fabric-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.12);
}
.swatch {
  transition: opacity 0.1s ease;
}
.swatch:hover {
  opacity: 0.8;
}

.color-fade-enter-active,
.color-fade-leave-active {
  transition: opacity 0.15s ease;
}
.color-fade-enter-from,
.color-fade-leave-to {
  opacity: 0;
}
</style>
