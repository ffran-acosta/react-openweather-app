import { weatherData } from "../data/weatherData"
import { getWeatherData } from "./getWeatherData"


export const getForecastData = async () => {
    const data = await weatherData({ q: 'london' })
    const { lat, lon } = data
    const res = await getWeatherData('onecall', {
        lat,
        lon,
        exclude: "current,minutely,alerts",
        // units: searchParams.units,
    })
    return res
}


