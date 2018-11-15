import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Navbar from './Navbar'

const Header = () => (
 
  <StaticQuery
  query={graphql`
    query JointifySiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `}
  render={data => (
    <>
      <header className="site-header">
        <div className="container">
          <Navbar siteTitle={data.site.siteMetadata.title} />
        </div>
      </header>
    </>
  )}
/>
)

export default Header