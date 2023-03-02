import { weatherData } from "../data"
import { getWeatherData } from "./getWeatherData"

export const getForecastData = async (searchParams) => {
    const data = await weatherData(searchParams)
    const { lat, lon } = data
    const res = await getWeatherData('onecall', {
        lat,
        lon,
        exclude: "current,minutely,alerts",
        units: searchParams.units,
    })
    return res
}


