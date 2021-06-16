<template>
  <Layout
    title="Hey, I'm Mark"
    text="I build websites with Ruby on Rails, Vue and Shopify and I'm currently picking up Docker and Laravel. I'm currently the Senior Developer at Digital Reflow."
  >
    <div class="space-y-16">
      <LinkGroup
        title="Blogs"
        :edges="$page.blogs.edges"
      />
      <LinkGroup
        title="Projects"
        :edges="$page.projects.edges"
      />
    </div>
  </Layout>
</template>

<page-query>
query {
  projects: allProject(limit: 3) {
    edges {
      node {
        description
        path
        title
      }
    }
  }
  blogs: allBlog(limit: 3) {
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
import LinkGroup from '@/components/LinkGroup'

export default {
  components: {
    LinkGroup
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
