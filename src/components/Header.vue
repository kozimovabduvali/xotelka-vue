<template>
  <!-- Header -->
  <header class="py-4.75 lg:py-8">
    <nav class="container-base relative z-40 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2 shrink-0">
        <svg class="shrink-0 size-4.5 lg:size-8" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_299_22)">
            <path
              d="M17.8533 16.9519V29.6466H28.7413C29.2854 29.6484 29.7284 29.2089 29.7247 28.667V16.952L17.8533 16.9519Z"
              fill="#4EB8E7" />
            <path
              d="M2.2815 16.9538V28.6688C2.27966 29.2052 2.71165 29.6429 3.25025 29.6483H14.1491V16.9537L2.2815 16.9538Z"
              fill="#4EB8E7" />
            <path
              d="M6.19851 0.351556C4.04411 0.351556 2.27757 2.1112 2.27757 4.25718C2.27757 4.96579 2.47059 5.63231 2.80515 6.20728H1.29597H1.29781C1.03678 6.20544 0.784961 6.30798 0.601102 6.49292C0.415441 6.67602 0.3125 6.92688 0.3125 7.1869V14.0185C0.3125 14.2785 0.415441 14.5293 0.601102 14.7124C0.784923 14.8974 1.03676 14.9999 1.29781 14.9999H14.1491V6.20711H6.25593H6.25776C6.23754 6.20528 6.21732 6.20345 6.1971 6.20345C5.10336 6.20345 4.22835 5.34835 4.22835 4.25889C4.22835 3.16942 5.10152 2.31249 6.1971 2.31249C10.3717 2.31249 12.9195 4.63609 14.1712 6.20715H17.8238C19.0738 4.63609 21.6197 2.31249 25.7927 2.31249C26.8865 2.31249 27.7615 3.16759 27.7615 4.25889C27.7615 5.34835 26.8883 6.20345 25.7927 6.20345H25.7946C25.7872 6.20345 25.7799 6.20528 25.7725 6.20711H17.8534V14.9999H30.708H30.7227C31.2613 14.9926 31.6933 14.555 31.6915 14.0185V7.18689C31.6933 6.92688 31.5904 6.67788 31.4047 6.49291C31.2209 6.3098 30.9691 6.20543 30.708 6.20727H29.1915C29.526 5.6323 29.719 4.96583 29.719 4.25717C29.719 2.11119 27.947 0.351547 25.7944 0.351547C20.5629 0.351547 17.4104 3.52475 15.9987 5.40139C14.5869 3.52456 11.4307 0.351547 6.19912 0.351547L6.19851 0.351556Z"
              fill="#4EB8E7" />
          </g>
          <defs>
            <clipPath id="clip0_299_22">
              <rect width="32" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p class="font-bold text-[15px] lg:text-[26px]">Хотелка</p>

        <div
          class="bg-secondary text-white text-[9px] lg:text-sm flex items-center justify-center rounded-[10px] w-5 lg:w-9 h-3.75 lg:h-6.25">
          Бот
        </div>
      </RouterLink>

      <!-- Desktop links (navigate to sections on the Home page) -->
      <div class="max-lg:hidden flex items-center gap-6">
        <a href="#" @click.prevent="navigateTo('#features')">Возможности</a>
        <a href="#" @click.prevent="navigateTo('#why-us')">Преимущества</a>
        <a href="#" @click.prevent="navigateTo('#work')">Принцип работы</a>
        <a href="#" @click.prevent="navigateTo('#hotelkins')">Философия</a>
        <a href="#" @click.prevent="navigateTo('#faq')">FAQ</a>
      </div>

      <button @click.prevent="navigateTo('#contact')" class="max-lg:hidden main-btn">
        Создать вишлист
      </button>

      <!-- Mobile menu button -->
      <button class="lg:hidden relative z-50" @click="toggleMenu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <!-- CLOSE ICON -->
          <template v-if="isMenuOpen">
            <path d="M6 6L18 18" stroke="#323232" stroke-width="1.5" stroke-linecap="round" />
            <path d="M18 6L6 18" stroke="#323232" stroke-width="1.5" stroke-linecap="round" />
          </template>

          <!-- BURGER ICON -->
          <template v-else>
            <path d="M4.5 8H19.5" stroke="#323232" stroke-width="1.5" stroke-linecap="round" />
            <path d="M4.5 12H19.5" stroke="#323232" stroke-width="1.5" stroke-linecap="round" />
            <path d="M4.5 16H19.5" stroke="#323232" stroke-width="1.5" stroke-linecap="round" />
          </template>
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <div class="fixed top-0 left-0 z-30 lg:hidden size-full pt-14 transition duration-300"
      :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'">
      <div class="bg-white size-full px-4 pt-24.5">
        <div class="max-w-87 mx-auto flex flex-col">
          <div class="text-2xl flex flex-col items-center gap-6 mb-34">
            <button class="link-button" @click.prevent="navigateTo('#features')">Возможности</button>
            <button class="link-button" @click.prevent="navigateTo('#why-us')">Преимущества</button>
            <button class="link-button" @click.prevent="navigateTo('#work')">Принцип работы</button>
            <button class="link-button" @click.prevent="navigateTo('#hotelkins')">Философия</button>
            <button class="link-button" @click.prevent="navigateTo('#faq')">FAQ</button>
          </div>

          <button class="main-btn flex items-center justify-center w-full" @click.prevent="navigateTo('#contact')">
            Создать вишлист
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

// menu state
const isMenuOpen = ref(false)
const router = useRouter()

// toggle
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// close
const closeMenu = () => {
  isMenuOpen.value = false
}

function navigateTo(hash) {
  // navigate to home with hash; scrollBehavior handles the scrolling
  router.push({ path: '/', hash }).finally(() => closeMenu())
}

// body scroll lock
watch(isMenuOpen, (open) => {
  document.body.classList.toggle('overflow-hidden', open)
})
</script>
