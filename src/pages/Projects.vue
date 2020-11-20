<template>
  <Layout>
    <Title text="Projects" />
    <div class="space-y-8">
      <CardLink
        v-for="project in $page.projects.edges"
        :key="project.node.id"
        :subtitle="project.node.brand"
        :summary="project.node.description"
        :title="project.node.title"
        :to="project.node.path"
      />
    </div>
  </Layout>
</template>

<page-query>
query { 
  projects: allProject(order: ASC, filter: { show: { eq: true } }) {
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
import CardLink from '@/components/CardLink'
import Title from '@/components/Title'

export default {
  components: {
    CardLink,
    Title,
  },
  metaInfo: {
    title: 'Development Projects',
    meta: [
      {
        name: 'description',
        content: 'Projects that I have worked on featuring Ruby on Rails, Vue, Shopify and more.',
      },
    ],
  },
}
</script>
