<template>
  <span class="font-medium text-black text-opacity-50">{{ currentTime }}</span>
</template>

<script>
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

export default {
  data() {
    return {
      currentTime: '',
    }
  },
  beforeMount() {
    const localCurrentTime = localStorage.getItem('currentTime')

    if (localCurrentTime) this.currentTime = localCurrentTime
  },
  mounted() {
    dayjs.extend(LocalizedFormat)

    setInterval(() => {
      const currentTime = `${dayjs().format('dddd')}, ${dayjs().format('LT')}`

      this.currentTime = currentTime
      localStorage.clear()
      localStorage.setItem('currentTime', currentTime)
    }, 1000)
  },
}
</script>

