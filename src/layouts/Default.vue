<template>
  <div class="font-mono bg-gray-50">
    <Header />
    <main class="max-w-2xl px-4 py-12 mx-auto space-y-8">
      <Title :text="title" />
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Title from '@/components/Title'

export default {
  mounted() {
    this.$externalLinks()
  },
  components: {
    Footer,
    Header,
    Title,
  },
  props: {
    title: String,
  },
}
</script>
