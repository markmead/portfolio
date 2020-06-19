<template lang="pug">
  Layout
    Spacer
      Title(text="Project that I've worked on")
      Paragraph(:text="intro")
</template>

<script>
import Title from '@/components/Text/Title'
import Paragraph from '@/components/Text/Paragraph'
import Spacer from '@/components/Flow/Spacer'

export default {
  data() {
    return {
      intro: "I'll be adding some projects here soon. Just need to look into what headless CMS to use.",
    }
  },
  components: {
    Title,
    Paragraph,
    Spacer,
  },
}
</script>
