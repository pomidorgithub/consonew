<template>
  <div class="relative w-6 h-6 flex items-center justify-center">
    <div class="flex flex-col gap-[6px]">
      <!-- Верхняя линия -->
      <div
        class="w-6 h-[1px] bg-current transform transition-all duration-300 origin-left"
        :class="{ 'rotate-[35deg] translate-x-[2px] translate-y-[1px] w-5': isOpen }"
      />
      <!-- Средняя линия -->
      <div
        class="w-4 h-[1px] bg-current transform transition-all duration-300"
        :class="{ 'opacity-0 translate-x-3': isOpen }"
      />
      <!-- Нижняя линия -->
      <div
        class="w-6 h-[1px] bg-current transform transition-all duration-300 origin-left"
        :class="{ '-rotate-[35deg] translate-x-[2px] -translate-y-[1px] w-5': isOpen }"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})
</script>
