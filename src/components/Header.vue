<template>
  <!-- Header -->
  <header class="py-4.75 lg:py-8">
    <nav class="container-base relative z-40 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-2 shrink-0">
        <svg class="shrink-0 size-4.5 lg:size-8" viewBox="0 0 32 30" fill="none">
          <!-- SVG ichini qisqartirdim, sen o‘zingnikini qo‘y -->
        </svg>

        <p class="font-bold text-[15px] lg:text-[26px]">Хотелка</p>

        <div
          class="bg-secondary text-white text-[9px] lg:text-sm flex items-center justify-center rounded-[10px] w-5 lg:w-9 h-3.75 lg:h-6.25">
          Бот
        </div>
      </a>

      <!-- Desktop links -->
      <div class="max-lg:hidden flex items-center gap-6">
        <a href="#features">Возможности</a>
        <a href="#why-us">Преимущества</a>
        <a href="#work">Принцип работы</a>
        <a href="#hotelkins">Философия</a>
        <a href="#faq">FAQ</a>
      </div>

      <a href="#contact" class="max-lg:hidden main-btn">
        Создать вишлист
      </a>

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
            <a href="#features" @click="closeMenu">Возможности</a>
            <a href="#why-us" @click="closeMenu">Преимущества</a>
            <a href="#work" @click="closeMenu">Принцип работы</a>
            <a href="#hotelkins" @click="closeMenu">Философия</a>
            <a href="#faq" @click="closeMenu">FAQ</a>
          </div>

          <a href="#contact" class="main-btn flex items-center justify-center w-full" @click="closeMenu">
            Создать вишлист
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'

// menu state
const isMenuOpen = ref(false)

// toggle
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// close
const closeMenu = () => {
  isMenuOpen.value = false
}

// body scroll lock
watch(isMenuOpen, (open) => {
  document.body.classList.toggle('overflow-hidden', open)
})
</script>
