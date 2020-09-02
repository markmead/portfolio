<template>
  <Layout>
    <Title text="Projects" />
    <div class="space-y-8">
      <CardLink
        v-for="project in $page.projects.edges"
        :key="project.node.id"
        :to="project.node.path"
        :subtitle="project.node.brand"
        :title="project.node.title"
        :summary="project.node.description"
        :external="false"
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
import Title from '@/components/Title'
import CardLink from '@/components/CardLink'

export default {
  components: {
    Title,
    CardLink,
  },
}
</script>
