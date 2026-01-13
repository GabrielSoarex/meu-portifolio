<template>
  <Motion
    :initial="{ opacity: 0, y: 60 }"
    :enter="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.8 }"
  >
    <slot />
  </Motion>
</template>
