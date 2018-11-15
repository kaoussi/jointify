import React from 'react'
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'


import Header from './header'
import Footer from './Footer'

import '../assets/sass/style.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{data.site.siteMetadata.title}</title>
          <link href="https://fonts.googleapis.com/css?family=Lato:400,400i|PT+Serif:700" rel="stylesheet"></link>
        </Helmet>
        <Header />
        <div className="body-wrap boxed-container">
          {children}
          <Footer/>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
