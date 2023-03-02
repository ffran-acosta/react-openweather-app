import './App.css'
import React, { useState, useEffect } from 'react';
import { CurrentWeatherInfo, Forecast, Inputs, TimeLocation, TopButtons } from './components';
import { dataResponse } from './services';

function App() {

  const [query, setQuery] = useState({ q: 'london' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await dataResponse({...query, units})
      setWeather(data)
    }
    fetchWeather()
  }, [query, units])

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons/>
      <Inputs/>

      {weather && (
        <div>
          <TimeLocation weather={weather} />
          <CurrentWeatherInfo weather={weather} />
          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="weak forecast" items={weather.daily} />
        </div>
      )}

    </div>
  )
}

export default App
