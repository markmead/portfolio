<template>
  <nav class="inline-flex items-center space-x-2">
    <NavbarLink to="/projects" text="Projects" />
    <span class="font-medium">/</span>
    <NavbarLink to="/blog" text="Blog" />
  </nav>
</template>

<script>
import NavbarLink from '@/components/NavbarLink'

export default {
  components: {
    NavbarLink,
  },
}
</script>