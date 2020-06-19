<template lang="pug">
  span(class="px-3 py-1.5 leading-none text-xs border border-black rounded opacity-50") {{ text }}
</template>

<script>
export default {
  props: {
    text: String,
  },
}
</script>
