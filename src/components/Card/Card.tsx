import React from 'react'
import './card.scss'
import CardTitle from '../CardTitle/CardTitle'
import Select from '../Select/Select'

function Card() {
  return (
    <div className="card">
      <CardTitle description='7 Days Forecast'></CardTitle>
      <Select />
    </div>
  )
}

export default Card
