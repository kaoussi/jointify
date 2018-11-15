import React from 'react'

const Card = ({ title, content, icon }) => (
  <div className="feature is-revealing">
  <div className="feature-inner">
      <div className="feature-icon">
          {icon}
      </div>
      <h4 className="feature-title h3-mobile">{title}</h4>
      <p className="text-sm">{content}</p>
  </div>
</div>
)

export default Card