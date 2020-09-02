<template>
  <div class="min-h-screen font-sans bg-gray-50">
    <Header />
    <main role="main" id="main-content" class="max-w-2xl min-h-screen px-4 py-12 mx-auto">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>
