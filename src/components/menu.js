import React from 'react';
import Link from 'gatsby-link';

function Menu() {
  const activeStyles = {
    borderTop: '5px solid #3FBBC9'
  }

  return(
    <ul className="menu-list">
      <Link to="/" activeStyle={activeStyles}>
        <li>Home</li>
      </Link>
      <Link to="/javascript" activeStyle={activeStyles}>
        <li>JavaScript</li>
      </Link>
      <Link to="/reactjs" activeStyle={activeStyles}>
        <li>ReactJS</li>
      </Link>
      <Link to="/ruby" activeStyle={activeStyles}>
        <li>Ruby</li>
      </Link>
      <Link to="/ruby-on-rails" activeStyle={activeStyles}>
        <li>Ruby on Rails</li>
      </Link>
      <Link to="/learn" activeStyle={activeStyles}>
        <li>Learn</li>
      </Link>
  </ul>
  );
}

export default Menu;