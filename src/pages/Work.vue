<template lang="pug">
  Layout
    Spacer
      Title(text="Projects that I've worked on")
      Paragraph(:text="intro")
</template>

<script>
import Title from '@/components/Text/Title'
import Paragraph from '@/components/Text/Paragraph'
import Spacer from '@/components/Flow/Spacer'

export default {
  metaInfo: {
    title: '💻 My Work',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'Using a range of technologies, Mark has built a large array of websites. These can be anything from lead generating, ecommerce, forums, landing pages, geolocation services and much more.'
      }
    ]
  },
  data() {
    return {
      intro:
        "I'll be adding some projects here soon. Just need to look into what headless CMS to use."
    }
  },
  components: {
    Title,
    Paragraph,
    Spacer
  }
}
</script>
