const axios = require('axios')

module.exports = {
  blogsCollection: async function(actions) {
    const blogs = await axios.get('http://localhost:3000/blogs')
    const collection = actions.addCollection('Blogs')

    for (const blog of blogs.data) {
      collection.addNode({
        id: blog.id,
        title: blog.title,
        teaser: blog.teaser,
        body: blog.body,
        createdAt: blog.created_at,
        path: blog.title.replace(/\s+/g, '-').toLowerCase(),
      })
    }
  },
}
