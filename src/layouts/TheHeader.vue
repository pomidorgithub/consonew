<template>
  <TheSidebar :is-open="isSidebarOpen" @close="closeSidebar" />
  <header class="fixed top-0 left-0 right-0 z-50">
    <div
      class="bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-zinc-100 dark:border-zinc-800 bg-glassmorphism"
    >
      <div class="max-w-[2000px] mx-auto">
        <!-- Основной хедер -->
        <div class="h-16 px-6 flex items-center justify-between relative">
          <!-- Левая часть -->
          <div class="flex items-center gap-6">
            <button
              class="p-4 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              @click="toggleSidebar"
            >
              <XMarkIcon v-if="isSidebarOpen" class="w-5 h-5" />
              <Bars3Icon v-else class="w-5 h-5" />
            </button>

            <nav class="hidden lg:flex items-center">
              <router-link
                v-for="item in menuItems.slice(0, 3)"
                :key="item.path"
                :to="item.path"
                class="px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              >
                {{ item.name }}
              </router-link>
            </nav>
          </div>

          <!-- Логотип по центру -->
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <LogoIcon
              class="h-5 w-auto fill-current text-zinc-900 dark:text-white transition-colors"
            />
          </div>

          <!-- Поле поиска -->
          <!-- Выпадающий поиск -->
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4"
          >
            <div
              v-if="isSearchActive"
              class="absolute top-full left-0 right-0 bg-white dark:bg-black border-t border-zinc-100 dark:border-zinc-800 shadow-xl"
            >
              <div class="max-w-[2000px] mx-auto">
                <div class="p-4">
                  <div
                    class="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg px-4 py-3"
                  >
                    <MagnifyingGlassIcon class="w-5 h-5 text-zinc-400" />
                    <input
                      ref="searchInput"
                      type="text"
                      placeholder="Поиск"
                      class="w-full bg-transparent text-sm focus:outline-none dark:text-white"
                    />
                    <button
                      class="text-zinc-400 hover:text-black dark:hover:text-white"
                      @click="closeSearch"
                    >
                      <XMarkIcon class="w-5 h-5" />
                    </button>
                  </div>
                  <div class="mt-4">
                    <div class="flex items-center gap-4">
                      <div class="flex flex-wrap gap-2">
                        <button
                          v-for="tag in [
                            'Новинки',
                            'Платья',
                            'Джинсы',
                            'Куртки',
                            'Обувь',
                            'Аксессуары',
                            'Спортивная одежда',
                          ]"
                          :key="tag"
                          class="px-3 py-1.5 text-sm text-zinc-600 dark:text-zinc-400 opacity-60 hover:opacity-100 transition-opacity"
                        >
                          #{{ tag }}
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- Результаты поиска -->
                  <div class="mt-6 grid grid-cols-4 gap-6">
                    <div class="col-span-3 divide-y divide-zinc-100 dark:divide-zinc-800">
                      <!-- Результаты -->
                    </div>
                    <div class="col-span-1 border-l border-zinc-100 dark:border-zinc-800 pl-6">
                      <!-- Категории -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>

          <!-- Правая часть -->
          <div class="flex items-center gap-2">
            <button
              v-if="!isSearchActive"
              class="hidden sm:flex items-center gap-2 px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              @click="openSearch"
            >
              <MagnifyingGlassIcon class="w-4 h-4" />
              <span>Поиск</span>
            </button>
            <!-- Остальные кнопки -->
            <div class="flex items-center">
              <div class="h-4 w-px bg-zinc-200 dark:bg-zinc-800 mx-2 hidden sm:block"></div>

              <button
                class="p-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <UserIcon class="w-5 h-5" />
              </button>

              <button
                class="p-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors relative"
              >
                <HeartIcon class="w-5 h-5" />
                <span class="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <button
                class="p-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors relative"
              >
                <ShoppingBagIcon class="w-5 h-5" />
                <span
                  v-if="cartCount > 0"
                  class="absolute -top-0.5 -right-0.5 min-w-[20px] h-5 px-1.5 bg-black dark:bg-white text-white dark:text-black text-xs font-medium rounded-full flex items-center justify-center"
                >
                  {{ cartCount }}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Мобильное меню -->
    <div v-if="isMobileMenuOpen" class="lg:hidden fixed inset-0 z-50 bg-white dark:bg-black">
      <div
        class="h-16 px-4 flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800"
      >
        <LogoIcon class="h-5 w-auto fill-current text-zinc-900 dark:text-white" />
        <button @click="isMobileMenuOpen = false" class="p-2 text-zinc-600 dark:text-zinc-400">
          <XMarkIcon class="w-5 h-5" />
        </button>
      </div>
      <nav class="px-4 py-8">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="block py-4 text-lg font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
          @click="isMobileMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  UserIcon,
  HeartIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import TheSidebar from './TheSidebar.vue'
import LogoIcon from './Logo.vue'
import { useSidebar } from '../composables/useSidebar'

const { isOpen: isSidebarOpen, toggle: toggleSidebar, close: closeSidebar } = useSidebar()
const cartCount = ref(2)
const isMobileMenuOpen = ref(false)
const isSearchActive = ref(false)
const searchInput = ref(null)

const openSearch = () => {
  isSearchActive.value = true
  setTimeout(() => {
    searchInput.value?.focus()
  }, 100)
}

const closeSearch = () => {
  isSearchActive.value = false
}

const menuItems = [
  { name: 'Новинки', path: '/new' },
  { name: 'Женщинам', path: '/women' },
  { name: 'Мужчинам', path: '/men' },
  { name: 'Аксессуары', path: '/accessories' },
  { name: 'Sale', path: '/sale' },
]
</script>
