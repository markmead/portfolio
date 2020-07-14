<template>
  <div>
    <Navbar />
    <main id="main">
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8 sm:py-12">
        <slot />
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar,
  },
}
</script>
