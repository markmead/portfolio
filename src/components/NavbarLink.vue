<template>
  <g-link class="px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-600" :to="to">{{ text }}</g-link>
</template>

<script>
export default {
  props: {
    text: String,
    to: String,
  },
}
</script>
