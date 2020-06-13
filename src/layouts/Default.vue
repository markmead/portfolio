<template>
  <div>
    <div class="fixed top-0 left-0 z-50 transform translate-x-4 translate-y-4">
      <app-menu-toggle v-on:toggleMenu="toggleMenu" />
      <nav v-show="menuOpen" class="p-8 space-y-4 bg-white">
        <app-nav-link path="/" text="Home" />
        <app-nav-link path="/blog" text="Blog" />
        <app-nav-link path="/work" text="Work" />
        <app-nav-link path="/setup" text="Setup" />
        <app-nav-link path="/resources" text="Resources" />
        <app-nav-link path="/site-info" text="Site info" />
      </nav>
    </div>
    <main id="main">
      <slot />
    </main>
    <footer class="pt-6 pb-4 mt-8 border-t border-white">
      <div class="max-w-screen-xl px-4 mx-auto sm:px-6">
        <p class="text-xl font-bold leading-none text-center font-display">&copy; Mark Mead</p>
      </div>
    </footer>
  </div>
</template>

<script>
import MenuToggle from '~/components/MenuToggle'
import NavLink from '~/components/NavLink'

export default {
  data() {
    return {
      menuOpen: false
    }
  },
  components: {
    'app-menu-toggle': MenuToggle,
    'app-nav-link': NavLink
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>