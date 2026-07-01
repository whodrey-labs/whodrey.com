<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  once: {
    type: Boolean,
    default: true,
  },
  delay: {
    type: [Number, String],
    default: 0,
  },
  duration: {
    type: [Number, String],
    default: 500,
  },
  distance: {
    type: [Number, String],
    default: 24,
  },
  threshold: {
    type: Number,
    default: 0.15,
  },
  rootMargin: {
    type: String,
    default: "0px 0px -8% 0px",
  },
});

const isVisible = ref(false);

const revealStyle = computed(() => ({
  "--scroll-reveal-delay": formatUnit(props.delay, "ms"),
  "--scroll-reveal-duration": formatUnit(props.duration, "ms"),
  "--scroll-reveal-distance": formatUnit(props.distance, "px"),
}));

const intersect = computed(() => ({
  handler: onIntersect,
  options: {
    rootMargin: props.rootMargin,
    threshold: props.threshold,
  },
}));

function formatUnit(value, unit) {
  return typeof value === "number" ? `${value}${unit}` : value;
}

function onIntersect(isIntersecting) {
  if (isIntersecting) {
    isVisible.value = true;
    return;
  }

  if (!props.once) {
    isVisible.value = false;
  }
}
</script>

<template>
  <component
    :is="tag"
    v-intersect="intersect"
    class="scroll-reveal"
    :class="{ 'scroll-reveal--visible': isVisible }"
    :style="revealStyle"
  >
    <slot />
  </component>
</template>

<style scoped>
.scroll-reveal {
  opacity: 0;
  transform: translateY(var(--scroll-reveal-distance));
  transition:
    opacity var(--scroll-reveal-duration) ease,
    transform var(--scroll-reveal-duration) cubic-bezier(0.2, 0, 0, 1);
  transition-delay: var(--scroll-reveal-delay);
  will-change: opacity, transform;
}

.scroll-reveal--visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .scroll-reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
