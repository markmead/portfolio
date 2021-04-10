<template>
  <Layout
    title="Hey, I'm Mark"
    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis asperiores enim in, beatae pariatur minus tenetur fugiat. Optio, culpa! Saepe temporibus, nihil facilis aperiam earum facere ipsam. Illum, eos itaque?"
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
    LinkGroup,
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
