import React from 'react'
import { CardTitle } from '../Card/CardTitle';
import { Card } from '../Card';
import { CardForm } from '../CardForm';
import { Select } from '../Select';
import { CardBody } from '../CardBody';
// import { NoWeatherCard } from '../NoWeatherCard';
import { Calendar } from '../Calendar';
// import { Slider } from '../Slider/Slider';
// import { CardWeather } from '../CardWeather/CardWeather';





export const ForecastForDay = () => {

  return (
    <Card>
      <CardTitle description='Forecast for a Date in the Past' isPositionBottom={true}/>
      <CardForm>
        <Select cities={['Самара', 'Тольятти', 'Саратов' , 'Казань', 'Краснодар']} isPositionBottom={true}>
          Select city
        </Select>
        <Calendar />
      </CardForm>
      <CardBody isPositionBottom={true}>

        {/* <NoWeatherCard></NoWeatherCard> */}
      </CardBody>
    </Card>
    
  )
}