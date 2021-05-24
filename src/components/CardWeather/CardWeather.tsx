import React from 'react'
import cn from 'classnames'
import './CardWeather.scss'
export interface ICardWeatherProps {
  data: any,
  className: any;
}

const monthShortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

export const CardWeather: React.FC<ICardWeatherProps> = ({ data, className }) => {
  const { temp, dt, icon } = data
  // const icon = data.weather[0].icon

  const formatDate = (dateSecond: any) => {
    const date = new Date(dateSecond * 1000)

    const day = date.getDate()
    const month = monthShortNames[date.getMonth()]
    const year = date.getFullYear()

    return `${day} ${month} ${year}`
  }

  return (
    <div className={cn('CardWeather', className)}>
      <div className="CardWeather__date">
        {formatDate(dt)}
      </div>
      <div className="CardWeather__icon">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather"/>
      </div>
      <div className="CardWeather__temperature">
        +{Math.floor(temp.day)}&deg;
      </div>
    </div>
  )
}
