<template lang="pug">
  h2(class="text-2xl leading-tight") {{ text }}
</template>

<script>
export default {
  props: {
    text: String,
  },
}
</script>
