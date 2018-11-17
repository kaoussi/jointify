import React from 'react'
import { withPrefix } from 'gatsby-link'

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
          <form
            action="https://formspree.io/kaoussi.souhail@artisoft.ma"
            method="POST"
          >
            <div className="footer-form newsletter-form field field-grouped">
              <div className="control control-expanded">
                <input type="hidden" name="_subject" value="Contact Form" />
                <input
                  name="_next"
                  value={withPrefix(`/success`)}
                  type="hidden"
                />
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Your best email&hellip;"
                  required
                />
              </div>
              <div className="control">
                <button className="button button-primary button-block button-shadow">
                  Early access
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
