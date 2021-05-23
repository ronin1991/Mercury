import React, { useState } from 'react';
import { CardTitle } from '../Card/CardTitle';
import { Card } from '../Card';
import { CardForm } from '../CardForm';
import { Select } from '../Select';
import { NoWeatherCard } from '../NoWeatherCard';
import { Slider } from '../Slider/Slider';
import { useSevenDaysForecastData } from './useSevenDaysForecastData'
import './SevenDaysForecast.scss';


const cities = [
    {name: 'Самара', lat: 53.195873, lon: 50.100193}, 
    {name: 'Тольятти', lat: 53.507836, lon: 49.420393}, 
    {name:'Саратов', lat: 51.533557, lon: 46.034257} , 
    {name:'Казань', lat: 55.796127, lon: 49.106405}, 
    {name:'Краснодар', lat: 45.035470, lon: 38.975313}
  ];


export const SevenDaysForecast = () => {

  const [selectedCity, setSelectedCity] = useState<any>();

  const cityWeatherData = useSevenDaysForecastData(selectedCity);

  return (
    <Card>
      <CardTitle className="SevenDaysForecast__title">7 Days Forecast</CardTitle>
      <CardForm>
        <Select options={ cities } className="SevenDaysForecast__select" onSelect={setSelectedCity}>
          Select city
        </Select>
      </CardForm>
       {cityWeatherData 
          ?<Slider className="SevenDaysForecast__slider" cardWeatherData ={cityWeatherData.daily}/>
          : <NoWeatherCard className="SevenDaysForecast__noWeather" />}
    </Card>
  )
}