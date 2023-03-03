import './App.css'
import React, { useState, useEffect } from 'react';
import { CurrentWeatherInfo, Forecast, Inputs, TimeLocation, TopButtons } from './components';
import { dataResponse } from './services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [query, setQuery] = useState({ q: 'pergamino' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location."
      toast.info("Fetching weather for " + message)
      const data = await dataResponse({...query, units})
      toast.success(`Successfully fetched weather for ${data.name}, ${data.country}.`)
      setWeather(data)
    }
    fetchWeather()
  }, [query, units])

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  }

  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeLocation weather={weather} />
          <CurrentWeatherInfo weather={weather} />
          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="weak forecast" items={weather.daily} />
        </div>
      )}
      <ToastContainer 
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
      />
    </div>
  )
}

export default App
