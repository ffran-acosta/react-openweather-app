import { getWeatherData } from "../api"
import { formatWeatherData } from "../utilities"


export const weatherData = async (searchParams) => {
    const currentData = await getWeatherData('weather', searchParams)
    return formatWeatherData(currentData)
}
