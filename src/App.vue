<template>
  <Navbar />
  <main class="px-6 md:px-12 max-w-7xl mx-auto py-8">
    <RouterView />
  </main>
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
main {
  padding: 2rem;
}
</style>
