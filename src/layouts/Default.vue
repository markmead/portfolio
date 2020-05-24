<template>
  <div class="max-w-screen-lg px-4 py-8 mx-auto sm:py-12 md:py-16 font-mono">
    <nav class="flex items-center bg-black justify-center">
      <app-nav-link url="/" text="Home" />
      <app-nav-link url="/about" text="About" />
      <app-nav-link url="/skills" text="Skills" />
      <app-nav-link url="/portfolio" text="Portfolio" />
      <app-nav-link url="/blog" text="Blog" />
    </nav>

    <main class="pt-5 sm:pt-10">
      <slot />
    </main>
  </div>
</template>

<script>
import NavLink from '~/components/NavLink'

export default {
  components: {
    'app-nav-link': NavLink,
  },
}
</script>
