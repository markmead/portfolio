<template>
  <Layout title="Projects">
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
  projects: allProject(sort: [{ by: "featured" }, { by: "brand" }], filter: { show: { eq: true } }) {
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

export default {
  components: {
    CardLink,
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
