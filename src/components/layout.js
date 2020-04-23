import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Main from "./main";
import "../assets/stylesheets/layout.css"

const Layout = ({ children, aside_display }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <Main children={children} aside_display={aside_display} />
        <footer>
          <hr/>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org" style={{color: '#674299'}}>Gatsby.</a>
          {` `}
          Contribute to this theme <a href="https://github.com/Swastikyadav/swastikyadav.com" style={{color: '#3FBBC9'}}>here</a>.
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
