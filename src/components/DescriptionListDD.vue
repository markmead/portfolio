<template>
  <dd class="text-sm leading-5 text-gray-900" :class="classes">{{ text }}</dd>
</template>

<script>
export default {
  props: ['classes', 'text']
}
</script>