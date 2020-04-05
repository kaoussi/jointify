import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "react-scroll"

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

const Hero = () => (
  <section className="hero text-light text-center">
    <div className="container-sm">
      <div className="hero-inner">
        <h1 className="hero-title h2-mobile mt-0 is-revealing">
          On-demand mentorship <br /> For aspiring creatives.
        </h1>
        <p className="hero-paragraph is-revealing">
          Find the perfect mentor to help you launch your creative career.
        </p>
        <p className="hero-cta is-revealing">
          <Link
            className="button button-secondary button-shadow callToAction"
            to="callToAction"
            spy={true}
            smooth={true}
            duration={1000}
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
)

export default Hero
