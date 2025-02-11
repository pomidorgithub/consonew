<template>
  <footer class="w-full" :class="isDark ? 'bg-neutral-900' : 'bg-white'">
    <!-- Верхняя секция с градиентом -->
    <div
      class="relative overflow-hidden"
      :class="
        isDark
          ? 'bg-gradient-to-b from-neutral-800 to-neutral-900'
          : 'bg-gradient-to-b from-neutral-50 to-white'
      "
    >
      <div class="container mx-auto px-4 py-32">
        <!-- Декоративные элементы -->
        <div class="absolute inset-0 opacity-10">
          <div
            class="absolute top-0 left-1/4 w-64 h-64 rounded-full"
            :class="isDark ? 'bg-blue-500' : 'bg-indigo-500'"
          ></div>
          <div
            class="absolute bottom-0 right-1/4 w-96 h-96 rounded-full"
            :class="isDark ? 'bg-purple-500' : 'bg-pink-500'"
          ></div>
        </div>

        <div class="relative max-w-4xl mx-auto">
          <div class="text-center space-y-8">
            <h2
              class="text-4xl md:text-5xl font-light leading-tight"
              :class="isDark ? 'text-white' : 'text-black'"
            >
              Создаем моду вместе<br />с вами
            </h2>
            <p
              class="text-lg max-w-2xl mx-auto"
              :class="isDark ? 'text-neutral-400' : 'text-neutral-600'"
            >
              Присоединяйтесь к нашему сообществу и будьте в курсе последних трендов
            </p>
            <!-- Форма подписки -->
            <div class="max-w-md mx-auto">
              <div class="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Ваш email"
                  class="flex-1 px-6 py-4 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all duration-200"
                  :class="
                    isDark
                      ? 'bg-neutral-800 text-white placeholder:text-neutral-500 focus:ring-neutral-700'
                      : 'bg-white text-black placeholder:text-neutral-400 focus:ring-neutral-200 shadow-lg'
                  "
                />
                <button
                  class="px-8 py-4 rounded-xl text-sm font-medium transition-all duration-200"
                  :class="
                    isDark
                      ? 'bg-white text-black hover:bg-neutral-200'
                      : 'bg-black text-white hover:bg-neutral-800'
                  "
                >
                  Подписаться
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Основная секция -->
    <div class="container mx-auto px-4 py-20">
      <div class="grid grid-cols-2 md:grid-cols-6 gap-12">
        <!-- Логотип и соц.сети -->
        <div class="col-span-2">
          <div class="space-y-6">
            <h3 class="text-2xl font-light" :class="isDark ? 'text-white' : 'text-black'">
              Consonew
            </h3>
            <div class="flex gap-6">
              <a
                v-for="icon in socialIcons"
                :key="icon.name"
                href="#"
                class="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                :class="
                  isDark
                    ? 'bg-neutral-800 hover:bg-neutral-700'
                    : 'bg-neutral-100 hover:bg-neutral-200'
                "
              >
                <component
                  :is="icon.component"
                  class="w-5 h-5"
                  :class="isDark ? 'text-white' : 'text-black'"
                />
              </a>
            </div>
          </div>
        </div>

        <!-- Навигационные ссылки -->
        <div v-for="(section, i) in footerLinks" :key="i" class="space-y-4">
          <h4
            class="text-xs font-medium uppercase tracking-wider"
            :class="isDark ? 'text-neutral-500' : 'text-neutral-400'"
          >
            {{ section.title }}
          </h4>
          <ul class="space-y-3">
            <li v-for="(link, j) in section.links" :key="j">
              <a
                href="#"
                class="text-sm transition-colors duration-200"
                :class="
                  isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'
                "
              >
                {{ link }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Нижняя секция -->
    <div class="border-t" :class="isDark ? 'border-neutral-800' : 'border-neutral-100'">
      <div class="container mx-auto px-4">
        <div class="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-xs" :class="isDark ? 'text-neutral-500' : 'text-neutral-400'">
            © {{ new Date().getFullYear() }} Conso Все права защищены
          </p>
          <div
            class="flex items-center divide-x"
            :class="isDark ? 'divide-neutral-800' : 'divide-neutral-200'"
          >
            <a
              v-for="(link, index) in ['Политика конфиденциальности', 'Условия использования']"
              :key="index"
              href="#"
              class="text-xs px-4 transition-colors duration-200"
              :class="
                isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'
              "
            >
              {{ link }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const isDark = ref(false)

const socialIcons = [
  {
    name: 'instagram',
    component: 'InstagramIcon',
  },
  {
    name: 'facebook',
    component: 'FacebookIcon',
  },
  {
    name: 'twitter',
    component: 'TwitterIcon',
  },
]

const footerLinks = [
  {
    title: 'Компания',
    links: ['О нас', 'Карьера', 'Новости', 'Магазины'],
  },
  {
    title: 'Помощь',
    links: ['Доставка', 'Возврат', 'FAQ', 'Контакты'],
  },
  {
    title: 'Услуги',
    links: ['Подарочные карты', 'Программа лояльности', 'Персональный стилист'],
  },
  {
    title: 'Правовое',
    links: ['Условия', 'Конфиденциальность', 'Cookies'],
  },
]
</script>
