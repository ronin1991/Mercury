import { useEffect, useState } from 'react'
import axios from 'axios'

export const useForecastForDayData = (city: any, day: any) => {
  const [sevenDaysForecastData, setSevenDaysForecastData] = useState<any>()

  useEffect(() => {
    const getForecastData = async () => {
      const { lat, lon } = city
      const dt = Date.parse(day) / 1000

      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/onecall/timemachine?units=metric&lat=${lat}&lon=${lon}&dt=${dt}&appid=94f6f0535fb640ce9b8b030ad3d5f5ee`
      )

      console.log(data)
      setSevenDaysForecastData(data)
    }

    if (city && day) {
      getForecastData()
    }
  }, [city, day])

  return sevenDaysForecastData
}
