<template>
  <div>
    <!-- Overlay для затемнения фона -->
    <Transition name="fade">
      <div v-if="modelValue"
           class="fixed inset-0 bg-black bg-opacity-50 z-40"
           @click="$emit('update:modelValue', false)">
      </div>
    </Transition>

    <!-- Сайдбар -->
    <Transition name="slide">
      <div v-if="modelValue"
           :class="[
             'fixed left-0 top-0 h-full w-80 z-50 p-6 transition-all duration-300',
             isDark ? 'bg-neutral-900' : 'bg-white'
           ]">
        <!-- Заголовок сайдбара -->
        <div class="flex justify-between items-center mb-6">
          <h2 :class="isDark ? 'text-white' : 'text-gray-900'" class="text-lg font-medium">Фильтры</h2>
          <button @click="$emit('update:modelValue', false)" class="p-2" :class="isDark ? 'text-white' : 'text-gray-900'">
            <XMarkIcon class="w-5 h-5" />
          </button>
        </div>

        <!-- Содержимое фильтров -->
        <div class="space-y-6">
          <!-- Цена -->
          <div class="filter-section">
            <h3 :class="isDark ? 'text-white' : 'text-gray-900'" class="text-sm font-medium mb-4">Цена</h3>
            <div class="flex gap-4">
              <input type="number" placeholder="От" class="w-full px-3 py-2 border rounded-lg"
                     :class="isDark ? 'bg-neutral-800 border-neutral-700 text-white' : 'bg-white border-gray-200'">
              <input type="number" placeholder="До" class="w-full px-3 py-2 border rounded-lg"
                     :class="isDark ? 'bg-neutral-800 border-neutral-700 text-white' : 'bg-white border-gray-200'">
            </div>
          </div>

          <!-- Категории -->
          <div class="filter-section">
            <h3 :class="isDark ? 'text-white' : 'text-gray-900'" class="text-sm font-medium mb-4">Категории</h3>
            <div class="space-y-3">
              <label class="flex items-center gap-2">
                <input type="checkbox" class="rounded">
                <span :class="isDark ? 'text-neutral-300' : 'text-gray-700'">Категория 1</span>
              </label>
              <label class="flex items-center gap-2">
                <input type="checkbox" class="rounded">
                <span :class="isDark ? 'text-neutral-300' : 'text-gray-700'">Категория 2</span>
              </label>
            </div>
          </div>

          <!-- Кнопки действий -->
          <div class="fixed bottom-0 left-0 w-80 p-6 border-t"
               :class="isDark ? 'bg-neutral-900 border-neutral-700' : 'bg-white border-gray-200'">
            <div class="flex gap-4">
              <button class="w-1/2 px-4 py-2 rounded-lg border"
                      :class="isDark ? 'border-neutral-700 text-white hover:bg-neutral-800' : 'border-gray-200 text-gray-900 hover:bg-gray-50'">
                Сбросить
              </button>
              <button class="w-1/2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                Применить
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { useTheme } from '@/composables/useTheme'
import { watch } from 'vue'

const { isDark } = useTheme()

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

// Блокировка скролла при открытом сайдбаре
watch(() => props.modelValue, (newValue) => {
  document.body.style.overflow = newValue ? 'hidden' : ''
})
</script>

<style scoped>
/* Анимация для overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Анимация для сайдбара */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
