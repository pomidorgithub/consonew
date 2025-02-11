<template>
  <div class="min-h-screen flex flex-col">
    <!-- Хедер -->
    <TheHeader />

    <!-- Основной контент -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Футер -->
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from './TheHeader.vue'
import TheFooter from './TheFooter.vue'
</script>

<style scoped>
/* Дополнительные стили если нужны */
</style>
