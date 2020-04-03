import React from 'react';
import Link from 'gatsby-link';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      mobile_menu_open: false
    }
  }

  activeStyles = {
    borderTop: '5px solid #3FBBC9',
  }

  handleMenuToggle = () => {
    this.setState({
      mobile_menu_open: !this.state.mobile_menu_open
    });
  }

  render() {
  return(
    <>
      <ul className="menu-list" style={this.state.mobile_menu_open ? {display: 'block'} : null}>
        <Link to="/" activeStyle={this.activeStyles}>
          <li>Home</li>
        </Link>
        <Link to="/javascript" activeStyle={this.activeStyles}>
          <li>JavaScript</li>
        </Link>
        <Link to="/reactjs" activeStyle={this.activeStyles}>
          <li>ReactJS</li>
        </Link>
        <Link to="/ruby" activeStyle={this.activeStyles}>
          <li>Ruby</li>
        </Link>
        <Link to="/ruby-on-rails" activeStyle={this.activeStyles}>
          <li>Ruby on Rails</li>
        </Link>
        <Link to="/learn" activeStyle={this.activeStyles}>
          <li>Learn</li>
        </Link>
    </ul>
    <h2 className="arrow" onClick={this.handleMenuToggle}>
      {
        this.state.mobile_menu_open ? (<>&uarr;</>) : (<>&darr;</>)
      }
    </h2>
  </>
  );
  }
}

export default Menu;