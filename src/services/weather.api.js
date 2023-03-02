import { getWeatherData } from "./api"
import { formatWeatherData } from "./utilities"

export const weatherData  = async (searchParams) => {
    const data = await getWeatherData('weather', searchParams)

    const {lat, lon} = data

    return formatWeatherData(data)
}

