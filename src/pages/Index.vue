<template>
  <Layout title="Hello, I'm Mark">
    <Content content="<p>23 year old web developer, finding solutions with Vue, Shopify &amp; Ruby on Rails.</p>" />
    <Break />
    <div class="space-y-8">
      <CardLink
        v-for="project in $page.projects.edges"
        :key="project.node.title"
        :subtitle="project.node.brand"
        :summary="project.node.description"
        :title="project.node.title"
        :to="project.node.path"
      />
      <CardLink
        v-for="blog in this.blogs"
        :blog="true"
        :key="blog.id"
        :subtitle="blog.readable_publish_date"
        :summary="blog.description"
        :title="blog.title"
        :to="blog.url"
      />
    </div>
  </Layout>
</template>

<page-query>
query { 
  projects: allProject(filter: { featured: { eq: true }}) {
    edges {
      node { 
        brand 
        description 
        path 
        title 
      } 
    } 
  } 
}
</page-query>

<script>
import axios from 'axios'

import Break from '@/components/Break'
import CardLink from '@/components/CardLink'
import Content from '@/components/Content'

export default {
  data() {
    return {
      blogs: null,
    }
  },
  async beforeMount() {
    await axios.get('https://dev.to/api/articles?username=markmead').then((res) => {
      this.blogs = res.data.slice(0, 2)
    })
  },
  components: {
    Break,
    CardLink,
    Content,
  },
  metaInfo: {
    title: 'Ruby on Rails Developer',
    meta: [
      {
        name: 'description',
        content: 'Ruby on Rails developer with Shopify and Vue experience based in Colchester, Essex, United Kingdom.',
      },
    ],
  },
}
</script>
