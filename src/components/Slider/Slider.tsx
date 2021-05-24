import React, { useState } from 'react'
import cn from 'classnames'
import './Slider.scss'
import { CardWeather } from '../CardWeather/CardWeather'

export interface ISliderProps {
  className: string,
  cardWeatherData: any
}

export const Slider: React.FC<ISliderProps> = ({className, cardWeatherData}: any) => {
  const [startIndex, setStartIndex] =useState(0);
  const step = 3;
  const endIndex = startIndex + step;

  const displaySelectedCard = () => {
    const selectedCardsData = cardWeatherData.slice(startIndex, endIndex);
    return selectedCardsData.map((data: any) => 
      <CardWeather data={data} key={data.dt} className=""/>
    )
  }

  const leftButtonClass =  cn('Slider__button', 'Slider__button_left', {'Slider__button_disabled': startIndex <= 0});
  const rightButtonClass =  cn('Slider__button', 'Slider__button_right', {'Slider__button_disabled': endIndex === cardWeatherData.length})
  
  
  return (
    <div className={cn('Slider', className)}>
      <div className={leftButtonClass} onClick={() => setStartIndex(startIndex -1)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M14.5858 12.0001L7.29286 19.293L8.70708 20.7072L17.4142 12.0001L8.70708 3.29297L7.29286 4.70718L14.5858 12.0001Z" fill="#8083A4"/>
        </svg>
      </div>
      {displaySelectedCard()}
      <div className={rightButtonClass} onClick={() => setStartIndex(startIndex + 1)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M14.5858 12.0001L7.29286 19.293L8.70708 20.7072L17.4142 12.0001L8.70708 3.29297L7.29286 4.70718L14.5858 12.0001Z" fill="#8083A4"/>
        </svg>
      </div>
    </div>
  )
}
