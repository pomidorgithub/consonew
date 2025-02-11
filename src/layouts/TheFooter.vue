<template>
  <footer class="w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 pt-24">
    <div class="container mx-auto px-6 xl:px-8 2xl:px-12">
      <!-- Декоративный элемент -->
      <div class="w-20 h-1 bg-gray-800 dark:bg-gray-200 mb-16 rounded-full"></div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- Каталог -->
        <div class="space-y-6">
          <h3 class="font-medium uppercase text-sm tracking-wide text-gray-900 dark:text-gray-100">
            Каталог
          </h3>
          <ul class="space-y-4">
            <li v-for="item in catalog" :key="item.name">
              <router-link
                :to="item.path"
                class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm transition-all duration-200 inline-block hover:translate-x-1"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Покупателям -->
        <div class="space-y-6">
          <h3 class="font-medium uppercase text-sm tracking-wide text-gray-900 dark:text-gray-100">
            Покупателям
          </h3>
          <ul class="space-y-4">
            <li v-for="item in customerInfo" :key="item.name">
              <router-link
                :to="item.path"
                class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm transition-all duration-200 inline-block hover:translate-x-1"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Информация -->
        <div class="space-y-6">
          <h3 class="font-medium uppercase text-sm tracking-wide text-gray-900 dark:text-gray-100">
            Информация
          </h3>
          <ul class="space-y-4">
            <li>
              <router-link
                to="/brand"
                class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm transition-all duration-200 inline-block hover:translate-x-1"
              >
                Бренд CONSO
              </router-link>
            </li>
            <li>
              <router-link
                to="/contacts"
                class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm transition-all duration-200 inline-block hover:translate-x-1"
              >
                Контакты
              </router-link>
            </li>
            <li>
              <router-link
                to="/vacancies"
                class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm transition-all duration-200 inline-block hover:translate-x-1"
              >
                Вакансии
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Подписка и контакты -->
        <div class="space-y-8">
          <div class="space-y-6">
            <h3 class="font-medium uppercase text-sm tracking-wide text-gray-900 dark:text-gray-100">
              Подпишитесь на новостную рассылку
            </h3>
            <form class="space-y-3">
              <div class="flex gap-2">
                <input
                  type="email"
                  placeholder="Введите email"
                  class="flex-grow px-4 py-3 border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-transparent transition-all duration-200 rounded-lg"
                />
                <button
                  type="submit"
                  class="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-100 dark:hover:bg-white dark:text-gray-900 text-sm transition-all duration-200 rounded-lg hover:shadow-lg hover:shadow-gray-500/20"
                >
                  →
                </button>
              </div>
              <p class="text-xs text-gray-500">
                Подписываясь на рассылку вы соглашаетесь с условиями
                <router-link
                  to="/privacy"
                  class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 underline"
                >
                  Политики конфиденциальности
                </router-link>
              </p>
            </form>
          </div>

          <!-- Соц сети -->
          <div class="space-y-6">
            <h3 class="font-medium uppercase text-sm tracking-wide text-gray-900 dark:text-gray-100">
              Мы в соцсетях
            </h3>
            <div class="flex gap-6">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.url"
                :title="social.name"
                class="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:scale-110"
              >
                <component :is="social.icon" class="w-5 h-5" />
              </a>
            </div>
          </div>

          <!-- Время работы и телефон -->
          <div
            class="space-y-2 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <p class="text-sm text-gray-500">Время работы ежедневно с 9:00 до 21:00</p>
            <a
              href="tel:88003012470"
              class="text-2xl font-medium text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200 inline-block"
            >
              8 800 301 24 70
            </a>
            <p class="text-sm text-gray-500">Звонок бесплатный</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Нижняя часть -->
    <div class="border-t border-gray-200 dark:border-gray-800 mt-20 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div class="container mx-auto px-6 xl:px-8 2xl:px-12 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="text-sm text-gray-500">
            © {{ new Date().getFullYear() }} CONSO Все права защищены
          </div>
          <div class="flex gap-8">
            <router-link
              v-for="link in legalLinks"
              :key="link.name"
              :to="link.path"
              class="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              {{ link.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const catalog = ref([
  { name: 'Новинки', path: '/new' },
  { name: 'Верхняя одежда', path: '/outerwear' },
  { name: 'Шубы', path: '/fur-coats' },
  { name: 'Пуховики', path: '/down-jackets' },
  { name: 'Аксессуары', path: '/accessories' }
])

const customerInfo = ref([
  { name: 'Доставка', path: '/delivery' },
  { name: 'Оплата', path: '/payment' },
  { name: 'Возврат', path: '/return' },
  { name: 'Размерная сетка', path: '/size-guide' },
  { name: 'Программа лояльности', path: '/loyalty' }
])

const socials = ref([
  { name: 'VKontakte', url: 'https://vk.com/conso', icon: 'VkIcon' },
  { name: 'Telegram', url: 'https://t.me/conso', icon: 'TelegramIcon' },
  { name: 'WhatsApp', url: 'https://wa.me/88003012470', icon: 'WhatsAppIcon' }
])

const legalLinks = ref([
  { name: 'Политика конфиденциальности', path: '/privacy' },
  { name: 'Условия использования', path: '/terms' },
  { name: 'Оферта', path: '/offer' }
])
</script>
