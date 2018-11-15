import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Features from '../components/Features'
import Conversation from '../../static/svg/conversation.svg'

const SvgImage = styled(Conversation)`
  height: 50vh;
`;

const Div = styled.div`
`;

const IllustrationSrc = (
  <SvgImage/>
);

const IndexPage = () => (
  <Layout>
    <main>
      <section className="hero text-light text-center">
        <div className="container-sm">
          <div className="hero-inner">
            <h1 className="hero-title h2-mobile mt-0 is-revealing">On-demand mentorship <br/> For aspiring creatives.</h1>
            <p className="hero-paragraph is-revealing">Find the perfect mentor to help you launch your creative career.</p>
            <p className="hero-cta is-revealing"><a className="button button-secondary button-shadow" href="/get-started">Get Started Now</a></p>
            <Div className="hero-media">
              {IllustrationSrc}
            </Div>
          </div>
        </div>
      </section>
      <Features/>
    </main>
  </Layout>
)

export default IndexPage
