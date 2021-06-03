<template>
  <header>
    <div class="flex items-center justify-between max-w-3xl px-4 py-4 mx-auto">
      <g-link to="/" class="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800">
        👋
      </g-link>
      <Navbar />
    </div>
  </header>
</template>

<script>
export default {
  components: {
    Navbar: () => import('@/components/Navbar'),
  },
}
</script>
