import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import About from '../components/About'
import CtaSection from '../components/CtaFormSection'

class AboutPage extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Jointify | About Us</title>
        </Helmet>
        <Layout>
          <main>
            <About />
            <CtaSection />
          </main>
        </Layout>
      </>
    )
  }
}

export default AboutPage
