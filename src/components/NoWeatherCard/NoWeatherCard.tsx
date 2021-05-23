import React from 'react'
import cn from 'classnames'
import img from './img/noWeather.png'
import './NoWeatherCard.scss'

export interface INoWeatherCardProps {
  className: String,
}

export const NoWeatherCard: React.FC<INoWeatherCardProps> = ({className}) => {
  return (
    <div className={cn('NoWeatherCard', className)}>
      <img className="NoWeatherCard__img" src={img} alt="noWeather" width="160" height="160" />
      <span className="NoWeatherCard__title">
        Fill in all the fields and the weather will be displayed
      </span>
    </div>
  )
}
