<template>
  <!-- Why us -->
  <section id="why-us" class="pt-12 lg:pt-26">
    <div class="container-base">
      <!-- Title -->
      <div class="w-full max-w-162.5 mx-auto text-center mb-10 lg:mb-14.5">
        <h2 class="font-extrabold text-display-32 lg:text-5xl leading-[150%] mb-2 lg:mb-4">
          Почему мы?
        </h2>

        <p class="md:text-xl lg:text-2xl leading-[150%] lg:px-10">
          Мы не волшебники, но все это время делаем вид, что ими работаем ✨
        </p>
      </div>

      <!-- Cards -->
      <div class="max-lg:max-w-150 mx-auto grid lg:grid-cols-3 gap-6 mb-7.5 md:mb-14 lg:mb-24">
        <div v-for="(item, index) in stats" :key="index" class="text-center">
          <h3 class="text-secondary text-display-32 lg:text-5xl leading-[150%] font-black">
            {{ item.value }}
          </h3>

          <p class="lg:text-lg font-medium mb-4">
            {{ item.title }}
          </p>

          <div class="bg-accent rounded-xl py-3 px-4">
            <img src="../assets/images/ayes.png" alt="eyes" class="size-6 mx-auto mb-1" />

            <p class="max-md:text-sm leading-[150%]" :class="{ 'lg:px-5': item.compact }">
              {{ item.note }}
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom image -->
      <img src="../assets/images/gift.png" alt="gift img" class="w-full max-w-76 mx-auto" />
    </div>
  </section>
</template>

<script setup>
const stats = [
  {
    value: '280 000 +',
    title: 'пользователей выбрали Хотелка-Бот',
    note: 'И только 1 не сбылась — у админа до сих пор нет дома:(',
  },
  {
    value: '500 000 +',
    title: 'добавленных хотелок',
    note: 'И только 1 не сбылась — у админа до сих пор нет дома:(',
  },
  {
    value: '4 года +',
    title: 'непрерывной работы сервиса',
    note: 'Это дольше, чем учатся в бакалавриате',
    compact: true,
  },
]
</script>
