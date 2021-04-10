<template>
  <div :class="themeClass">
    <div class="bg-white dark:bg-black">
      <Header @action="handleTheme" />
      <main role="main">
        <div class="max-w-3xl px-4 mx-auto">
          <Hero :title="title" :text="text" />
          <slot />
        </div>
      </main>
      <Footer />
    </div>
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
  data() {
    return {
      darkMode: false,
    }
  },
  computed: {
    themeClass() {
      return this.darkMode ? 'dark' : 'light'
    },
  },
  beforeMount() {
    this.darkMode = this.$isDarkMode()
  },
  methods: {
    handleTheme() {
      this.darkMode = !this.darkMode
    },
  },
}
</script>
