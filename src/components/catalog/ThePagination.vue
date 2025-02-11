<template>
  <div
    class="max-w-[1920px] mx-auto px-8 py-8"
    :class="isDark ? 'bg-neutral-900' : 'bg-white'"
  >
    <div class="flex justify-center gap-2">
      <button
        class="px-4 py-2 text-sm hover:text-white transition-colors"
        :class="isDark ? 'text-neutral-400' : 'text-gray-500 hover:text-gray-900'"
      >
        <ChevronLeftIcon class="w-5 h-5" />
      </button>
      <button
        class="px-4 py-2 text-sm"
        :class="isDark ? 'text-white' : 'text-gray-900'"
      >
        1
      </button>
      <button
        class="px-4 py-2 text-sm hover:text-white transition-colors"
        :class="isDark ? 'text-neutral-400' : 'text-gray-500 hover:text-gray-900'"
      >
        2
      </button>
      <button
        class="px-4 py-2 text-sm hover:text-white transition-colors"
        :class="isDark ? 'text-neutral-400' : 'text-gray-500 hover:text-gray-900'"
      >
        3
      </button>
      <button
        class="px-4 py-2 text-sm hover:text-white transition-colors"
        :class="isDark ? 'text-neutral-400' : 'text-gray-500 hover:text-gray-900'"
      >
        <ChevronRightIcon class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import { useTheme } from '@/composables/useTheme'

const { isDark } = useTheme()
</script>