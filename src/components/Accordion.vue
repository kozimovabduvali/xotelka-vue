<template>
  <div class="space-y-2">
    <div v-for="(item, index) in localItems" :key="index" class="rounded-2xl">
      <button @click="toggle(index)"
        class="text-left accordion-btn font-bold lg:text-xl leading-[150%] w-full flex items-center justify-between gap-5 p-6 lg:p-8">
        <span>{{ item.question }}</span>
        <component :is="openIndex === index ? MinusIcon : PlusIcon" class="shrink-0 w-8 h-8" />
      </button>

      <div v-show="openIndex === index" class="accourdion-content pt-2 lg:pt-4 px-6 lg:px-8 pb-6 lg:pb-8">
        <p class="leading-[150%]">{{ item.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, toRef, watch } from 'vue'
import PlusIcon from './icons/PlusIcon.vue'
import MinusIcon from './icons/MinusIcon.vue'

const props = defineProps({
  items: { type: Array, required: true },
  openInitially: { type: Number, default: -1 },
})

const emit = defineEmits(['toggle'])

const localItems = toRef(props, 'items')
const openIndex = ref(props.openInitially)

function toggle(index) {
  openIndex.value = openIndex.value === index ? -1 : index
  emit('toggle', openIndex.value)
}

watch(() => props.items, () => {
  // reset open index when items change
  openIndex.value = props.openInitially
})
</script>
