import React from 'react'
import './Card.css'

const Card = ({emoji, heading, detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt={`${heading} service icon`} />
        <span>{heading}</span>
        <span>{detail}</span>
        <a href="#Contact" className="c-link">Get in Touch <span className="arrow">→</span></a>
    </div>
  )
}

export default Card