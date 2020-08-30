<template>
  <div class="min-h-screen font-sans bg-gray-50">
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>
