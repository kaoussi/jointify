import React, { Component } from 'react'
import { Link } from 'gatsby'
import Logo from '../../static/svg/logo.svg'

const logo = <Logo />

class Navbar extends Component {
  render() {
    return (
      <div className="site-header-inner">
        <div className="brand header-brand">
          <h1 className="m-0">
            <Link to="/">{logo}</Link>
          </h1>
        </div>
        <ul className="header-links list-reset m-0">
        <li>
            <Link to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/team" className="button button-sm button-shadow">
              Our Team
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar
