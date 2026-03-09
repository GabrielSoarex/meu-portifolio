<template>
  <div
    class="rounded-2xl border border-content/10 bg-surface-elevated/50 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 focus-within:ring-2 focus-within:ring-primary/30"
  >
    <h3 class="text-lg font-semibold text-content">
      {{ title }}
    </h3>
    <p v-if="subtitle" class="mb-4 text-sm text-content-muted">
      {{ subtitle }}
    </p>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; subtitle?: string }>()
</script>
