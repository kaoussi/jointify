import React from 'react'

import TestimonialCard from './TestimonialCard'
import Card1 from '../images/mentors/souhail.jpg'
import Card2 from '../images/mentors/ismail.jpg'
import Card3 from '../images/mentors/aya.jpeg'

const TeamTestimonial = () => (
  <section className="testimonials section">
    <div className="container">
      <div className="ftestimonials-inner section-inner">
        <h2 className="section-title mt-0 text-center">Our Mentors</h2>
        <div className="testimonials-wrap">
          <TestimonialCard
            name="KAOUSSI Souhail"
            content=""
            image={Card1}
            link="https://www.artisoft.ma"
            position="Ceo & Founder @Artisoft.ma"
          />
          <TestimonialCard
            name="ZAGHNIN Aya"
            content=""
            image={Card3}
            link="https://www.artisoft.ma"
            position="Business consultant @Artisoft.ma"
          />
          <TestimonialCard
            name="GHALLOU Ismail"
            content=""
            image={Card2}
            link="https://www.obytes.com"
            position="FullStack Web developer @Obytes"
          />
        </div>
      </div>
    </div>
  </section>
)

export default TeamTestimonial
