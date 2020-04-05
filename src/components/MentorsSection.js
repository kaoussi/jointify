import React from "react"

import MentorCard from "./MentorCard"
import abdelhak from "../images/mentors/abdelhak.png"
import asmae from "../images/mentors/asmae_gaiz.png"
import ahmed from "../images/mentors/ahmed.png"
import fedaous from "../images/mentors/ferdaouss.png"
import soufyane from "../images/mentors/soufiyane_oumjoud.png"
import sara from "../images/mentors/sara.png"
import chaimae from "../images/mentors/chaimaa_elouahabi.png"

const MentorsSection = () => (
  <section className="mentors section">
    <div className="container">
      <div className="mentors-inner section-inner">
        <h2 className="section-title mt-0 text-center">Some Of Our Mentors</h2>
        <div className="mentors-wrap">
          <MentorCard
            name="MAHMOUDI Abdelhak"
            image={abdelhak}
            position="Machine Learning"
          />
          <MentorCard
            name="GAIZ Asmae"
            image={asmae}
            position="Neuro Linguistic Programming"
          />
          <MentorCard
            name="El AZZABI Ahmed"
            image={ahmed}
            position="Software Engineering"
          />
          <MentorCard
            name="NOUAMANI Ferdaous"
            image={fedaous}
            position="Management"
          />
          <MentorCard
            name="BENAALI OUMJOUD Soufiyane"
            image={soufyane}
            position="Audit & Taxes"
          />
          <MentorCard name="LAAMARTI Sara" image={sara} position="Marketing" />
          <MentorCard
            name="ELOUAHABI Chaimâa"
            image={chaimae}
            position="Communication"
          />
        </div>
      </div>
    </div>
  </section>
)

export default MentorsSection
