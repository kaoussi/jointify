import React from 'react'
import styled from 'styled-components'

const Lien = styled.a`
  padding-left: 0.2rem;
`
const CompanyName = styled.span`
  color: #00eece;
`

const Footer = ({ siteTitle }) => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-inner has-top-divider">
          <div className="footer-copyright">
            &copy; 2018 |{' '}
            <Lien href="https://www.artisoft.ma">
              <CompanyName>Artisoft</CompanyName>
            </Lien>
            , all rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
