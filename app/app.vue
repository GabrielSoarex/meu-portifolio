<script setup lang="ts">
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Gabriel Soares',
  jobTitle: 'Desenvolvedor de Software',
  description: 'Desenvolvedor de software com foco em Vue.js, Nuxt, UX/UI e aplicações modernas.',
  url: 'https://gabrielsoares.dev',
  sameAs: [
    'https://www.linkedin.com/in/gabriel-soares-94386b2aa',
    'https://github.com/GabrielSoarex',
  ],
}
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: () => JSON.stringify(jsonLd),
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* Design system tokens: light theme */
:root {
  --color-primary: 59 130 246;
  --color-primary-muted: 96 165 250;
  --color-surface: 243 244 246;
  --color-surface-elevated: 255 255 255;
  --color-content: 24 24 27;
  --color-content-muted: 113 113 122;
}

/* Design system tokens: dark theme */
.dark {
  --color-primary: 96 165 250;
  --color-primary-muted: 147 197 253;
  --color-surface: 24 24 27;
  --color-surface-elevated: 39 39 42;
  --color-content: 250 250 250;
  --color-content-muted: 161 161 170;
}
</style>
