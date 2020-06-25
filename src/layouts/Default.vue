<template lang="pug">
div
  Navbar
  transition(name="fade" appear)
    main#main
      div(class="max-w-3xl px-4 py-8 mx-auto sm:px-6 sm:py-12 md:py-16")
        slot
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
.fade-enter-active {
  transition: 0.2s ease-in-out;
}

.fade-enter {
  opacity: 0;
  transform: translateY(10px);
}
</style>