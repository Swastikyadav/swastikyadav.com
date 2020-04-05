import React from 'react';
import Layout from '../components/layout'

export default function Template({ data }) {
  const post = data.markdownRemark
  console.log(data);
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h4>{post.frontmatter.category}</h4>
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
      }
    }
  }
`