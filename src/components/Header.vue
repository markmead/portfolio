<template>
  <header role="navigation" class="sticky inset-x-0 top-0 z-50 bg-white border-b border-gray-200">
    <div class="flex items-center justify-between px-4 py-3">
      <Logo />
      <div class="space-x-4">
        <CurrentTime />
        <Navbar />
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