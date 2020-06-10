<template>
  <nav class="flex items-center space-x-10">
    <app-navbar-link v-for="page in pages" :text="page.title" :url="page.path" :key="page.title" />
  </nav>
</template>

<script>
import NavbarLink from '~/components/NavbarLink'

export default {
  data() {
    return {
      pages: [
        { title: 'About', path: '/about' },
        { title: 'Blog', path: '/blog' },
        { title: 'Work', path: '/portfolio' }
      ]
    }
  },
  components: {
    'app-navbar-link': NavbarLink
  }
}
</script>