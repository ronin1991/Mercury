import React, { useState } from 'react';
import { CardTitle } from '../Card/CardTitle';
import { Card } from '../Card';
import { CardForm } from '../CardForm';
import { Select } from '../Select';
import { NoWeatherCard } from '../NoWeatherCard';
import { Slider } from '../Slider/Slider';
import { useWeatherDaysData } from '../../useWeatherDaysData'
import { cities } from '../../assets/cities.js'
import './SevenDaysForecast.scss';

export const SevenDaysForecast = () => {

  const [selectedCity, setSelectedCity] = useState<any>();

  const cityWeatherData = useWeatherDaysData(selectedCity);

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