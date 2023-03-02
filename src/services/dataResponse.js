import { forecastData, weatherData } from "./data"

export const dataResponse = async () => {
    const weather = await weatherData({ q: 'london' })
    const forecast = await forecastData()
    return { ...weather, ...forecast }
}