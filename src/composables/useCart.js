// src/composables/useCart.js
import { ref, computed } from 'vue'

const cartItems = ref([])

export function useCart() {
  const addToCart = (item) => {
    cartItems.value.push(item)
  }

  const removeFromCart = (itemId) => {
    const index = cartItems.value.findIndex((item) => item.id === itemId)
    if (index > -1) {
      cartItems.value.splice(index, 1)
    }
  }

  const cartItemsCount = computed(() => cartItems.value.length)

  return {
    cartItems,
    cartItemsCount,
    addToCart,
    removeFromCart,
  }
}
