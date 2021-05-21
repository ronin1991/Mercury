import React from 'react'
import img from './img/noWeather.png'
import './NoWeatherCard.scss'

export const NoWeatherCard = () => {
  return (
    <div className="NoWeatherCard">
      <img className="NoWeatherCard__img" src={img} alt="noWeather" width="160" height="160" />
      <span className="NoWeatherCard__title">
        Fill in all the fields and the weather will be displayed
      </span>
    </div>
  )
}
