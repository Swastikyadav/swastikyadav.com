import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image";
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {
      data.allMarkdownRemark.edges.map(post => (
        <>
          <div key={ post.node.id } className="post-preview">
            <Img fixed={post.node.frontmatter.featuredImage.childImageSharp.fixed} />
            <div className="preview-content">
              <h3>{ post.node.frontmatter.title }</h3>
              <h5>{ post.node.frontmatter.category }</h5>
              <Link to={post.node.frontmatter.path} style={{color: 'rgb(63, 187, 201)'}}>Read Here...</Link>
            </div>
          </div>
          <hr/>
        </>
      ))
    }
  </Layout>
)

export const postQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            category
            featuredImage {
              childImageSharp {
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
