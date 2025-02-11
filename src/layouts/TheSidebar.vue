<template>
  <div
    class="fixed inset-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm z-50"
    :class="isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
  >
    <div
      class="absolute inset-y-0 left-0 w-[300px] bg-white dark:bg-zinc-950 transition-transform duration-300"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <!-- Шапка -->
      <div class="h-16 px-6 flex items-center justify-between">
        <LogoIcon class="h-5 w-auto fill-current text-black dark:text-white" />
        <button
          @click="$emit('close')"
          class="p-2 -m-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          <XMarkIcon class="w-5 h-5" />
        </button>
      </div>

      <!-- Основное меню -->
      <nav class="px-3 py-4">
        <div v-for="item in menuItems" :key="item.id" class="mb-1">
          <!-- Первый уровень -->
          <button
            v-if="item.submenu"
            @click="handleMenuClick(item.id)"
            class="w-full flex items-center justify-between px-3 py-2 rounded-md text-[13px] transition-colors"
            :class="[
              activeMenuId === item.id
                ? 'text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-900'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white',
            ]"
          >
            {{ item.name }}
            <ChevronRightIcon
              class="w-3.5 h-3.5 transition-transform duration-200"
              :class="activeMenuId === item.id ? 'rotate-90' : ''"
            />
          </button>
          <router-link
            v-else
            :to="item.path"
            class="block px-3 py-2 rounded-md text-[13px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            @click="$emit('close')"
          >
            {{ item.name }}
          </router-link>

          <!-- Подменю -->
          <div
            v-if="item.submenu"
            class="overflow-hidden transition-all duration-200"
            :class="activeMenuId === item.id ? 'mt-1 max-h-[500px]' : 'max-h-0'"
          >
            <div v-for="submenu in item.submenu" :key="submenu.id" class="pl-3">
              <button
                @click="handleSubmenuClick(submenu.id)"
                class="w-full flex items-center justify-between px-3 py-2 rounded-md text-[13px] transition-colors"
                :class="[
                  activeSubmenuId === submenu.id
                    ? 'text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-900'
                    : 'text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white',
                ]"
              >
                {{ submenu.name }}
                <ChevronRightIcon
                  class="w-3.5 h-3.5 transition-transform duration-200"
                  :class="activeSubmenuId === submenu.id ? 'rotate-90' : ''"
                />
              </button>

              <div
                class="overflow-hidden transition-all duration-200"
                :class="activeSubmenuId === submenu.id ? 'mt-1 max-h-[300px]' : 'max-h-0'"
              >
                <router-link
                  v-for="subitem in submenu.items"
                  :key="subitem.id"
                  :to="subitem.path"
                  class="block px-3 py-1.5 pl-6 rounded-md text-[12px] text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  @click="$emit('close')"
                >
                  {{ subitem.name }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <!-- Футер -->
      <div class="absolute bottom-0 left-0 right-0 p-4">
        <div class="flex items-center justify-between px-2">
          <button
            @click="toggleTheme"
            class="p-2 -m-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <component :is="isDark ? SunIcon : MoonIcon" class="w-4 h-4" />
          </button>
          <div class="flex gap-3">
            <a
              v-for="link in secondaryLinks"
              :key="link.id"
              href="#"
              class="text-[11px] text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { XMarkIcon, ChevronRightIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
import LogoIcon from './Logo.vue'
import { useTheme } from '../composables/useTheme'

const props = defineProps({
  isOpen: Boolean,
})

const emit = defineEmits(['close'])
const { isDark, toggleTheme } = useTheme()

// Состояния для меню
const activeMenuId = ref(null)
const activeSubmenuId = ref(null)

// Обработчики меню
const handleMenuClick = (itemId) => {
  console.log('Click menu id:', itemId)
  activeMenuId.value = activeMenuId.value === itemId ? null : itemId
  activeSubmenuId.value = null
}

const handleSubmenuClick = (submenuId) => {
  console.log('Click submenu id:', submenuId)
  activeSubmenuId.value = activeSubmenuId.value === submenuId ? null : submenuId
}

// Обработчик клавиши Escape
const handleEscape = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

// Добавляем и удаляем слушатель при монтировании/размонтировании
watch(
  () => props.isOpen,
  (newValue) => {
    if (newValue) {
      document.addEventListener('keydown', handleEscape)
    } else {
      document.removeEventListener('keydown', handleEscape)
      // Сбрасываем активные меню при закрытии сайдбара
      activeMenuId.value = null
      activeSubmenuId.value = null
    }
  },
)

// Структура меню
const menuItems = [
  {
    id: 'new',
    name: 'Новинки',
    path: '/new',
  },
  {
    id: 'women',
    name: 'Женщинам',
    path: '/women',
    submenu: [
      {
        id: 'women-clothes',
        name: 'Одежда',
        items: [
          { id: 'women-dresses', name: 'Платья', path: '/women/dresses' },
          { id: 'women-tshirts', name: 'Футболки', path: '/women/t-shirts' },
          { id: 'women-jeans', name: 'Джинсы', path: '/women/jeans' },
        ],
      },
      {
        id: 'women-shoes',
        name: 'Обувь',
        items: [
          { id: 'women-sneakers', name: 'Кроссовки', path: '/women/sneakers' },
          { id: 'women-boots', name: 'Ботинки', path: '/women/boots' },
        ],
      },
    ],
  },
  {
    id: 'men',
    name: 'Мужчинам',
    path: '/men',
    submenu: [
      {
        id: 'men-clothes',
        name: 'Одежда',
        items: [
          { id: 'men-tshirts', name: 'Футболки', path: '/men/t-shirts' },
          { id: 'men-jeans', name: 'Джинсы', path: '/men/jeans' },
        ],
      },
      {
        id: 'men-shoes',
        name: 'Обувь',
        items: [
          { id: 'men-sneakers', name: 'Кроссовки', path: '/men/sneakers' },
          { id: 'men-boots', name: 'Ботинки', path: '/men/boots' },
        ],
      },
    ],
  },
  {
    id: 'accessories',
    name: 'Аксессуары',
    path: '/accessories',
  },
  {
    id: 'sale',
    name: 'Sale',
    path: '/sale',
  },
]

// Дополнительные ссылки
const secondaryLinks = [
  { id: 'help', name: 'Помощь' },
  { id: 'about', name: 'О нас' },
  { id: 'contacts', name: 'Контакты' },
  { id: 'delivery', name: 'Доставка' },
]
</script>
