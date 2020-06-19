<template lang="pug">
  p(class="text-lg opacity-75") {{ text }}
</template>

<script>
export default {
  props: {
    text: String,
  },
}
</script>
