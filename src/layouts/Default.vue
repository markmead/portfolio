<template lang="pug">
div
  Navbar
  main#main
    div(class="max-w-3xl px-4 py-8 mx-auto sm:px-6 sm:py-12 md:py-16")
      slot
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar,
  },
}
</script>
