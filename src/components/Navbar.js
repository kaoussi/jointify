import React, { Component } from 'react'
import { Link } from 'gatsby'

class Navbar extends Component {
  render() {
    return (
      <div className="site-header-inner">
        <div className="brand header-brand">
          <h1 className="m-0">
            <Link to="/">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Jointify</title>
                <defs>
                  <radialGradient
                    cy="0%"
                    fx="50%"
                    fy="0%"
                    r="100%"
                    id="logo-gradient"
                  >
                    <stop stopColor="#FFF" offset="0%" />
                    <stop stopColor="#FFF" stopOpacity=".24" offset="100%" />
                  </radialGradient>
                </defs>
                <path
                  d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-10a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                  fill="url(#logo-gradient)"
                  fillRule="evenodd"
                />
              </svg>
            </Link>
          </h1>
        </div>
      </div>
    )
  }
}

export default Navbar
