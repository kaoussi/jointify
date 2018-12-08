import React from 'react'
import styled from 'styled-components'

const Card = styled.img``

const TeamCard = ({ name, content, image, position }) => (
  <div className="team-card text-center text-xs is-revealing">
    <div className="testimonial-inner">
      <div className="testimonial-main">
        <div className="testimonial-header">
          <Card src={image} alt={name} height="153px" width="153px" />
        </div>
        <div className="testimonial-body">
          <p>{content}</p>
        </div>
      </div>
      <div className="testimonial-footer">
        <div className="testimonial-name">{name}</div>
        <div className="testimonial-link">
          <p>{position}</p>
        </div>
      </div>
    </div>
  </div>
)

export default TeamCard
