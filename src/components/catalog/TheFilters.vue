<template>
  <div class="max-w-[1920px] mx-auto px-8" :class="isDark ? 'bg-neutral-900' : 'bg-white'">
    <div class="flex justify-between items-center">
      <div class="flex gap-4">
        <button class="text-sm flex items-center gap-2" :class="isDark ? 'text-white' : 'text-gray-900'">
          <FunnelIcon class="w-4 h-4" />
          Фильтры
        </button>
        <span class="text-sm" :class="isDark ? 'text-neutral-400' : 'text-gray-500'">248 товаров</span>
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
          <button
            class="p-2"
            :class="!isWideView
              ? (isDark ? 'text-white' : 'text-gray-900')
              : (isDark ? 'text-neutral-400 hover:text-white' : 'text-gray-400 hover:text-gray-900')"
            @click="toggleView"
          >
            <Squares2X2Icon class="w-5 h-5" />
          </button>
          <button
            class="p-2"
            :class="isWideView
              ? (isDark ? 'text-white' : 'text-gray-900')
              : (isDark ? 'text-neutral-400 hover:text-white' : 'text-gray-400 hover:text-gray-900')"
            @click="toggleView"
          >
            <ViewColumnsIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FunnelIcon, Squares2X2Icon, ViewColumnsIcon } from '@heroicons/vue/24/outline'
import { useTheme } from '@/composables/useTheme'

const { isDark } = useTheme()

const props = defineProps({
  isWideView: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:isWideView'])

const toggleView = () => {
  emit('update:isWideView', !props.isWideView)
}
</script>