<template>
  <nav role="navigation" class="sticky inset-x-0 top-0 z-50 bg-white border-b border-gray-200">
    <div class="flex items-center justify-between px-4 py-6">
      <g-link to="/" class="text-lg font-medium leading-none text-gray-700">
        Mark Mead
      </g-link>
      <p class="text-lg font-medium leading-none text-gray-700">{{ day }}, {{ time }}</p>
    </div>
  </nav>
</template>

<script>
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

export default {
  data() {
    return {
      day: '',
      time: '',
    }
  },
  mounted() {
    dayjs.extend(LocalizedFormat)

    setInterval(() => {
      this.day = dayjs().format('dddd')
      this.time = dayjs().format('LT')
    }, 1000)
  },
}
</script>
