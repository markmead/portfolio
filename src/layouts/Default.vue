<template>
  <div class="bg-white dark:bg-black">
    <Announcement />
    <Header />
    <main role="main">
      <div class="max-w-3xl px-4 mx-auto">
        <Hero :title="title" :text="text" />
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Announcement from '@/components/Announcement'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default {
  components: {
    Announcement,
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
