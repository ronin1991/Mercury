import { useEffect, useState } from 'react'
import axios from 'axios'

export const useWeatherDaysData = (city: any) => {
  const [sevenDaysForecastData, setSevenDaysForecastData] = useState<any>()

  useEffect(() => {
    const getForecastData = async () => {
      const { lat, lon } = city
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?units=metric&lat=${lat}&lon=${lon}&exclude=alerts,current,minutely,hourly&appid=94f6f0535fb640ce9b8b030ad3d5f5ee`
      )
      setSevenDaysForecastData(data)
    }

    if (city) {
      getForecastData()
    }
  }, [city])

  return sevenDaysForecastData
}
