<template>
  <!-- Hero -->
  <section class="pt-8 lg:pt-14 pb-16 md:pb-20 lg:pb-27.5 relative overflow-hidden">
    <div class="container-base relative z-10">
      <!-- Title -->
      <div class="mb-4.5 md:mb-9 lg:mb-16.5">
        <h1 class="text-display-32 md:text-5xl lg:text-display-56/[150%] font-extrabold text-center mb-2 lg:mb-4">
          Создайте Wishlist в
          <span class="text-secondary">«Хотелка-бот»</span>
        </h1>

        <p class="w-full max-w-168.5 mx-auto md:text-xl lg:text-2xl leading-[140%] text-center">
          Telegram-бот, который помогает фиксировать, сортировать и исполнять желания — от мелочей до мечт 🌈
        </p>
      </div>

      <!-- Center image block -->
      <div class="relative max-w-73 md:max-w-108.25 w-full mx-auto mb-8 lg:mb-12">
        <!-- Left text -->
        <div
          class="absolute z-0 left-0 -translate-x-1/2 md:-translate-x-[70%] lg:-translate-x-[90%] text-[40px] md:text-6xl lg:text-[106px] text-[#F4FCFF]">
          <h2 class="uppercase font-black mb-11">МЕЧТАЙ</h2>
          <h2 class="uppercase font-black mb-11 -ml-10 lg:-ml-20">МЕЧТАЙ</h2>
          <h2 class="uppercase font-black mb-11">МЕЧТАЙ</h2>
        </div>

        <!-- Right text -->
        <div
          class="absolute z-0 right-0 translate-x-1/2 md:translate-x-[70%] lg:translate-x-[90%] text-[40px] md:text-6xl lg:text-[106px] text-[#F4FCFF]">
          <h2 class="uppercase font-black mb-11">МЕЧТАЙ</h2>
          <h2 class="uppercase font-black mb-11 ml-10 lg:ml-20">МЕЧТАЙ</h2>
          <h2 class="uppercase font-black mb-11">МЕЧТАЙ</h2>
        </div>

        <!-- Image -->
        <img :src="heroImage" alt="Hero image" class="max-h-66.75 md:max-h-99 mx-auto relative z-0" />
        <slot name="stars" />
      </div>

      <!-- CTA -->
      <a href="#contact" class="main-btn flex items-center justify-center max-w-43.75 mx-auto">
        Создать вишлист
      </a>
    </div>
  </section>
</template>

<script setup>
import heroImage from '../assets/images/hero-center__free.png'
</script>
