<template lang="pug">
  nav(role="navigation" class="flex justify-end px-4 py-4 space-x-6 sm:px-6")
    Link(v-for="page in pages" :key="page.path" :path="page.path" :text="page.text" showActive=true)
</template>

<script>
import Link from '@/components/UI/Link'

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
    Link,
  },
}
</script>
