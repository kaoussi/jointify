import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './Footer'

import '../assets/sass/style.scss'

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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
          <meta name="theme-color" content="#00eece" />
          <meta
            name="description"
            content="Jointify, On-Demand Mentorship Online"
          />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="google-site-verification"
            content="knQjJa_CVtlvp93SuAoN781hMGpuYARwz2Kc8ZATZpo"
          />
          <link rel="author" href="artisoft.ma" />
          <link rel="me" href="https://www.artisoft.ma" type="text/html" />
          <link rel="me" href="mailto:contact@artisoft.ma" />
          <link rel="me" href="sms:+212654524639" />
          <title>{data.site.siteMetadata.title}</title>
          <base href="https://jointify.artisoft.ma/" />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,400i|PT+Serif:700"
            rel="stylesheet"
          />
          <html lang="en" dir="ltr" />
        </Helmet>
        <Header />
        <div className="body-wrap boxed-container">
          {children}
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
