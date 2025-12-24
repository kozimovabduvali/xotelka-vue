<template>
  <RouterView v-slot="{ Component }">
    <MainLayout>
      <component :is="Component" />
    </MainLayout>
  </RouterView>
</template>

<script setup>
import { RouterView } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'
</script>
