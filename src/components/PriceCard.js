import React from 'react'
import { Link } from 'gatsby'

const PriceCard = ({
  title,
  price,
  buttonText,
  feature1,
  feature2,
  feature3,
  icon,
  color,
}) => {
  return (
    <div>
      <div className="pricing-table is-revealing">
        <div className="pricing-table-inner">
          <div className="pricing-table-main">
            <div className="pricing-table-header">
              <div className={`pricing-table-title mt-12 mb-16 text-${color}`}>
                {' '}
                {title}{' '}
              </div>{' '}
              <div className="pricing-table-price mb-24 pb-32">
                <span className="pricing-table-price-currency h3">$</span>
                <span className="pricing-table-price-amount h1">
                  {price}/month
                </span>{' '}
              </div>{' '}
            </div>
            <ul className="pricing-table-features list-reset text-xs mb-56">
              <li>
                <span className="list-icon">{icon}</span>{' '}
                <span> {feature1} </span>{' '}
              </li>{' '}
              <li>
                <span className="list-icon">{icon}</span>{' '}
                <span> {feature2} </span>{' '}
              </li>{' '}
              <li>
                <span className="list-icon">{icon}</span>{' '}
                <span> {feature3} </span>{' '}
              </li>{' '}
            </ul>{' '}
          </div>{' '}
          <div className="pricing-table-cta">
            <Link
              className={`button button-${color} button-block`}
              to="/get-started"
            >
              {buttonText}{' '}
            </Link>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  )
}

export default PriceCard
