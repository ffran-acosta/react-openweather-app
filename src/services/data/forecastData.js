import { getForecastData } from "../api"
import { formatForecastWeather } from "../utilities"

export const forecastData = async (searchParams) => {
    const data = await getForecastData(searchParams)
    return formatForecastWeather(data)
}