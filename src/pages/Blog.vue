<template lang="pug">
  Layout
    Spacer
      Title(text="Sometimes I write about code.")
      Paragraph(:text="intro")
      Break
      Spacer
        Subtitle(text="Loading blogs..." v-if="this.loading")
        Subtitle(text="Error fetching blogs, try and refresh" v-if="this.error")
        Post(v-for="blog in blogs" :key="blog.url" 
                                   :text="blog.title" 
                                   :path="blog.url" 
                                   :description="blog.description"
                                   :tags="blog.tags.split(', ')")
</template>

<script>
import Title from '@/components/Text/Title'
import Subtitle from '@/components/Text/Subtitle'
import Paragraph from '@/components/Text/Paragraph'
import Spacer from '@/components/Flow/Spacer'
import Break from '@/components/Flow/Break'
import Post from '@/components/Blog/Post'
import axios from 'axios'

export default {
  metaInfo: {
    title: '📖 Blog',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'As someone who has built himself up from Junior to Lead Web Developer, Mark has experience he wants to share with others making that transition.',
      },
    ],
  },
  data() {
    return {
      loading: true,
      error: false,
      blogs: null,
      intro:
        "I'm not that much of a blogger, but when I do write I like to make posts about my experiences. I know when I started development that I took great interest in reading other peoples stories, learning how they overcome challenges and what the outcome was.",
    }
  },
  components: {
    Title,
    Paragraph,
    Subtitle,
    Spacer,
    Break,
    Post,
  },
  async beforeMount() {
    await axios
      .get('https://dev.to/api/articles?username=markmead')
      .then((res) => {
        this.blogs = res.data
        this.loading = false
      })
      .catch((err) => {
        this.loading = false
        this.error = true
      })
  },
}
</script>
