import { useEffect, useState } from 'react';
import axios from 'axios'

export const useForecastForDayData = (city: any) => {
  
  const [sevenDaysForecastData, setSevenDaysForecastData] = useState<any>();

  useEffect( () => {
    const getForecastData = async () => {
      // console.log(city)
      const { lat, lon } = city;
      const {data} = await axios.get(
        'http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=60.99&lon=30.9&dt=1586468027&appid=94f6f0535fb640ce9b8b030ad3d5f5ee'
      ) 
      
      console.log(data)
        setSevenDaysForecastData(data)
    }

    if (city) {
      getForecastData()
    }
    
  }, [city])

  return sevenDaysForecastData;
}
// `https://api.openweathermap.org/data/2.5/onecall/timemachine?units=metric&lat=${lat}&lon=${lon}&dt=1586468027&appid=94f6f0535fb640ce9b8b030ad3d5f5ee`