<template>
  <div class="fixed top-0 right-0 flex flex-col items-end mt-4 mr-4 md:mt-10 md:mr-10">
    <button
      @click="toggleNav"
      class="inline-flex px-4 py-2 text-lg font-semibold leading-none text-white bg-black md:hidden focus:outline-none focus:shadow-outline"
    >
      Menu
    </button>
    <nav v-if="open" class="flex flex-col px-8 py-4 space-y-4 bg-black md:hidden">
      <NavbarLink v-for="page in pages" :key="page.path" :path="page.path" :text="page.text" classes="text-white" />
    </nav>
    <nav class="flex-col hidden space-y-4 md:flex">
      <NavbarLink v-for="page in pages" :key="page.path" :path="page.path" :text="page.text" classes="text-black" />
    </nav>
  </div>
</template>

<script>
import NavbarLink from '@/components/NavbarLink'

export default {
  data() {
    return {
      open: false,
      pages: [
        { path: '/', text: 'Home' },
        { path: '/about', text: 'About' },
        { path: '/work', text: 'Work' },
        { path: '/blog', text: 'Blog' },
      ],
    }
  },
  methods: {
    toggleNav() {
      this.open = !this.open
    },
  },
  components: {
    NavbarLink,
  },
}
</script>
