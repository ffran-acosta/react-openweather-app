import { forecastData, weatherData } from "./data"

export const dataResponse = async (searchParams) => {
    const weather = await weatherData(searchParams)
    const forecast = await forecastData(searchParams)
    return { ...weather, ...forecast }
}