<template>
  <Layout>
    <Title text="Hello, I'm Mark" />
    <Content content="<p>23 year old web developer, finding solutions with Vue, Shopify &amp; Ruby on Rails.</p>" />
    <Break />
    <div class="space-y-8">
      <CardLink
        v-for="project in $page.projects.edges"
        :external="false"
        :key="project.node.title"
        :subtitle="project.node.brand"
        :summary="project.node.description"
        :title="project.node.title"
        :to="project.node.path"
      />
      <CardLink
        v-for="blog in this.blogs"
        :external="true"
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
  projects: allProject(order: ASC, filter: { show: { eq: true } }, limit: 2) {
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
import Title from '@/components/Title'

export default {
  data() {
    return {
      blogs: null,
    }
  },
  components: {
    Break,
    CardLink,
    Content,
    Title,
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
