import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <main>
    <section className="hero text-light text-center">
        <div className="container-sm">
          <div className="hero-inner">
            <h1 className="hero-title h2-mobile mt-0 is-revealing">NOT FOUND.</h1>
            <p className="hero-paragraph is-revealing">You just hit a route that doesn&#39;t exist... the sadness.</p>
            <p className="hero-cta is-revealing"><a className="button button-secondary button-shadow" href="/">Go back Home!</a></p>
          </div>
        </div>
      </section>
    </main>
  </Layout>
)

export default NotFoundPage