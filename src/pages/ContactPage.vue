<template>
  <section class="container-base py-8">
    <h1 class="font-extrabold text-display-32 lg:text-5xl mb-6">Contact</h1>
    <ContactForm @submitted="onSubmitted" />
  </section>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'

export default {
  name: 'ContactPage',
  components: { ContactForm },
  methods: {
    onSubmitted(payload) {
      // placeholder for integration: call API or show toast
      console.log('Contact form submitted (page):', payload)
    },
  },
}
</script>
