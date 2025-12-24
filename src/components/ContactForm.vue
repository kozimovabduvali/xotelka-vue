<template>
  <form @submit.prevent="handleSubmit" class="w-full max-w-125 mx-auto">
    <div class="space-y-4 mb-8">
      <input v-model="form.title" type="text"
        class="w-full bg-white border border-transparent rounded-lg px-6 py-4 outline-none focus:border-secondary"
        placeholder="Название" />
      <input v-model="form.link" type="text"
        class="w-full bg-white border border-transparent rounded-lg px-6 py-4 outline-none focus:border-secondary"
        placeholder="Ссылка" />
      <textarea v-model="form.note"
        class="w-full bg-white border border-transparent rounded-lg px-6 py-4 outline-none focus:border-secondary min-h-40"
        placeholder="Твоя заметка"></textarea>
    </div>

    <button type="submit" class="main-btn w-full" :disabled="submitting">
      <span v-if="!submitting">Добавить хотелку</span>
      <span v-else>Sending…</span>
    </button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useContactForm } from '../composables/useContactForm'

const { form, submitting, submit } = useContactForm()

const emit = defineEmits(['submitted'])

async function handleSubmit() {
  const result = await submit()
  if (result.success) {
    emit('submitted', { ...form })
  }
}
</script>
