<template>
  <section class="w-full pt-8" :class="isDark ? 'bg-neutral-900' : 'bg-white'">
    <div class="w-full">
      <div
        :class="[
          'grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-8',
          isWideView ? 'lg:grid-cols-5' : 'lg:grid-cols-3',
        ]"
      >
        <!-- Текстовая карточка -->
        <TheTextCard
          title="Осенняя коллекция"
          description="Элегантность в каждой детали. Откройте для себя новое прочтение классики в нашей осенней коллекции."
        />

        <!-- Карточки товаров -->
        <div v-for="(product, index) in products" :key="index" class="group">
          <div class="aspect-[3/4] overflow-hidden mb-4">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div class="space-y-1.5 pl-2">
            <h3
              class="text-sm font-light tracking-wide"
              :class="isDark ? 'text-white' : 'text-black'"
            >
              {{ product.name }}
            </h3>
            <p
              class="text-sm tracking-wider"
              :class="isDark ? 'text-neutral-400' : 'text-gray-900'"
            >
              {{ product.price }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme'
import TheTextCard from './TheTextCard.vue'

const { isDark } = useTheme()

defineProps({
  isWideView: {
    type: Boolean,
    default: false,
  },
})

const products = [
  {
    name: 'Вечернее платье',
    price: '189 000 ₽',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956'
  },
  {
    name: 'Кожаная куртка',
    price: '245 000 ₽',
    image: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd'
  },
  {
    name: 'Брючный костюм',
    price: '198 000 ₽',
    image: 'https://images.unsplash.com/photo-1549062572-544a64fb0c56'
  },
  {
    name: 'Блейзер',
    price: '175 000 ₽',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8'
  },
  {
    name: 'Пальто',
    price: '285 000 ₽',
    image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543'
  }
]
</script>