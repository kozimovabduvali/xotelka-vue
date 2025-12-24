<template>
  <section class="container-base py-16 text-center">
    <h1 class="text-4xl font-bold mb-4">404 — Page Not Found</h1>
    <p class="mb-6">Sorry, we couldn't find the page you were looking for.</p>
    <router-link to="/" class="main-btn inline-block">Go Home</router-link>
  </section>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>
