import React from 'react'

import MentorCard from './MentorCard'
import Card1 from '../images/mentors/abdelhak.jpeg'
import Card2 from '../images/mentors/hamza.jpg'
import Card3 from '../images/mentors/smakosh.jpg'

const MentorsSection = () => (
  <section className="testimonials section">
    <div className="container">
      <div className="ftestimonials-inner section-inner">
        <h2 className="section-title mt-0 text-center">Some Of Our Mentors</h2>
        <div className="testimonials-wrap">
          <MentorCard
            name="MAHMOUDI Abdelhak"
            image={Card1}
            position="Machine Learning Consultant"
          />
          <MentorCard
            name="GUESSOUS Hamza"
            image={Card2}
            position="Professional Trader"
          />
          <MentorCard
            name="GHALLOU Ismail (Smakosh) "
            image={Card3}
            position="Full stack Developer & Designer"
          />
        </div>
      </div>
    </div>
  </section>
)

export default MentorsSection
