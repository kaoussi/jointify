import React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <main>
    <section className="hero text-light text-center">
        <div className="container-sm">
          <div className="hero-inner">
            <h1 className="hero-title h2-mobile mt-0 is-revealing">NOT FOUND.</h1>
            <p className="hero-paragraph is-revealing">You just hit a route that doesn&#39;t exist... the sadness.</p>
            <p className="hero-cta is-revealing"><Link to="/" className="button button-secondary button-shadow">Go back Home!</Link></p>
          </div>
        </div>
      </section>
    </main>
  </Layout>
)

export default NotFoundPage