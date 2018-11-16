import React from 'react'
import PriceCard from './PriceCard'

import Check from '../../static/svg/check.svg'

const Icon = <Check />

const Pricing = () => (
  <section className="pricing section">
    <div className="container">
      <div className="pricing-inner section-inner has-top-divider">
        <h2 className="section-title mt-0 text-center">Pricing</h2>
        <div className="pricing-tables-wrap">
          <PriceCard
            title="Students"
            price="19"
            buttonText="Get Started"
            feature1="1 free mentorship"
            feature2="1-on-1 meetings one hour a week"
            feature3="Access to advanced content"
            color="secondary"
            icon={Icon}
          />
          <PriceCard
            title="Professionals"
            price="99"
            buttonText="Get Started"
            feature1="Access to Business account"
            feature2="1-on-1 meetings 3 hours a week"
            feature3="Access to private events"
            color="primary"
            icon={Icon}
          />
        </div>
      </div>
    </div>
  </section>
)

export default Pricing
