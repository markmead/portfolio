<template>
  <div class="overflow-hidden border-2 border-dashed border-gray-200" :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  props: ['classes']
}
</script>