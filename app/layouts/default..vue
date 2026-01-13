<script setup>
import { isDark, toggleDark } from "~/composables/useTheme";
</script>

<template>
  <div
    :class="isDark ? 'bg-zinc-950 text-white' : 'bg-gray-100 text-zinc-900'"
    class="min-h-screen transition-colors"
  >
    <header
      class="fixed top-0 w-full backdrop-blur bg-black/30 border-b border-white/10 z-50"
    >
      <div class="max-w-6xl mx-auto flex justify-between p-4">
        <button
          @click="toggleDark()"
          class="px-3 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition"
        >
          🌗
        </button>
      </div>
    </header>

    <main class="pt-24">
      <slot />
    </main>
    <Footer />
  </div>
</template>
