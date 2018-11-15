import React from 'react';
import {Link} from 'gatsby';

const Footer = ({ siteTitle }) => {
  return (
      <footer className="site-footer">
            <div className="container">
                <div className="site-footer-inner">
                    <div className="brand footer-brand">
                        <Link to="/">
                        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <title>{siteTitle}</title>
                                <defs>
                                    <radialGradient cy="0%" fx="50%" fy="0%" r="100%" id="logo-gradient-footer">
                                        <stop stopColor="#00A2B8" offset="0%"/>
                                        <stop stopColor="#00F9D2" offset="100%"/>
                                    </radialGradient>
                                </defs>
                                <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-10a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" fill="url(#logo-gradient-footer)" fillRule="evenodd"/>
                            </svg>
                        </Link>
                    </div>
                    <div className="footer-copyright">&copy; 2018 Artisoft, all rights reserved</div>
                </div>
            </div>
        </footer>
  )
}

export default Footer;