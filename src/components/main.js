import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

export default ({children, aside_display}) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <main style={aside_display ? {justifyContent: 'center'} : null}>
        {console.log(data.file.childImageSharp.fixed.src)}
        <div className="blog-list">
          {children}
        </div>
        <aside style={aside_display ? {display: 'none'} : null} className="aside">
          <div className="profile-card">
            <Img fixed={data.file.childImageSharp.fixed} style={{borderRadius: '50%', border: '5px solid #3FBBC9'}} />
            <p>
              <strong>Hi! I am Swastik</strong>, a full stack software developer,
              writting about modern JavaScript, React JS, Ruby, Ruby On Rail and development.
              Have any query? Send me an email at <strong>swastikb380@gmail.com</strong>
            </p>        
          </div>
        </aside>
      </main>
    )}
  />
);