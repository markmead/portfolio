<template>
  <Layout>
    <div class="max-w-screen-xl px-4 pt-12 mx-auto sm:pt-16 md:pt-20 sm:px-6">
      <h1 class="text-6xl leading-none text-center font-display">Blog</h1>
    </div>
    <!-- <ul class="mt-8 -space-y-px">
      <app-blog-link
        v-for="blog in $page.blogs.edges"
        :key="blog.node.id"
        :id="blog.node.id"
        :path="blog.node.path"
        :title="blog.node.title"
        :teaser="blog.node.teaser"
      />
    </ul>-->
  </Layout>
</template>

// <page-query>
//   query {
//     blogs: allBlogs(sortBy: "createdAt") {
//       edges {
//         node {
//           id
//           title
//           teaser
//           createdAt
//           path
//         }
//       }
//     }
//   }
// </page-query>

<script>
import BlogLink from '~/components/BlogLink'

export default {
  components: {
    'app-blog-link': BlogLink
  }
}
</script>
