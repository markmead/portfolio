<template>
  <Layout>
    <Title text="Blogs" />
    <div class="mt-8 space-y-8">
      <div v-if="loading && !error">Loading</div>
      <div v-if="!loading && error">Error</div>
      <CardLink
        v-id="blogs"
        v-for="blog in blogs"
        :key="blog.id"
        :to="blog.url"
        :subtitle="blog.readable_publish_date"
        :title="blog.title"
        :summary="blog.description"
        :external="true"
      />
    </div>
  </Layout>
</template>

<page-query>
query { 
  projects: allProject { 
    edges {
      node { 
        title 
        brand 
        description 
        path 
      } 
    } 
  } 
}
</page-query>

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
      loading: true,
      error: false,
      blogs: null,
    }
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

