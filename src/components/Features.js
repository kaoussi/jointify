import React from 'react'
import FeatureCard from './FeatureCard'
import Icon1 from '../../static/svg/icon1.svg'
import Icon2 from '../../static/svg/icon2.svg'
import Icon3 from '../../static/svg/icon3.svg'
import Icon4 from '../../static/svg/icon4.svg'

const Icon1Src = <Icon1 />

const Icon2Src = <Icon2 />
const Icon3Src = <Icon3 />
const Icon4Src = <Icon4 />

const Features = () => (
  <section className="features section text-center">
    <div className="container">
      <div className="features-inner section-inner has-top-divider">
        <h2 className="section-title mt-0">What you get</h2>
        <div className="features-wrap">
          <FeatureCard
            title="Find your mentor"
            content="Browse to find the perfect mentor for you"
            icon={Icon1Src}
          />
          <FeatureCard
            title="Request a session"
            content="Request a session and tell us what would you like to cover"
            icon={Icon2Src}
          />
          <FeatureCard
            title="Learn Directly & Engage"
            content="Meet your mentor personally, or engage via 1-on-1 video chat"
            icon={Icon3Src}
          />
          <FeatureCard
            title="Follow up"
            content="After the session, your mentor will follow up with you, giving you notes and next steps"
            icon={Icon4Src}
          />
        </div>
      </div>
    </div>
  </section>
)

export default Features
