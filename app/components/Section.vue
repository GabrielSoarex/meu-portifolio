<template>
  <section :id="id" class="mx-auto max-w-6xl px-6 py-24">
    <h2 class="mb-12 text-3xl font-bold text-primary">
      {{ title }}
    </h2>
    <div>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string; id: string }>()
</script>
