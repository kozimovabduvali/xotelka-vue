<template>
  <section id="faq" class="mb-11 lg:mb-20.5">
    <div class="container-base">
      <h2 class="font-extrabold text-center text-display-32 lg:text-5xl leading-[150%] mb-11 lg:mb-18">
        F.A.Q.
      </h2>

      <div class="space-y-2">
        <div v-for="(faq, index) in faqs" :key="index" :class="[
          'rounded-2xl transition-colors duration-300',
          faq.open ? 'bg-accent' : 'bg-transparent'
        ]">
          <button @click="toggleFaq(index)"
            class="text-left accordion-btn font-bold lg:text-xl leading-[150%] w-full flex items-center justify-between gap-5 p-6 lg:p-8">
            <span>{{ faq.question }}</span>
            <component :is="faq.open ? MinusIcon : PlusIcon" class="shrink-0 w-8 h-8" />
          </button>

          <div v-show="faq.open" class="accourdion-content pt-2 lg:pt-4 px-6 lg:px-8 pb-6 lg:pb-8">
            <p class="leading-[150%]">{{ faq.answer }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import PlusIcon from '../components/icons/PlusIcon.vue'
import MinusIcon from '../components/icons/MinusIcon.vue'

const faqs = reactive([
  { question: 'Зачем вообще нужен Хотелка Бот?', answer: 'Пишешь @ho4ubot, добавляешь хотелки — и наслаждаешься ощущением, что жизнь под контролем', open: false },
  { question: 'А как им пользоваться?', answer: 'Пишешь @ho4ubot, добавляешь хотелки — и наслаждаешься ощущением, что жизнь под контролем', open: false },
  { question: 'Мои друзья увидят список?', answer: 'Пишешь @ho4ubot, добавляешь хотелки — и наслаждаешься ощущением, что жизнь под контролем', open: false },
  { question: 'Можно добавить ссылку из магазина?', answer: 'Пишешь @ho4ubot, добавляешь хотелки — и наслаждаешься ощущением, что жизнь под контролем', open: false },
  { question: 'А если подарок уже купили?', answer: 'Пишешь @ho4ubot, добавляешь хотелки — и наслаждаешься ощущением, что жизнь под контролем', open: false },
  { question: 'Это бесплатно?', answer: 'Пишешь @ho4ubot, добавляешь хотелки — и наслаждаешься ощущением, что жизнь под контролем', open: false },
  { question: 'У меня миллион хотелок - это нормально?', answer: 'Пишешь @ho4ubot, добавляешь хотелки — и наслаждаешься ощущением, что жизнь под контролем', open: false },
  { question: 'А кто вы вообще такие?', answer: 'Пишешь @ho4ubot, добавляешь хотелки — и наслаждаешься ощущением, что жизнь под контролем', open: false },
  { question: 'Что если мой парень увидит мой вишлист?', answer: 'Пишешь @ho4ubot, добавляешь хотелки — и наслаждаешься ощущением, что жизнь под контролем', open: false },
])

function toggleFaq(index) {
  faqs.forEach((faq, i) => {
    faq.open = i === index ? !faq.open : false
  })
}
</script>
