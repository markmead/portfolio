const axios = require('axios')

module.exports = {
  blogsCollection: async function(actions) {
    const blogs = await axios.get('https://rails-portfolio-admin.herokuapp.com/blogs')
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
