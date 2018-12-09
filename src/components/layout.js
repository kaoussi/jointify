import React from 'react'

import Header from './header'
import Footer from './Footer'

import '../assets/sass/style.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="body-wrap boxed-container">
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
