<template>
  <footer class="mt-32 border-t border-blue-400/20 bg-blue-400/5 backdrop-blur">
    <div
      class="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <p class="text-sm text-blue-400">
        © {{ new Date().getFullYear() }} Gabriel Soares. All rights reserved.
      </p>

      <div class="flex items-center gap-6">

        <a
          href="https://www.linkedin.com/in/gabriel-soares-94386b2aa"
          target="_blank"
          aria-label="LinkedIn"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            class="w-9 h-8 invert dark:invert-0 opacity-60 hover:opacity-100 transition"
          />
        </a>

        <a
          href="https://github.com/GabrielSoarex"
          target="_blank"
          aria-label="GitHub"
        >
          <img
            src="https://logowik.com/content/uploads/images/github9775.jpg"
            alt="GitHub"
            class="w-9 h-9 object-contain invert dark:invert-0 opacity-70 hover:opacity-100 transition"
          />
        </a>
      </div>
    </div>
  </footer>
</template>
