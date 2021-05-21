import React from 'react'
import './CardWeather.scss'

export const CardWeather = () => {
  return (
    <div className="CardWeather">
      <div className="CardWeather__date">
        27 sep 2021
      </div>
      <div className="CardWeather__icon">
        Погода
      </div>
      <div className="CardWeather__temperature">
        +17&deg;
      </div>
    </div>
  )
}
