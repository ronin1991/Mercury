// @ts-nocheck
import React from 'react'
import './cardTitle.scss'

function CardTitle(props) {
  return (
    <div className="card__title">
      {props.description}
    </div>
  )
}

export default CardTitle
