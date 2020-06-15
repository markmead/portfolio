const axios = require('axios')

module.exports = {
  blogsCollection: async function(actions) {
    const blogs = await axios.get('https://dev.to/api/articles?username=markmead')
    const collection = actions.addCollection('Blogs')

    for (const blog of blogs.data) {
      collection.addNode({
        id: blog.id,
        title: blog.title,
        description: blog.description,
        tags: blog.tags,
        url: blog.url,
      })
    }
  },
}
