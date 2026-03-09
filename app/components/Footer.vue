<template>
  <footer class="mt-32 border-t border-primary/20 bg-primary/5 backdrop-blur">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
      <p class="text-sm text-primary">
        © {{ new Date().getFullYear() }} Gabriel Soares. All rights reserved.
      </p>
      <div class="flex items-center gap-6">
        <a
          href="https://www.linkedin.com/in/gabriel-soares-94386b2aa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="opacity-70 transition hover:opacity-100 focus:outline-none focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt=""
            class="h-8 w-9 invert dark:invert-0"
          />
        </a>
        <a
          href="https://github.com/GabrielSoarex"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="opacity-70 transition hover:opacity-100 focus:outline-none focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          <img
            src="https://logowik.com/content/uploads/images/github9775.jpg"
            alt=""
            class="h-9 w-9 object-contain invert dark:invert-0"
          />
        </a>
      </div>
    </div>
  </footer>
</template>
