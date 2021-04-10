<template>
  <header>
    <div class="flex items-center justify-between max-w-3xl px-4 py-4 mx-auto">
      <div class="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800">
        👋
      </div>

      <Navbar />
    </div>
  </header>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar,
  },
  methods: {
    fireAction() {
      this.$emit('action')
    },
  },
}
</script>
