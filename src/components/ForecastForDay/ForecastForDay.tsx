import React from 'react'
import { CardTitle } from '../Card/CardTitle';
import { Card } from '../Card';
import { CardForm } from '../CardForm';
import { Select } from '../Select';
import { CardBody } from '../CardBody';
// import { NoWeatherCard } from '../NoWeatherCard';
import { Calendar } from '../Calendar';
import './ForecastForDay.scss'
// import { Slider } from '../Slider/Slider';
// import { CardWeather } from '../CardWeather/CardWeather';



const cities = ['Самара', 'Тольятти', 'Саратов' , 'Казань', 'Краснодар'];

export const ForecastForDay = () => {

  // const [selectedCity, setSelectedCity] = useState(null);



  return (
    <Card>
      <CardTitle className="ForecastForDay__title">Forecast for a Date in the Past</CardTitle>
      <CardForm>
        <Select options={ cities } className="ForecastForDay__select" onSelect="">
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