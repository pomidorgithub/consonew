<template>
  <main class="min-h-screen">
    <!-- Секция с баннером и заголовком -->
    <TheOneSection />

    <!-- Фильтры и сортировка -->
    <TheFilters v-model:isWideView="isWideView" />

    <!-- Сетка товаров -->
    <TheProductGrid :is-wide-view="isWideView" />
    <!-- Третья секция -->
    <TheThreeSection />
    <!-- Четвертая секция -->
    <TheFourSection />
    <!-- Пагинация -->
    <ThePagination />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import TheOneSection from '../components/catalog/TheOneSection.vue'
import TheFilters from '../components/catalog/TheFilters.vue'
import TheProductGrid from '../components/catalog/TheProductGrid.vue'
import ThePagination from '../components/catalog/ThePagination.vue'
import TheThreeSection from '../components/catalog/TheThreeSection.vue'
import TheFourSection from '../components/catalog/TheFourSection.vue'

const isWideView = ref(false)
</script>
