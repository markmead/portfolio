<template>
  <Layout>
    <Title text="Blogs" />
    <div class="space-y-8">
      <CardLink
        v-for="blog in blogs"
        :key="blog.id"
        :to="blog.url"
        :subtitle="blog.readable_publish_date"
        :title="blog.title"
        :external="true"
        :summary="blog.description"
      />
    </div>
  </Layout>
</template>

<script>
import axios from 'axios'

import Title from '@/components/Title'
import CardLink from '@/components/CardLink'

export default {
  components: {
    Title,
    CardLink,
  },
  data() {
    return {
      blogs: null,
    }
  },
  async beforeMount() {
    await axios.get('https://dev.to/api/articles?username=markmead').then((res) => {
      this.blogs = res.data
    })
  },
  metaInfo: {
    title: 'Development Blogs',
    meta: [
      {
        name: 'description',
        content: 'Blogs that I have written about development, featuring; tips, tutorials and more',
      },
    ],
  },
}
</script>
