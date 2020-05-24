<template>
  <g-link
    :to="url"
    class="px-3 py-4 text-sm text-white leading-tight focus:outline-none focus:bg-gray-200 focus:text-black focus:underline hover:underline hover:bg-blue-600 active:bg-blue-600"
    exact-active-class="underline bg-blue-600"
  >
    {{ text }}
  </g-link>
</template>

<script>
export default {
  props: ['url', 'text'],
}
</script>
