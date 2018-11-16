import React from 'react'
import styled from 'styled-components'

const A = styled.a`
  pointer-events: none;
`

const CtaSection = () => {
  return (
    <section className="newsletter section text-light">
      <div className="container-sm">
        <div className="newsletter-inner section-inner">
          <div className="newsletter-header text-center">
            <h2 className="section-title mt-0">Stay in the know</h2>
            <p className="section-paragraph">
              Be The first to learn about our offers.
            </p>
          </div>
          <div className="footer-form newsletter-form field field-grouped">
            <div className="control control-expanded">
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Your best email&hellip;"
                required
              />
            </div>
            <div className="control">
              <A
                className="button button-primary button-block button-shadow"
                href="/success/"
              >
                Early access
              </A>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
