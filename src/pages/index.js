import React from 'react'
import styled from 'styled-components'

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from 'react-scroll'

import Layout from '../components/layout'
import Features from '../components/Features'
import TeamTestimonial from '../components/TeamTestimonial'
import CtaSection from '../components/CtaFormSection'
import Conversation from '../../static/svg/conversation.svg'

const SvgImage = styled(Conversation)`
  height: 50vh;
`

const Div = styled.div``

const IllustrationSrc = <SvgImage />

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
                <Div className="hero-media">{IllustrationSrc}</Div>
              </div>
            </div>
          </section>
          <Features />
          <TeamTestimonial />
          <Element name="test1" className="element">
            <CtaSection />
          </Element>
        </main>
      </Layout>
    )
  }
}

export default IndexPage
