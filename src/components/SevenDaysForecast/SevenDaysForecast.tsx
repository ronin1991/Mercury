import React from 'react'
import { CardTitle } from '../Card/CardTitle';
import { Card } from '../Card';
import { CardForm } from '../CardForm';
import { Select } from '../Select';
import { CardBody } from '../CardBody';
// import { NoWeatherCard } from '../NoWeatherCard';
import { Slider } from '../Slider/Slider';
import { CardWeather } from '../CardWeather/CardWeather';




export const SevenDaysForecast = () => {

  return (
    <Card>
      <CardTitle description='7 Days Forecast' isPositionBottom={true}/>
      <CardForm>
        <Select cities={['Самара', 'Тольятти', 'Саратов' , 'Казань', 'Краснодар']} isPositionBottom={true}>
          Select city
        </Select>
      </CardForm>
      <CardBody isPositionBottom={true}>
        {/* <NoWeatherCard></NoWeatherCard> */}
        <Slider>
          <CardWeather />
          <CardWeather />
          <CardWeather />
        </Slider>
      </CardBody>
    </Card>
    
  )
}