const axios = require('axios')

module.exports = {
  blogsCollection: async function(actions) {
    const blogs = await axios.get('https://dev.to/api/articles?username=markmead')
    const collection = actions.addCollection('Blogs')

    for (const blog of blogs.data) {
      const tags = blog.tags.split(', ')

      collection.addNode({
        title: blog.title,
        description: blog.description,
        tags,
        path: blog.url,
      })
    }
  },
}
