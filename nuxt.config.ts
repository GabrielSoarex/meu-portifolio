// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxtjs/tailwindcss', '@vueuse/motion/nuxt'],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Gabriel Soares — Desenvolvedor de Software',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Portfólio de Gabriel Soares. Desenvolvedor de software com foco em Vue.js, Nuxt, UX/UI e aplicações modernas.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Gabriel Soares — Desenvolvedor de Software' },
        {
          property: 'og:description',
          content: 'Portfólio de Gabriel Soares. Desenvolvedor de software com foco em Vue.js, Nuxt, UX/UI e aplicações modernas.',
        },
      ],
      link: [{ rel: 'canonical', href: 'https://gabrielsoares.dev' }],
    },
  },
})
