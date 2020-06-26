<template lang="pug">
  Layout
    Spacer
      Title(text="I'm 23 years old and called Mark.")
      Paragraph(:text="intro")
      Spacer(classes="space-y-1")
        Subtitle(text="Developer")
        Paragraph(:text="developer")
      Spacer(classes="space-y-1")
        Subtitle(text="Website")
        Paragraph(:text="website")
      Spacer(classes="space-y-1")
        Subtitle(text="Hobbies")
        Paragraph(:text="hobbies")
</template>

<script>
import Title from '@/components/Text/Title'
import Subtitle from '@/components/Text/Subtitle'
import Paragraph from '@/components/Text/Paragraph'
import Spacer from '@/components/Flow/Spacer'

export default {
  metaInfo: {
    title: 'About 👉',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'Mark has been building websites for over 4 years, working in a number of different industries and a wide collection of libraries, tooling and framekworks.',
      },
    ],
  },
  data() {
    return {
      intro: "👋 Hello I'm Mark. I'm 23 years old, live in Essex, UK and I build websites.",
      developer:
        "As a developer I've built my fair share of websites, most recently using Ruby on Rails, Stimulus, Vue and Shopify. Out of all the code I've written I've found RoR and JavaScript to be the most enjoyable, thankfully these two pair quite nicely through Basecamp's Stimulus.",
      website:
        'This website is built with Gridsome a Vue framework with GraphQL, deployed to Vercel and uses DEV.to for content. This is V2 of the website, originally it was built with Next a React framework developer by Vercel.',
      hobbies:
        "Development is something I happily do as a hobby and for work, but when I'm not writting code I'll typically be found designing websites in Adobe XD, playing Warframe, spending time with my partner or watching Netflix. Not the most interesting things you'll see people write on their websites but that's me, I'm happy doing those things.",
    }
  },
  components: {
    Title,
    Subtitle,
    Paragraph,
    Spacer,
  },
}
</script>
