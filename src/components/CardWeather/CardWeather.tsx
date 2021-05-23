import React from 'react'
import './CardWeather.scss'

export interface ICardWeatherProps {
  data: any;
}

var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const CardWeather: React.FC<ICardWeatherProps> = ({data}) => {
  const { temp, dt } = data;
  const icon = data.weather[0].icon;

  const formatDate = (dateSecond: any) => {
    const date = new Date (dateSecond * 1000);
    
    const day = date.getDate();
    const month = monthShortNames[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`
  }
  
  
  return (
    <div className="CardWeather">
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
