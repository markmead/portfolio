<template>
  <footer class="px-5 py-2.5 bg-white">
    <p class="text-sm font-medium">
      Built with
      <span class="inline-flex items-center space-x-2">
        <span v-for="(link, index) in links" :key="link.name">
          <span v-if="index !== 0">&middot;</span>
          <a :href="link.path" class="link">
            {{ link.name }}
          </a>
        </span>
      </span>
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: 'Axios', path: 'https://github.com/axios/axios' },
        { name: 'DEV.to', path: 'https://dev.to/' },
        { name: 'Gridsome', path: 'https://gridsome.org/' },
        { name: 'Tailwind', path: 'https://tailwindcss.com/' },
        { name: 'Vue', path: 'https://vuejs.org/' },
      ],
    }
  },
}
</script>
