const axios = require('axios')

module.exports = {
  blogPages: async function(graphql, createPage) {
    const { data } = await graphql(`
      {
        blogs: allBlogs {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `)

    data.blogs.edges.forEach(({ node }) => {
      const path = node.title.replace(/\s+/g, '-').toLowerCase()

      createPage({
        path: `/blog/${path}`,
        component: './src/templates/Blog.vue',
        context: { id: node.id },
      })
    })
  },
}
