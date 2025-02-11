<template>
  <section class="w-full pt-16" :class="isDark ? 'bg-neutral-900' : 'bg-white'">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <!-- Первая карточка -->
      <div class="relative aspect-square">
        <img
          src="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg"
          alt="Fashion Collection"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 flex flex-col justify-end pb-16 bg-black/20">
          <div class="text-center text-white">
            <h2 class="text-2xl font-light mb-8">Новая коллекция</h2>
            <div class="flex gap-8 justify-center">
              <button class="group flex flex-col items-center">
                <span class="text-sm mb-2">Женщинам</span>
                <div
                  class="h-[1px] w-0 bg-white group-hover:w-full transition-all duration-300"
                ></div>
              </button>
              <button class="group flex flex-col items-center">
                <span class="text-sm mb-2">Мужчинам</span>
                <div
                  class="h-[1px] w-0 bg-white group-hover:w-full transition-all duration-300"
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Вторая карточка -->
      <div class="relative aspect-square">
        <img
          src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg"
          alt="Fashion Accessories"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 flex flex-col justify-end pb-16 bg-black/20">
          <div class="text-center text-white">
            <h2 class="text-2xl font-light mb-8">Аксессуары</h2>
            <div class="flex gap-8 justify-center">
              <button class="group flex flex-col items-center">
                <span class="text-sm mb-2">Смотреть все</span>
                <div
                  class="h-[1px] w-0 bg-white group-hover:w-full transition-all duration-300"
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme'

const { isDark } = useTheme()
</script>
