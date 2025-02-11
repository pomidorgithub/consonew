<template>
  <section class="w-full pt-8" :class="isDark ? 'bg-neutral-900' : 'bg-white'">
    <div class="w-full">
      <div :class="['grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-8', gridColumns]">
        <div v-for="(product, index) in products" :key="index" class="group">
          <div class="aspect-[3/4] overflow-hidden mb-4 relative">
            <swiper
              :modules="[Navigation, Pagination]"
              :slides-per-view="1"
              :pagination="false"
              :navigation="true"
              class="h-full relative"
              @slideChange="(swiper) => onSlideChange(swiper, index)"
            >
              <div
                class="swiper-custom-pagination absolute bottom-0 left-0 w-full h-[2px] bg-black/30"
              >
                <div
                  class="swiper-custom-pagination-progress h-full bg-black/80"
                  :style="{ width: progressWidths[index] + '%' }"
                ></div>
              </div>
              <swiper-slide v-for="(image, imageIndex) in product.images" :key="imageIndex">
                <img :src="image" :alt="product.name" class="w-full h-full object-cover" />
              </swiper-slide>
            </swiper>
          </div>
          <div class="space-y-2 pl-2">
            <h3 class="text-sm font-light" :class="isDark ? 'text-white' : 'text-black'">
              {{ product.name }}
            </h3>
            <p class="text-sm" :class="isDark ? 'text-neutral-400' : 'text-neutral-600'">
              {{ product.price }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTheme } from '@/composables/useTheme'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const { isDark } = useTheme()
const progressWidths = ref(Array(6).fill(0)) // массив для хранения прогресса каждой карточки

const onSlideChange = (swiper, productIndex) => {
  const progress = (swiper.activeIndex / (swiper.slides.length - 1)) * 100
  progressWidths.value[productIndex] = progress
}

const props = defineProps({
  viewMode: {
    type: String,
    default: 'three',
    validator: (value) => ['two', 'three', 'five'].includes(value),
  },
})

const gridColumns = computed(() => {
  switch (props.viewMode) {
    case 'two':
      return 'lg:grid-cols-2'
    case 'three':
      return 'lg:grid-cols-3'
    case 'five':
      return 'lg:grid-cols-5'
    default:
      return 'lg:grid-cols-3'
  }
})

const products = [
  {
    name: 'Шелковое платье',
    price: '165 000 ₽',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=60',
    ],
  },
  {
    name: 'Вечернее платье',
    price: '189 000 ₽',
    images: [
      'https://images.unsplash.com/photo-1539008835657-9e8e9680c956',
      'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=800&q=60',
    ],
  },
  {
    name: 'Кожаная куртка',
    price: '245 000 ₽',
    images: [
      'https://images.unsplash.com/photo-1550614000-4895a10e1bfd',
      'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=800&q=60',
    ],
  },
  {
    name: 'Брючный костюм',
    price: '198 000 ₽',
    images: [
      'https://images.unsplash.com/photo-1549062572-544a64fb0c56',
      'https://images.unsplash.com/photo-1549062572-544a64fb0c56?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549062572-544a64fb0c56?auto=format&fit=crop&w=800&q=60',
    ],
  },
  {
    name: 'Блейзер',
    price: '175 000 ₽',
    images: [
      'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8',
      'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=60',
    ],
  },
  {
    name: 'Пальто',
    price: '285 000 ₽',
    images: [
      'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543',
      'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=800&q=60',
    ],
  },
]
</script>

<style>
.swiper-custom-pagination {
  z-index: 10;
}

.swiper-custom-pagination-progress {
  transition: width 0.3s ease;
}

/* Стрелки навигации */
.swiper-button-next,
.swiper-button-prev {
  color: black !important;
  opacity: 0;
  transition: opacity 0.3s;
  width: 40px !important;
  height: 40px !important;
  display: none;
  top: 50% !important;
  transform: translateY(-50%) !important;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 16px !important;
  font-weight: bold;
}

.swiper-button-prev {
  left: 20px !important;
}

.swiper-button-next {
  right: 20px !important;
}

.group:hover .swiper-button-next,
.group:hover .swiper-button-prev {
  opacity: 1;
  display: flex;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  opacity: 0.9 !important;
}

/* Убираем стандартную пагинацию */
.swiper-pagination,
.swiper-pagination-progressbar,
.swiper-pagination-progressbar-fill {
  display: none !important;
}
</style>
