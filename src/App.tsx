import React, { useEffect } from 'react';
import './App.scss';
import Background from './components/Background/Background';
import { ForecastForDay } from './components/ForecastForDay/ForecastForDay';
import { Header } from './components/Header';
import { SevenDaysForecast } from './components/SevenDaysForecast/SevenDaysForecast';
import axios from 'axios'

function App() {
  useEffect(() => {
    console.log('hi')
  })

  axios.get(
    'https://api.openweathermap.org/data/2.5/onecall?lat=45.035470&lon=38.975313&exclude=minutely,hourly,current,alerts&appid=94f6f0535fb640ce9b8b030ad3d5f5ee&units=metric'
    )
    .then(res => console.log(res.data));

  return (
    <div className="App">
      <Background>
        <Header></Header>
        <main>
          <SevenDaysForecast />
          <ForecastForDay />
        </main>
      </Background>
    </div>
  );
}

export default App;
