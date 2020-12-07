<template>
  <Layout title="Side Projects">
    <Button text="View Projects" to="/projects" />
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
  projects: allProject(sort: [{ by: "featured" }, { by: "title" }], filter: { show: { eq: true }, side: { eq: true } }) {
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
import Button from '@/components/Button'
import CardLink from '@/components/CardLink'

export default {
  components: {
    Button,
    CardLink,
  },
  metaInfo: {
    title: 'Side Projects',
    meta: [
      {
        name: 'description',
        content: 'Side projects that I have worked on featuring a range of technologies.',
      },
    ],
  },
}
</script>
