import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from 'react-scroll'

import Layout from '../components/layout'
import Features from '../components/Features'
import MentorsSection from '../components/MentorsSection'
import CtaSection from '../components/CtaFormSection'

const ConversationImage = () => (
  <StaticQuery
    query={graphql`
      query {
        conversation: file(relativePath: { eq: "conversation.png" }) {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.conversation.childImageSharp.fixed} />}
  />
)

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.scrollToTop = this.scrollToTop.bind(this)
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments)
    })

    Events.scrollEvent.register('end', function() {
      console.log('end', arguments)
    })
  }
  scrollToTop() {
    scroll.scrollToTop()
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register('end', () => {
        resolve()
        Events.scrollEvent.remove('end')
      })

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      })
    })

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container',
      })
    )
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }

  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
          <meta name="theme-color" content="#00eece" />
          <meta
            name="description"
            content="Jointify, On-Demand Mentorship Online"
          />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="google-site-verification"
            content="knQjJa_CVtlvp93SuAoN781hMGpuYARwz2Kc8ZATZpo"
          />
          <link rel="author" href="artisoft.ma" />
          <link rel="me" href="https://www.artisoft.ma" type="text/html" />
          <title>Jointify | Home</title>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,400i|PT+Serif:700"
            rel="stylesheet"
          />
          <html lang="en" dir="ltr" />
        </Helmet>
        <Layout>
          <main>
            <section className="hero text-light text-center">
              <div className="container-sm">
                <div className="hero-inner">
                  <h1 className="hero-title h2-mobile mt-0 is-revealing">
                    On-demand mentorship <br /> For aspiring creatives.
                  </h1>
                  <p className="hero-paragraph is-revealing">
                    Find the perfect mentor to help you launch your creative
                    career.
                  </p>
                  <p className="hero-cta is-revealing">
                    <Link
                      className="button button-secondary button-shadow test1"
                      to="test1"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Get Started
                    </Link>
                  </p>
                  <div className="hero-media">
                    <ConversationImage />
                  </div>
                </div>
              </div>
            </section>
            <Features />
            <MentorsSection />
            <Element name="test1" className="element">
              <CtaSection />
            </Element>
          </main>
        </Layout>
      </>
    )
  }
}

export default IndexPage
