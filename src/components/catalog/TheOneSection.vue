<template>
  <section class="w-full flex flex-col" :class="isDark ? 'bg-neutral-900' : 'bg-white'">
    <!-- Баннер коллекции -->
    <div class="relative w-full h-[280px] sm:h-[380px] md:h-[480px]">
      <img
        src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2070"
        alt="Collection Banner"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Заголовок и описание коллекции -->
    <div class="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
      <h1
        class="text-2xl sm:text-3xl font-extralight mb-6 text-center tracking-wide"
        :class="isDark ? 'text-white' : 'text-black'"
      >
        Women's Spring Summer 2025 Pre-Collection
      </h1>
      <p
        class="text-center max-w-3xl mx-auto leading-relaxed text-sm sm:text-base font-light tracking-wide"
        :class="isDark ? 'text-neutral-400' : 'text-neutral-600'"
      >
        Drawing inspiration from a scholarly British wardrobe (formal and informal), juxtaposing
        sharp-shouldered wool tailoring with chunky, textural shearling and pale suede. Artful
        opulence reflected in polished gold accessories and shoes. Arrow jewellery and Besque
        Chelsea boots rendered in metallic leather. Classic outerwear made striking rich, sheeting
        slash-hemmed peacoats.
      </p>
    </div>
  </section>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme'

const { isDark } = useTheme()
</script>
