<template>
  <header class="flex items-center justify-between h-16">
    <app-logo />
    <app-navbar />
  </header>
</template>

<script>
import Logo from '~/components/Logo'
import Navbar from '~/components/Navbar'

export default {
  components: {
    'app-logo': Logo,
    'app-navbar': Navbar
  }
}
</script>