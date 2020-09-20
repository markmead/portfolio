<template>
  <Layout>
    <Title text="Mark" />
    <Content :content="content" />
    <div class="space-y-8">
      <CardLink
        :key="$page.project.edges[0].node.title"
        :to="$page.project.edges[0].node.path"
        subtitle="Latest Project"
        :title="$page.project.edges[0].node.title"
        :summary="$page.project.edges[0].node.description"
        :external="false"
      />
      <CardLink
        :to="this.blog.url"
        subtitle="Latest Blog"
        :title="this.blog.title"
        :summary="this.blog.description"
        :external="true"
      />
    </div>
  </Layout>
</template>

<page-query>
query { 
  project: allProject(order: ASC, limit: 1) { 
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
import Content from '@/components/Content'
import CardLink from '@/components/CardLink'

import { content } from '../assets/data/index'

export default {
  data() {
    return {
      content,
      blog: null,
      error: false,
      loading: true,
    }
  },
  components: {
    Title,
    Content,
    CardLink,
  },
  async beforeMount() {
    await axios
      .get('https://dev.to/api/articles?username=markmead')
      .then((res) => {
        this.blog = res.data[0]
        this.loading = false
      })
      .catch((err) => {
        this.loading = false
        this.error = true
      })
  },
}
</script>