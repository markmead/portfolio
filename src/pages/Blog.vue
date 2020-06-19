<template lang="pug">
  Layout
    Spacer
      Title(text="Sometimes I make posts on DEV.to")
      Paragraph(:text="intro")
      Break
      Spacer
        Blog(v-for="blog in blogs" :key="blog.url" 
                                   :text="blog.title" 
                                   :path="blog.url" 
                                   :description="blog.description"
                                   :tags="blog.tags.split(', ')")


</template>


<script>
import Title from '@/components/Text/Title'
import Paragraph from '@/components/Text/Paragraph'
import Spacer from '@/components/Flow/Spacer'
import Break from '@/components/Flow/Break'
import Blog from '@/components/Blog'
import axios from 'axios'

export default {
  data() {
    return {
      blogs: null,
      intro:
        "I'm not that much of a blogger, but when I do write I like to make posts about my experiences. I know when I started development that I took great interest in reading other peoples stories, learning how they overcome challenges and what the outcome was."
    }
  },
  components: {
    Title,
    Paragraph,
    Spacer,
    Break,
    Blog
  },
  async beforeMount() {
    await axios
      .get('https://dev.to/api/articles?username=markmead')
      .then(res => (this.blogs = res.data))
      .catch(err => console.log(err))
  }
}
</script>
