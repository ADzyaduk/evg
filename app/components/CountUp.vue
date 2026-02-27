<script setup lang="ts">
const props = withDefaults(defineProps<{
  to: number
  duration?: number
  suffix?: string
}>(), {
  duration: 1500,
  suffix: ''
})

const current = ref(0)
const el = ref<HTMLElement | null>(null)

function animate() {
  const start = performance.now()
  const step = (now: number) => {
    const progress = Math.min((now - start) / props.duration, 1)
    const eased = 1 - (1 - progress) ** 3
    current.value = Math.round(eased * props.to)
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  if (!el.value) return
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        animate()
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )
  observer.observe(el.value)
})
</script>

<template>
  <span ref="el">{{ current }}{{ suffix }}</span>
</template>
