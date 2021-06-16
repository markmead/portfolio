<template>
  <nav
    role="navigation"
    class="flex items-center space-x-2 text-sm font-medium text-gray-500"
  >
    <span class="hidden lg:block">
      <LinkNavbar
        to="/"
        text="Home"
      />
    </span>

    <LinkNavbar
      to="/blog"
      text="Blog"
    />

    <LinkNavbar
      to="/projects"
      text="Projects"
    />

    <a
      href="https://gumroad.com/markmead"
      target="_blank"
      rel="noreferrer"
      class="inline-flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-400"
    >
      Gumroad
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ml-1.5 w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>
  </nav>
</template>

<script>
import LinkNavbar from '@/components/LinkNavbar'

export default {
  components: {
    LinkNavbar
  },
}
</script>
