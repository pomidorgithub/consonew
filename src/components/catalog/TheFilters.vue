<template>
  <div ref="filterRef" :class="[
    'max-w-[1920px] mx-auto px-8 transition-all duration-300',
    isDark ? 'bg-neutral-900' : 'bg-white',
    isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : ''
  ]">
    <div class="flex justify-between items-center py-4">
      <div class="flex gap-4">
        <button
          @click="isSidebarOpen = true"
          class="text-sm flex items-center gap-2"
          :class="isDark ? 'text-white' : 'text-gray-900'"
        >
          <FunnelIcon class="w-4 h-4" />
          Фильтры
        </button>
        <span class="text-sm" :class="isDark ? 'text-neutral-400' : 'text-gray-500'"
          >248 товаров</span
        >
      </div>

      <div class="flex items-center gap-4">
        <select
          class="text-sm border-none outline-none"
          :class="isDark ? 'bg-neutral-900 text-white' : 'bg-white text-gray-900'"
        >
          <option>По умолчанию</option>
          <option>Новинки</option>
          <option>Цена: по возрастанию</option>
          <option>Цена: по убыванию</option>
        </select>

        <div class="flex gap-2">
          <!-- Кнопка для 3 карточек (по умолчанию) -->
          <button
            class="p-2"
            :class="
              viewMode === 'three'
                ? isDark
                  ? 'text-white'
                  : 'text-gray-900'
                : isDark
                  ? 'text-neutral-400 hover:text-white'
                  : 'text-gray-400 hover:text-gray-900'
            "
            @click="setViewMode('three')"
          >
            <Squares2X2Icon class="w-5 h-5" />
          </button>

          <!-- Кнопка для 2 карточек -->
          <button
            class="p-2"
            :class="
              viewMode === 'two'
                ? isDark
                  ? 'text-white'
                  : 'text-gray-900'
                : isDark
                  ? 'text-neutral-400 hover:text-white'
                  : 'text-gray-400 hover:text-gray-900'
            "
            @click="setViewMode('two')"
          >
            <RectangleGroupIcon class="w-5 h-5" />
          </button>

          <!-- Кнопка для 5 карточек -->
          <button
            class="p-2"
            :class="
              viewMode === 'five'
                ? isDark
                  ? 'text-white'
                  : 'text-gray-900'
                : isDark
                  ? 'text-neutral-400 hover:text-white'
                  : 'text-gray-400 hover:text-gray-900'
            "
            @click="setViewMode('five')"
          >
            <TableCellsIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Подключаем компонент сайдбара -->
  <TheSidebarFilter v-model="isSidebarOpen" />

  <!-- Placeholder для предотвращения прыжков контента -->
  <div v-if="isSticky" :style="{ height: filterHeight + 'px' }"></div>
</template>

<script setup>
import {
  FunnelIcon,
  Squares2X2Icon,
  RectangleGroupIcon,
  TableCellsIcon,
} from '@heroicons/vue/24/outline'
import { useTheme } from '@/composables/useTheme'
import { ref, onMounted, onUnmounted } from 'vue'
import TheSidebarFilter from './TheSidebarFilter.vue'

const { isDark } = useTheme()
const filterRef = ref(null)
const isSticky = ref(false)
const filterHeight = ref(0)
const initialOffset = ref(0)
const isSidebarOpen = ref(false)

// Отслеживание скролла
const handleScroll = () => {
  if (!filterRef.value) return

  const currentScroll = window.scrollY
  const headerHeight = 80 // Высота вашего header, настройте под свой размер

  if (currentScroll > initialOffset.value - headerHeight) {
    isSticky.value = true
  } else {
    isSticky.value = false
  }
}

onMounted(() => {
  if (filterRef.value) {
    filterHeight.value = filterRef.value.offsetHeight
    initialOffset.value = filterRef.value.offsetTop
  }

  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const props = defineProps({
  viewMode: {
    type: String,
    default: 'three',
    validator: (value) => ['two', 'three', 'five'].includes(value),
  },
})

const emit = defineEmits(['update:viewMode'])

const setViewMode = (mode) => {
  emit('update:viewMode', mode)
}
</script>

<style scoped>
.shadow-lg {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Для темной темы */
:deep(.dark) .shadow-lg {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
}
</style>
