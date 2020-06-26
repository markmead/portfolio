<template lang="pug">
  Layout
    Spacer
      Title(text="Projects that I've worked on")
      Paragraph(:text="intro")
      Break
      Post(v-for="project in $page.projects.edges" :key="project.node.title"
                                                   :text="project.node.title" 
                                                   :brand="project.node.brand"
                                                   :path="project.node.path" 
                                                   :description="project.node.description")
</template>

<page-query>
query {
  projects: allProject {
    edges {
      node {
        title
        brand
        path
        description
      }
    }
  }
}
</page-query>

<script>
import Title from '@/components/Text/Title'
import Paragraph from '@/components/Text/Paragraph'
import Spacer from '@/components/Flow/Spacer'
import Break from '@/components/Flow/Break'
import Post from '@/components/Project/Post'

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
      intro: "Here's a collection of projects that I've worked on."
    }
  },
  components: {
    Title,
    Paragraph,
    Spacer,
    Break,
    Post
  }
}
</script>
