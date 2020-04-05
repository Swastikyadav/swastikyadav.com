import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const RubyPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {
      data.allMarkdownRemark.edges.map(post => (
        <div key={ post.node.id }>
          <h3>{ post.node.frontmatter.title }</h3>
          <h5>{ post.node.frontmatter.category }</h5>
          <Link to={post.node.frontmatter.path}>Read More...</Link>
          <hr/>
        </div>
      ))
    }
  </Layout>
)

export const postQuery = graphql`
  query RubyBlogQuery {
    allMarkdownRemark(filter: {
      frontmatter: { category: { eq: "ruby" } }
    }) {
      edges {
        node {
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
`

export default RubyPage;
