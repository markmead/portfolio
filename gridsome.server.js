// const collectionHelper = require('./src/utils/collectionHelper')
// const createPagesHelper = require('./src/utils/createPagesHelper')

module.exports = function(api) {
  api.loadSource(async (actions) => {
    // await collectionHelper.blogsCollection(actions)
  })

  api.createPages(async ({ graphql, createPage }) => {
    // await createPagesHelper.blogPages(graphql, createPage)
  })
}
