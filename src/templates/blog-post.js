import React from 'react';
import Layout from '../components/layout'
import Img from 'gatsby-image';

export default function Template({ data }) {
  const post = data.markdownRemark

  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout aside_display="none">
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h4>{post.frontmatter.category}</h4>
        <Img fluid={featuredImgFluid} />
        <hr/><br/>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }){
      html
      frontmatter {
        path
        title
        category
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`