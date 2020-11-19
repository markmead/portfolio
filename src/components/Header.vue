<template>
  <header class="sticky inset-x-0 top-0 z-50 bg-white bg-opacity-75 border-b-2 border-black backdrop-blur">
    <div class="flex items-center justify-between px-5 py-2.5">
      <Logo />
      <div class="space-x-4">
        <Navbar />
        <CurrentTime />
      </div>
    </div>
  </header>
</template>

<script>
import CurrentTime from '@/components/CurrentTime'
import Navbar from '@/components/Navbar'
import Logo from '@/components/Logo'

export default {
  components: {
    CurrentTime,
    Navbar,
    Logo,
  },
}
</script>
