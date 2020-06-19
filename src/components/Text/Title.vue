<template lang="pug">
  h1(class="font-serif text-4xl leading-tight") {{ text }}
</template>

<script>
export default {
  props: {
    text: String,
  },
}
</script>
