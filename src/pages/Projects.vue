<template>
  <Layout title="Projects">
    <div class="space-y-16">
      <LinkGroup :edges="$page.projects.edges" />
    </div>
  </Layout>
</template>

<page-query>
query {
  projects: allProject {
    edges {
      node {
        description
        path
        title
      }
    }
  }
}
</page-query>

<script>
export default {
  components: {
    LinkGroup: () => import('@/components/LinkGroup'),
  },
  metaInfo: {
    title: 'Projects',
    meta: [
      {
        name: 'description',
        content: 'Projects that I have worked on featuring Ruby on Rails, Vue, Shopify and more.',
      },
    ],
  },
}
</script>
