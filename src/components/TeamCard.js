import React from "react"
import { IconContext } from "react-icons"
import { FaLinkedin } from "react-icons/fa"

const TeamCard = ({ name, image, position, linkedin }) => (
  <div className="team-card text-center text-xs is-revealing">
    <div className="team-inner">
      <div className="team-main">
        <div className="team-header">
          <img src={image} alt={name} height="153px" width="153px" />
        </div>
        <div className="team-body">
          <p>{""}</p>
        </div>
      </div>
      <div className="team-footer">
        <div className="team-name">{name}</div>
        <div className="team-link">
          <p>{position}</p>
          <br />
          <IconContext.Provider
            value={{
              color: "#2867b2",
              className: "text-center-idb",
              size: "2em",
            }}
          >
            <a href={linkedin} rel="noopener noreferrer" target="_blank">
              <FaLinkedin />
            </a>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  </div>
)

export default TeamCard
