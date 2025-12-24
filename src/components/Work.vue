<template>
  <section id="work" class="bg-accent py-11 lg:py-22">
    <div class="container-base">
      <!-- Title & Subtitle -->
      <div class="w-full max-w-212.5 mx-auto text-center mb-10 md:mb-14.5 lg:26">
        <h2 class="font-extrabold text-display-32 lg:text-5xl leading-[150%] mb-2 lg:mb-4">
          Как это работает?
        </h2>
        <p class="md:text-xl lg:text-2xl leading-[150%] lg:px-10">
          3 шага — и твои друзья больше не спросят «А что тебе подарить?»
        </p>
      </div>

      <!-- Steps -->
      <div
        class="relative flex max-lg:flex-col max-lg:items-center justify-between gap-4 !leading-[150%] text-center mb-15 lg:mb-11">
        <div v-for="(step, index) in steps" :key="index" class="w-55 shrink-0 flex flex-col items-center">
          <div class="size-17.5 bg-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
            <component :is="step.iconNumber" />
          </div>

          <div class="flex flex-col items-center">
            <component :is="step.iconComponent" />
            <p class="mt-2 max-w-52.5 mx-auto" v-html="step.text"></p>
          </div>
        </div>
      </div>

      <!-- Button -->
      <a href="#" class="main-btn max-w-38 flex items-center mx-auto">
        Написать боту
      </a>
    </div>
  </section>
</template>
  
<script setup>
import { reactive, markRaw } from 'vue'

// Icon 
import Step1IconNumber from '../components/icons/Step1IconNumber.vue'
import Step2IconNumber from '../components/icons/Step2IconNumber.vue'
import Step3IconNumber from '../components/icons/Step3IconNumber.vue'

import Step1Icon from '../components/icons/Step1Icon.vue'
import Step2Icon from '../components/icons/Step2Icon.vue'
import Step3Icon from '../components/icons/Step3Icon.vue'

// Steps array reactive — mark imported component objects as raw to avoid reactivity
const steps = reactive([
  {
    iconNumber: markRaw(Step1IconNumber),
    iconComponent: markRaw(Step1Icon),
    text: 'Напиши <span class="font-bold text-secondary">@ho4ubot</span> в Telegram'
  },
  {
    iconNumber: markRaw(Step2IconNumber),
    iconComponent: markRaw(Step2Icon),
    text: "Добавь пару хотелок"
  },
  {
    iconNumber: markRaw(Step3IconNumber),
    iconComponent: markRaw(Step3Icon),
    text: "Отправь ссылку друзьям и жди чуда"
  }
])
</script>
