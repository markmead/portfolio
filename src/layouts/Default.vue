<template>
  <div class="font-mono bg-gray-50">
    <Header />
    <main class="max-w-2xl px-4 py-12 mx-auto space-y-8">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default {
  components: {
    Footer,
    Header,
  },
  mounted() {
    this.$externalLinks()
  },
}
</script>
