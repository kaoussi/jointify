import React from 'react'
import styled from 'styled-components'

import TeamCard from './TeamCard'
import Card1 from '../images/mentors/souhail.jpg'
import Card3 from '../images/mentors/aya.jpeg'

const H2 = styled.h2`
  color: #fff;
`

const Team = () => (
  <section className="testimonials section">
    <div className="container">
      <div className="ftestimonials-inner section-inner">
        <H2 className="section-title mt-0 text-center">Meet Our Team</H2>
        <div className="testimonials-wrap">
          <TeamCard
            name="KAOUSSI Souhail"
            content=""
            image={Card1}
            position="Co-Founder & CTO"
          />
          <TeamCard
            name="ZAGHNIN Aya"
            content=""
            image={Card3}
            position="Co-Founder"
          />
        </div>
      </div>
    </div>
  </section>
)

export default Team
