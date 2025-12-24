<template>
  <section class="container-base py-8">
    <h1 class="font-extrabold text-display-32 lg:text-5xl mb-6">F.A.Q.</h1>
    <Accordion :items="faqs" />
  </section>
</template>

<script>
import Accordion from '../components/Accordion.vue'

export default {
  name: 'FaqPage',
  components: { Accordion },
  data() {
    return {
      faqs: [
        { question: 'Зачем вообще нужен Хотелка Бот?', answer: 'Пишешь @ho4ubot, добавляешь хотелки — и наслаждаешься ощущением, что жизнь под контролем' },
        { question: 'А как им пользоваться?', answer: 'Пишешь @ho4ubot, добавляешь хотелки — и наслаждаешься ощущением, что жизнь под контролем' },
        { question: 'Мои друзья увидят список?', answer: 'Пишешь @ho4ubot, добавляешь хотелки — и наслаждаешься ощущением, что жизнь под контролем' },
        { question: 'Можно добавить ссылку из магазина?', answer: 'Пишешь @ho4ubot, добавляешь хотелки — и наслаждаешься ощущением, что жизнь под контролем' },
        { question: 'А если подарок уже купили?', answer: 'Пишешь @ho4ubot, добавляешь хотелки — и наслаждаешься ощущением, что жизнь под контролом' },
        { question: 'Это бесплатно?', answer: 'Пишешь @ho4ubot, добавляешь хотелки — и наслаждаешься ощущением, что жизнь под контролом' },
      ],
    }
  },
}
</script>
