// src/composables/useTheme.js
import { ref } from 'vue'

const isDark = ref(false)

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
    // Добавляем/удаляем класс dark для body
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Проверяем системные настройки при инициализации
  const initTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      isDark.value = true
      document.documentElement.classList.add('dark')
    }
  }

  return {
    isDark,
    toggleTheme,
    initTheme,
  }
}
