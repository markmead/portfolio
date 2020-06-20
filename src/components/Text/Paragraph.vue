<template lang="pug">
  p(class="text-lg opacity-75" :class="classes") {{ text }}
</template>

<script>
export default {
  props: {
    text: String,
    classes: String
  }
}
</script>
