import React from 'react'
import styled from 'styled-components'

const Card = styled.img``

const testimonialCard = ({ name, content, image, position, link }) => (
  <div className="testimonial text-center text-xs is-revealing">
    <div className="testimonial-inner">
      <div className="testimonial-main">
        <div className="testimonial-header">
          <Card src={image} alt="" />
        </div>
        <div className="testimonial-body">
          <p>{content}</p>
        </div>
      </div>
      <div className="testimonial-footer">
        <div className="testimonial-name">{name}</div>
        <div className="testimonial-link">
          <a href={link}>{position}</a>
        </div>
      </div>
    </div>
  </div>
)

export default testimonialCard
