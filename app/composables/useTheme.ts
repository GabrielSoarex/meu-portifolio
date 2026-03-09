import { useDark, useToggle } from '@vueuse/core'

const storageKey = 'portfolio-theme'

export const isDark = useDark({
  storageKey,
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: '',
})

export const toggleDark = useToggle(isDark)
