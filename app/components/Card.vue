<template>
  <div
    class="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 hover:shadow-blue-500/30 transition-all duration-300"
  >
    <h3 class="font-semibold text-lg">{{ title }}</h3>
    <p class="text-sm text-gray-400 mb-4">{{ subtitle }}</p>
    <slot />
  </div>
</template>

<script setup>
defineProps({ title: String, subtitle: String });
</script>
