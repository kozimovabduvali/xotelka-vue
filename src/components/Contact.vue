<template>
  <!-- Contact -->
  <section id="contact" class="bg-accent max-xl:pt-11 xl:py-22 relative">
    <div class="container-base relative z-10">
      <div class="text-center w-full max-w-180 mx-auto mb-11 lg:mb-18.5">
        <h2 class="font-extrabold text-display-32 lg:text-5xl leading-[150%] mb-2 lg:mb-4 lg:px-5">
          Ну все, хватит читать! <br>
          Пора хотеть!
        </h2>

        <p class="md:text-xl lg:text-2xl">
          Добавь свою первую хотелку - пусть кто-нибудь наконец угадает
        </p>
      </div>

      <form @submit.prevent="submitForm" class="w-full max-w-125 mx-auto">
        <div class="space-y-4 mb-8">
          <input v-model="title" type="text"
            class="w-full bg-white border border-transparent rounded-lg px-6 py-4 outline-none focus:border-secondary"
            placeholder="Название">
          <input v-model="link" type="text"
            class="w-full bg-white border border-transparent rounded-lg px-6 py-4 outline-none focus:border-secondary"
            placeholder="Ссылка">
          <textarea v-model="note"
            class="w-full bg-white border border-transparent rounded-lg px-6 py-4 outline-none focus:border-secondary min-h-40"
            placeholder="Твоя заметка"></textarea>
        </div>

        <button type="submit" class="main-btn w-full">
          Добавить хотелку
        </button>
      </form>
    </div>

    <img src="../assets/icons/contact-star.svg" alt="icon"
      class="absolute xl:right-0 xl:-translate-x-full xl:translate-y-full xl:top-0 max-lg:left-0 max-xl:left-[17%] translate-x-1/4 md:translate-x-full bottom-0 -translate-y-1/2 z-0">

    <div class="relative xl:absolute bottom-0 z-0 xl:left-[5%] max-xl:max-w-125 max-xl:mx-auto max-xl:w-full px-4">
      <div class="relative min-h-32.5 py-6 xl:py-8 px-7.5 translate-y-15">
        <p class="max-xl:text-center lg:text-xl leading-[150%] relative z-10">
          Псс... Никто не узнает, если ты добавишь сразу 10 :)
        </p>
        <img src="../assets/images/chat.png" alt="img" class="size-full absolute top-0 left-0">
      </div>
      <img src="../assets/images/gift-contact.png" alt="Img" class="max-w-120 w-full object-contain">
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Form 
const title = ref('')
const link = ref('')
const note = ref('')

// Form submit 
function submitForm() {
  if (!title.value && !link.value && !note.value) return
  console.log('Новая хотелка:', { title: title.value, link: link.value, note: note.value })

  // Clear inputs
  title.value = ''
  link.value = ''
  note.value = ''
}
</script>
