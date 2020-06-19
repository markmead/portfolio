<template lang="pug">
  Layout
    Spacer
      Title(text="Sometimes I make posts on DEV.to")
      Paragraph(:text="intro")
      Break
      Spacer(divide=true)
        Blog(v-for="blog in $page.blogs.edges" :key="blog.node.path" 
                                               :text="blog.node.title" 
                                               :path="blog.node.path" 
                                               :description="blog.node.description"
                                               :tags="blog.node.tags")


</template>

<page-query>
  query {
    blogs: allBlogs(sortBy: "createdAt") {
      edges {
        node {
          title
          description
          tags
          path
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
import Blog from '@/components/Blog'

export default {
  data() {
    return {
      intro:
        "I'm not that much of a blogger, but when I do write I like to make posts about my experiences. I know when I started development that I took great interest in reading other peoples stories, learning how they overcome challenges and what the outcome was.",
    }
  },
  components: {
    Title,
    Paragraph,
    Spacer,
    Break,
    Blog,
  },
}
</script>
