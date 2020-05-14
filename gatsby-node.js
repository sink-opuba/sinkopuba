const path = require("path")

exports.createPages = async function ({ actions, graphql, reporter }) {
  const { data, errors } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          next {
            frontmatter {
              title
              path
            }
          }
          previous {
            frontmatter {
              title
              path
            }
          }
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  data.allMarkdownRemark.edges.forEach(edge => {
    const path = edge.node.frontmatter.path
    const next = edge.next ? edge.next.frontmatter : null
    const prev = edge.previous ? edge.previous.frontmatter : null
    actions.createPage({
      path: `/blog/${path}`,
      component: require.resolve(`./src/templates/blogTemplate.js`),
      context: {
        slug: path,
        prev,
        next,
      },
    })
  })
}

// add custom webpack config to solve 'fs' can't resolve error
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  })
}
