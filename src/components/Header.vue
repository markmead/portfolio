<template>
  <header>
    <div class="flex items-center justify-between max-w-3xl px-4 py-4 mx-auto">
      <button
        class="inline-flex items-center justify-center w-10 h-10 text-gray-500 rounded-lg bg-gray-50 hover:text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:hover:text-gray-400"
        @click="fireAction"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

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
