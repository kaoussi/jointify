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
      </div>
    )
  }
}

export default Navbar
