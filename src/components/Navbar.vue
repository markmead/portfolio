<template>
  <nav class="fixed top-0 right-0 flex flex-col mt-10 mr-10 space-y-4">
    <NavbarLink v-for="page in pages" :key="page.path" :path="page.path" :text="page.text" :showActive="true" />
  </nav>
</template>

<script>
import NavbarLink from '@/components/NavbarLink'

export default {
  data() {
    return {
      pages: [
        { path: '/', text: 'Home' },
        { path: '/about', text: 'About' },
        { path: '/work', text: 'Work' },
        { path: '/blog', text: 'Blog' },
      ],
    }
  },
  components: {
    NavbarLink,
  },
}
</script>
