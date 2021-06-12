<template>
  <div class="bg-white dark:bg-black">
    <Announcement />
    <Header />
    <main role="main">
      <div class="max-w-3xl px-4 mx-auto">
        <Hero
          :title="title"
          :text="text"
        />
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Announcement: () => import('@/components/Announcement'),
    Footer: () => import('@/components/Footer'),
    Header: () => import('@/components/Header'),
    Hero: () => import('@/components/Hero'),
  },
  props: {
    title: String,
    text: String,
  },
}
</script>
