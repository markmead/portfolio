<template lang="pug">
  div(:class="classes")
    slot
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: 'space-y-6'
    }
  }
}
</script>