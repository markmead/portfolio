<template>
  <div class="bg-gray-50">
    <Header />
    <main class="max-w-2xl px-4 py-12 mx-auto space-y-8">
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
