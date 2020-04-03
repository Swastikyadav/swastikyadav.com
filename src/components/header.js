import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "../assets/stylesheets/header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

import Menu from './menu';

const Header = ({ siteTitle }) => (
  <header>
    <div className="siteTitle">
      <h1>
        <Link to="/" >
          {siteTitle}
        </Link>
      </h1>
      <div>
        <a href="https://twitter.com/codeSwastik">
          <FontAwesomeIcon icon={faTwitterSquare} className="social-icon" style={{color: '#1EA1F2'}} />
        </a>
        <a href="https://github.com/Swastikyadav">
          <FontAwesomeIcon icon={faGithubSquare} className="social-icon" style={{color: '#252A2E'}} />
        </a>
      </div>
    </div>
    <Menu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
