<template>
  <!-- Features -->
  <section id="features" class="bg-accent py-11 lg:py-22">
    <div class="container-base">
      <h2 class="font-extrabold text-center text-display-32 lg:text-5xl leading-[150%] mb-6 md:mb-12 lg:mb-18">
        Какие функции есть в нашем боте?
      </h2>

      <div class="max-md:text-sm !leading-[150%] w-full max-w-168.5 mx-auto space-y-6">
        <div v-for="(feature, index) in features" :key="index"
          class="flex md:items-center justify-between gap-5 border-b border-gray pb-6"
          :class="{ 'opacity-65': feature.disabled }">
          <p>{{ feature.text }}</p>

          <!-- Icon -->
          <component :is="feature.icon" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CheckIcon from '../components/icons/CheckIcon.vue'
import ClockIcon from '../components/icons/ClockIcon.vue'

const features = [
  {
    text: 'Делиться с друзьями Вашими хотелками',
    icon: CheckIcon,
  },
  {
    text: 'Добавлять пользователей в избранное для быстрого доступа к их хотелкам',
    icon: CheckIcon,
  },
  {
    text: 'Бронировать хотелки друзей анонимно',
    icon: CheckIcon,
  },
  {
    text: 'Искать пользователя по номеру телефона или нику в Telegram прямо в боте',
    icon: CheckIcon,
  },
  {
    text: 'Получать напоминания о важных датах',
    icon: ClockIcon,
    disabled: true,
  },
  {
    text: 'Добавлять в календарь важные даты',
    icon: ClockIcon,
    disabled: true,
  },
  {
    text: 'Играть с друзьями или коллегами в «Тайного Санту»',
    icon: ClockIcon,
    disabled: true,
  },
  {
    text: 'Переносить свои хотелки из других сервисов в Хотелку-Бота',
    icon: ClockIcon,
    disabled: true,
  },
  {
    text: 'Создавать неограниченное количество виш-листов',
    icon: ClockIcon,
    disabled: true,
  },
]
</script>
