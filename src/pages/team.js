import React from 'react'

import Layout from '../components/layout'
import Team from '../components/Team'
import CtaSection from '../components/CtaFormSection'

class TeamPage extends React.Component {
  render() {
    return (
      <Layout>
        <main>
          <Team />
          <CtaSection />
        </main>
      </Layout>
    )
  }
}

export default TeamPage
