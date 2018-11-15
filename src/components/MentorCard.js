import React from 'react'

const MentorCard = ({ title, content, image }) => (
  <div className="feature-extended">
    <div className="feature-extended-image is-revealing">
      <img src={image} alt=""/>
    </div>
    <div className="feature-extended-body">
      <h3 className="mt-0">{title}</h3>
      <p>{content}</p>
    </div>
  </div>
)

export default MentorCard