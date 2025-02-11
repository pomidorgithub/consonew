<template>
  <div class="bg-black dark:bg-white text-white dark:text-black">
    <div class="px-8 relative">
      <!-- Слайдер с промо-сообщениями -->
      <div class="overflow-hidden h-9">
        <TransitionGroup
          name="slide"
          tag="div"
          class="flex flex-col items-center justify-center h-full"
        >
          <p
            v-for="(message, index) in messages"
            :key="message"
            v-show="currentIndex === index"
            class="text-xs tracking-[0.2em] uppercase absolute w-full text-center"
          >
            {{ message }}
          </p>
        </TransitionGroup>
      </div>

      <!-- Кнопка закрытия -->
      <button
        v-if="closeable"
        @click="$emit('close')"
        class="absolute right-4 top-1/2 -translate-y-1/2 p-1 opacity-50 hover:opacity-100 transition-opacity"
      >
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  closeable: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['close'])

const messages = [
  'FREE SHIPPING WORLDWIDE',
  'NEW COLLECTION AVAILABLE',
  'GET 10% OFF YOUR FIRST ORDER',
]

const currentIndex = ref(0)
let interval

const rotateMessages = () => {
  currentIndex.value = (currentIndex.value + 1) % messages.length
}

onMounted(() => {
  interval = setInterval(rotateMessages, 3000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
