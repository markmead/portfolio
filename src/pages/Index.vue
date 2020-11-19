<template>
  <Layout>
    <Title text="Hello, I'm Mark" />
    <Content content="<p>23 year old web developer, finding solutions with Vue, Shopify &amp; Ruby on Rails.</p>" />
    <Break />
    <div class="space-y-8">
      <CardLink
        v-for="project in $page.projects.edges"
        :key="project.node.title"
        :to="project.node.path"
        :subtitle="project.node.brand"
        :title="project.node.title"
        :summary="project.node.description"
        :external="false"
      />
      <CardLink
        v-for="blog in this.blogs"
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
  projects: allProject(order: ASC, filter: { show: { eq: true } }, limit: 2) {
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
import Break from '@/components/Break'

export default {
  data() {
    return {
      blogs: null,
    }
  },
  components: {
    Title,
    Content,
    CardLink,
    Break,
  },
  async beforeMount() {
    await axios.get('https://dev.to/api/articles?username=markmead').then((res) => {
      this.blogs = res.data.slice(0, 2)
    })
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
