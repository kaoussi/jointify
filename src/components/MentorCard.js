import React from "react"
import styled from "styled-components"

const Card = styled.img`
  width: 140px;
  height: 140px;
`

const MentorCard = ({ name, content, image, position }) => (
  <div className="mentor text-center text-xs is-revealing">
    <div className="">
      <div className="mentor-main">
        <div className="mentor-header">
          <Card src={image} alt={name} />
        </div>
        <div className="mentor-body">
          <p>{content}</p>
        </div>
      </div>
      <div className="mentor-footer">
        <div className="mentor-name">{name}</div>
        <div className="mentor-link">
          <p>{position}</p>
        </div>
      </div>
    </div>
  </div>
)

export default MentorCard
