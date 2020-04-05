import React from "react"

import {
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll"

import Head from "../components/Head"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Covid from "../components/Covid"
import MentorsSection from "../components/MentorsSection"
import CtaSection from "../components/CtaFormSection"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.scrollToTop = this.scrollToTop.bind(this)
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments)
    })

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments)
    })
  }
  scrollToTop() {
    scroll.scrollToTop()
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve()
        Events.scrollEvent.remove("end")
      })

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      })
    })

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
      })
    )
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin")
    Events.scrollEvent.remove("end")
  }

  render() {
    return (
      <>
        <Head />
        <Layout>
          <main>
            <Hero />
            <Features />
            <Element name="requirements" className="element">
              <Covid />
            </Element>
            <MentorsSection />
            <Element name="callToAction" className="element">
              <CtaSection />
            </Element>
          </main>
        </Layout>
      </>
    )
  }
}

export default IndexPage
