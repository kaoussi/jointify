import React from 'react'
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const AuthLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query AuthSiteTitleQuery {
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
        </Helmet>
        <div>
          {children}
        </div>
      </>
    )}
  />
)

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthLayout
