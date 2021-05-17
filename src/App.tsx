import React from 'react';
import './App.scss';
import Background from './components/Background/Background';
import Title from './components/Title/Title';
import Card from './components/Card/Card'


function App() {
  return (
    <div className="App">
      <Background/>
      <Card/>
      <Title></Title>
    </div>
  );
}

export default App;
