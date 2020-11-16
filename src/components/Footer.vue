<template>
  <footer class="px-4 py-3 bg-white border-t border-gray-200">
    <p class="font-medium text-black text-opacity-50">
      Built with
      <span v-for="(link, index) in links" :key="link.name">
        <span v-if="index !== links.length - 1">
          <a :href="link.path" target="_blank" rel="noreferrer" class="hover:underline" v-text="link.name"></a>,
        </span>
        <span v-if="index === links.length - 1">
          and <a :href="link.path" target="_blank" rel="noreferrer" class="hover:underline" v-text="link.name"></a>
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
        { name: 'Vue', path: 'https://vuejs.org/' },
        { name: 'Axios', path: 'https://github.com/axios/axios' },
        { name: 'DEV.to', path: 'https://dev.to/' },
        { name: 'Tailwind', path: 'https://tailwindcss.com/' },
        { name: 'Gridsome', path: 'https://gridsome.org/' },
      ],
    }
  },
}
</script>
