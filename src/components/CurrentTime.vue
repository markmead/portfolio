<template>
  <span class="font-medium text-black text-opacity-50">{{ day }}, {{ time }}</span>
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

