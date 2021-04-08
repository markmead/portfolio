<template>
  <div>
    <Header />
    <main role="main">
      <Hero :title="title" :text="text" />
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default {
  components: {
    Footer,
    Header,
    Hero,
  },
  props: {
    title: String,
    text: String,
  },
}
</script>
