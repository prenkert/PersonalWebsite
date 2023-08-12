const categoriesQuery = async (graphql, options) =>
  await graphql(`
    {
      categories: allDirectory(filter: { absolutePath: { regex: "/${options.imagesPath}//" } }) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)

const imagesQuery = async (graphql, directory) =>
  await graphql(`
    {
      images: allFile(filter: { relativeDirectory: { eq: "${directory}" } }) {
        edges {
          node {
            id
            name
            absolutePath
          }
        }
      }
    }
  `)

module.exports = { categoriesQuery, imagesQuery }
