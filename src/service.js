import axios from 'axios'

export const getData = async (itemData, numberDays) => {

  const { lat, lon } = itemData;
  const days = {
    seven: 'alerts,current,minutely,hourly',
    one: 'dt=1586468027'
  }

  const createUrl = () => {
    const link = new URL('https://api.openweathermap.org/data/2.5/onecall?');
    link.searchParams.set('units', 'metric');
    link.searchParams.set('lat', lat);
    link.searchParams.set('lon', lon);
    link.searchParams.set('exclude', 'exclude');
    link.searchParams.set('appid', '94f6f0535fb640ce9b8b030ad3d5f5ee');

  }
  // exclude=alerts,current,minutely,hourly

  const {data} = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?units=metric&lat=${lat}&lon=${lon}&exclude=alerts,current,minutely,hourly&appid=94f6f0535fb640ce9b8b030ad3d5f5ee`
  )
}