<template lang="pug">
  h1(class="text-4xl font-bold leading-tight") {{ text }}
</template>

<script>
export default {
  props: {
    text: String,
  },
}
</script>
