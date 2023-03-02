import './App.css'
import React from 'react';
import { CurrentWeatherInfo, Forecast, Inputs, TimeLocation, TopButtons } from './components';


function App() {

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons/>
      <Inputs/>
      <TimeLocation/>
      <CurrentWeatherInfo/>
      <Forecast title="hourly forecast"/>
      <Forecast title="weak forecast" />
    </div>
  )
}

export default App
