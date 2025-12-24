<template>
  <Hero />
  <Features />
  <WhyUS />
  <Work />
  <Philosophy />
  <FaqSection />
  <ContactSection />
</template>

<script>
import Hero from '../components/Hero.vue'
import Features from '../components/Features.vue'
import WhyUS from '../components/WhyUS.vue'
import Work from '../components/Work.vue'
import Philosophy from '../components/Philosophy.vue'
import FaqSection from '../components/Faq.vue'
import ContactSection from '../components/Contact.vue'

export default {
  name: 'HomePage',
  components: {
    Hero,
    Features,
    WhyUS,
    Work,
    Philosophy,
    FaqSection,
    ContactSection,
  },
}
</script>
