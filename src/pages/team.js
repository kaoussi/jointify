import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import Team from '../components/Team'
import CtaSection from '../components/CtaFormSection'

class TeamPage extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Jointify | Our Team</title>
        </Helmet>
        <Layout>
          <main>
            <Team />
            <CtaSection />
          </main>
        </Layout>
      </>
    )
  }
}

export default TeamPage
