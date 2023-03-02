import { getForecastData } from "../api"
import { formatForecastWeather } from "../utilities"

export const forecastData = async () => {
    const data = await getForecastData()
    return formatForecastWeather(data)
}