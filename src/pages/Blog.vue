<template>
  <Layout>
    <Title text="Blogs" />
    <div class="space-y-8">
      <div v-if="loading && !error">Loading</div>
      <div v-if="!loading && error">Error</div>
      <template v-if="blogs">
        <CardLink
          v-for="blog in blogs"
          :key="blog.id"
          :to="blog.url"
          :subtitle="blog.readable_publish_date"
          :title="blog.title"
          :external="true"
        />
      </template>
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
      error: false,
      loading: true,
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
