<template>
  <div class="font-sans bg-gray-50">
    <Header />
    <main
      role="main"
      id="main-content"
      class="max-w-2xl px-4 py-12 mx-auto space-y-8 md:min-h-screen"
    >
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
