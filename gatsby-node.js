const path = require('path')

exports.createPages = async ({boundActionCreators, graphql}) => {
  const { createPage } = boundActionCreators;

  const postTemplate = path.resolve('src/templates/blog-post.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              category
            }
          }
        }
      }
    }
  `).then(res => {
    if(res.errors) {
      console.log(res.errors);
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {
          filePath: node.frontmatter.path,
        }
      })
    });
  })
}