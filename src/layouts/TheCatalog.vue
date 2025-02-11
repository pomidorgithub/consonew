<template>
  <main class="min-h-screen">
    <!-- Секция с баннером и заголовком -->
    <TheOneSection />

    <div>
      <TheFilters v-model:viewMode="currentViewMode" />
      <TheProductGrid :view-mode="currentViewMode" />
    </div>
    <!-- Третья секция -->
    <TheThreeSection />
    <!-- Четвертая секция -->
    <TheFourSection :view-mode="currentViewMode" /> <!-- Добавляем проп -->
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

const currentViewMode = ref('three') // Изменили начальное значение с

</script>
