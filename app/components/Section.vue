<template>
  <section :id="id" class="max-w-6xl mx-auto py-24 px-6">
    <h2 class="text-3xl font-bold mb-12 text-blue-400">{{ title }}</h2>
    <div>
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({ title: String, id: String })
</script>
