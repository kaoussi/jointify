import React from "react"
import styled from "styled-components"

import TeamCard from "./TeamCard"
import Souhail from "../images/mentors/souhail_kaoussi.png"
import Mohamed from "../images/mentors/mohamed_ayat_allah.png"
import Aya from "../images/mentors/aya_zaghnin.png"

const H2 = styled.h2`
  color: #fff;
`

const Team = () => (
  <section className="teams section">
    <div className="container">
      <div className="teams-inner section-inner">
        <H2 className="section-title mt-0 text-center">Meet Our Team</H2>
        <div className="teams-wrap">
          <TeamCard
            name="KAOUSSI Souhail"
            image={Souhail}
            position="Technical Team Lead, Co-Founder @Jointify"
            linkedin="https://www.linkedin.com/in/souhailkaoussi/"
          />
          <TeamCard
            name="ZAGHNIN Aya"
            image={Aya}
            position="VC Analyst, Co-Founder @Jointify"
            linkedin="https://www.linkedin.com/in/aya-zaghnin/"
          />
          <TeamCard
            name="AYAT ALLAH Mohammed"
            image={Mohamed}
            position="M&A Analyst, Business Developer @Jointify"
            linkedin="https://www.linkedin.com/in/mohamed-ayat-allah/"
          />
        </div>
      </div>
    </div>
  </section>
)

export default Team
