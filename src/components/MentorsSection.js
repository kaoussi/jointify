import React from "react"

import MentorCard from "./MentorCard"
import Card1 from "../images/mentors/abdelhak.png"
import Card2 from "../images/mentors/asmae.png"
import Card3 from "../images/mentors/ahmed.png"
import Card4 from "../images/mentors/ferdaouss.png"
import Card5 from "../images/mentors/soufiyane.png"

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
            name="GAIZ Asmae"
            image={Card2}
            position="Neuro Linguistic Programming Mentor"
          />
          <MentorCard
            name="El AZZABI Ahmed"
            image={Card3}
            position="Software Engineer @ Automattic"
          />
          <MentorCard
            name="NOUAMANI Ferdaous"
            image={Card4}
            position="General management and business plans"
          />
          <MentorCard
            name="BENAALI OUMJOUD Soufiyane"
            image={Card5}
            position="Junior auditor @ Groupe Accor"
          />
        </div>
      </div>
    </div>
  </section>
)

export default MentorsSection
