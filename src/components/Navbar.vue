<template>
  <nav role="navigation" class="flex items-center space-x-2 text-sm font-medium text-gray-500">
    <NavbarLink to="/" text="Home" />
    <NavbarLink to="/blog" text="Blog" />
    <NavbarLink to="/projects" text="Projects" />
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
