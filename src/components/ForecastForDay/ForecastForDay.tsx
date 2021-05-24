import React, { useState } from 'react'
import { CardTitle } from '../Card/CardTitle'
import { Card } from '../Card'
import { CardForm } from '../CardForm'
import { Select } from '../Select'
import { NoWeatherCard } from '../NoWeatherCard'
import { Calendar } from '../Calendar'
import { cities } from '../../assets/cities'
import { useForecastForDayData } from './useForecastForDayData'
import { CardWeather } from '../CardWeather/CardWeather'
import './ForecastForDay.scss'

export const ForecastForDay = () => {
  const [selectedCity, setSelectedCity] = useState()
  const [selectedDay, setSelectedDay] = useState()

  const cityWeatherData = useForecastForDayData(selectedCity, selectedDay)

  const cardWeatherData = () => {
    const { dt, temp } = cityWeatherData.current
    const icon = cityWeatherData.current.weather[0].icon
    return { dt, temp: { day: temp }, icon }
  }

  return (
    <Card>
      <CardTitle className="ForecastForDay__title">Forecast for a Date in the Past</CardTitle>
      <CardForm>
        <Select options={ cities } className="ForecastForDay__select" onSelect={ setSelectedCity }>
          Select city
        </Select>
        <Calendar onSelectDay={setSelectedDay} />
      </CardForm>

      {cityWeatherData
        ? <CardWeather data={cardWeatherData()} className="ForecastForDay__card" />
        : <NoWeatherCard className="ForecastForDay__noCard"/>
      }
    </Card>

  )
}
