import React from 'react'
import './App.scss'
import Background from './components/Background/Background'
import { ForecastForDay } from './components/ForecastForDay/ForecastForDay'
import { Header } from './components/Header'
import { SevenDaysForecast } from './components/SevenDaysForecast/SevenDaysForecast'

function App () {
  return (
    <div className="App">
      <Background>
        <div className="App__wrapper">
          <Header className="App__header"></Header>
          <main className="App__main">
            <SevenDaysForecast />
            <ForecastForDay />
          </main>
          <footer className="App__footer">C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT</footer>
        </div>

      </Background>
    </div>
  )
}

export default App
