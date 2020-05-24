<template>
  <dt class="text-sm font-medium leading-5 text-gray-500" :class="classes">{{ text }}</dt>
</template>

<script>
export default {
  props: ['classes', 'text']
}
</script>