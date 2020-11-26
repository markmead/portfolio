<template>
  <nav class="inline-flex items-center space-x-2" role="navigation">
    <NavbarLink to="/projects" text="Projects" />
    <span>&middot;</span>
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
