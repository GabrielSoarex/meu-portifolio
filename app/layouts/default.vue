<script setup lang="ts">
import { isDark, toggleDark } from '~/composables/useTheme'
</script>

<template>
  <div class="min-h-screen bg-surface text-content transition-colors duration-200">
    <a
      href="#main-content"
      class="fixed left-4 top-4 z-[100] rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white opacity-0 transition focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
    >
      Ir ao conteúdo
    </a>
    <header class="fixed top-0 left-0 right-0 z-50 border-b border-content/10 bg-surface/80 backdrop-blur">
      <div class="max-w-6xl mx-auto flex justify-between items-center p-4">
        <span class="text-lg font-semibold text-content">GS</span>
        <button
          type="button"
          :aria-pressed="isDark"
          aria-label="Alternar tema claro ou escuro"
          class="p-2 rounded-lg text-content hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface transition"
          @click="toggleDark()"
        >
          <span v-if="isDark" aria-hidden="true">☀️</span>
          <span v-else aria-hidden="true">🌙</span>
        </button>
      </div>
    </header>

    <main id="main-content" class="pt-24" tabindex="-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>
