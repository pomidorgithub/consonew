<template>
  <div
    class="p-8 flex flex-col items-center justify-center h-full text-center"
    :class="isDark ? 'bg-neutral-900 text-white' : 'bg-gray-100 text-black'"
  >
    <h2 class="text-2xl font-light mb-4">{{ title }}</h2>
    <p class="text-sm mb-6 max-w-sm" :class="isDark ? 'text-neutral-400' : 'text-gray-600'">
      {{ description }}
    </p>
    <p
      class="font-handwriting text-lg -rotate-2 transform mb-2"
      :class="isDark ? 'text-neutral-300' : 'text-gray-700'"
    >
      Создано с любовью к деталям
    </p>

  </div>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme'

const { isDark } = useTheme()

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500&display=swap');

.font-handwriting {
  font-family: 'Caveat', cursive;
}
</style>
