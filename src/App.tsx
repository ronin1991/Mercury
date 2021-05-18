import React from 'react';
import './App.scss';
import Background from './components/Background/Background';
import { Header } from './components/Header';
import { Card } from './components/Card';
import {CardTitle} from './components/Card/CardTitle/';
import { CardForm } from './components/CardForm';
import { Select } from './components/Select';
import { CardBody } from './components/CardBody'
import { NoWeatherCard } from './components/NoWeatherCard';
import { CardFooter } from './components/CardFooter'

function App() {
  return (
    <div className="App">
      <Background>
        <Header></Header>
        <Card>
          <CardTitle description='7 Days Forecast'/>
          <CardForm>
            <Select cities={['Самара', 'Тольятти', 'Саратов' , 'Казань', 'Краснодар']}>
              Select city
            </Select>
          </CardForm>
          <CardBody>
            <NoWeatherCard></NoWeatherCard>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </Background>
    </div>
  );
}

export default App;
