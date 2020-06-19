<template lang="pug">
  div(class="space-y-6" :class="{ 'divide-y-2 divide-y-200': divide }")
    slot
</template>

<script>
export default {
  props: {
    divide: Boolean,
  },
}
</script>
