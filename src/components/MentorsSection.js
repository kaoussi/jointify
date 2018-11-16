import React from 'react'

import MentorCard from './MentorCard'
import Card1 from '../images/mentors/souhail.jpg'
import Card2 from '../images/mentors/ismail.jpg'
import Card3 from '../images/mentors/aya.jpeg'

const MentorsSection = () => (
  <section className="features-extended section">
    <div className="container">
      <div className="features-extended-inner section-inner has-top-divider">
        <div className="features-extended-header text-center">
          <div className="container-sm">
            <h2 className="section-title mt-0">Meet Our Mentors</h2>
          </div>
        </div>
        <MentorCard
          title="Zaghnin Aya"
          content="Business consultant @Artisoft.ma"
          image={Card3}
        />
        <MentorCard
          title="KAOUSSI Souhail"
          content="Ceo & Founder @Artisoft.ma"
          image={Card1}
        />
        <MentorCard
          title="GHALLOU Ismail"
          content="FullStack Web Developer @Obytes"
          image={Card2}
        />
      </div>
    </div>
  </section>
)

export default MentorsSection
