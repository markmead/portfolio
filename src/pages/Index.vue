<template lang="pug">
Layout
  Spacer
    Title(text="Hello, I'm Mark Mead. I build websites with Ruby on Rails and JavaScript.")
    Paragraph(:text="intro")
    Button(path="/about" text="About me" classes="primary")
</template>

<script>
import Button from '@/components/UI/Button'
import Title from '@/components/Text/Title'
import Paragraph from '@/components/Text/Paragraph'
import Spacer from '@/components/Flow/Spacer'

export default {
  metaInfo: {
    title: '👋 Welcome',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'Mark Mead is a 23 year old web developer in Essex, United Kingdom. Building websites in Ruby on Rails and JavaScript.'
      }
    ]
  },
  data() {
    return {
      intro:
        "I've been building websites for 4 years, these have ranged from travel insurance quote engines, lead generation focused, geolocating services, forums, ecommerce and more. I'm currently working at Digital Reflow as the Lead Web Developer."
    }
  },
  components: {
    Button,
    Title,
    Paragraph,
    Spacer
  }
}
</script>
