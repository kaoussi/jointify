import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

import astronaut from '../images/gatsby-astronaut.png'

const Astronaut = styled.img`
  height: 45vh;
`

const Success = props => (
  <Layout>
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <main>
      <section className="hero text-light text-center">
        <div className="container-sm">
          <div className="hero-inner">
            <h1 className="hero-title h2-mobile mt-0 is-revealing">
              Thank you for reaching out!
            </h1>
            <p className="hero-paragraph is-revealing">Let's Keep touch!</p>
            <p className="hero-cta is-revealing">
              <Link to="/" className="button button-secondary button-shadow">
                Click here to go back
              </Link>
            </p>
            <div className="hero-media">
              <Astronaut src={astronaut} alt="Astronaut" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
)

export default Success
