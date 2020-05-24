<template>
  <nav class="flex items-center space-x-4">
    <span v-for="link in social" :key="link.name" class="inline-flex flex-shrink-0 mt-5">
      <a
        :href="link.url"
        rel="noopener noreferrer"
        target="_blank"
        class="inline-flex px-4 py-3 text-sm leading-5 border border-gray-700 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
      >{{ link.name }}</a>
    </span>
  </nav>
</template>

<script>
import social from '~/data/social'

export default {
  data() {
    return {
      social
    }
  }
}
</script>