import React from 'react'
import { Helmet } from 'react-helmet'

import Header from './header'
import Footer from './Footer'

import '../assets/sass/style.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <body className="is-boxed" />
      </Helmet>
      <div className="body-wrap boxed-container">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
