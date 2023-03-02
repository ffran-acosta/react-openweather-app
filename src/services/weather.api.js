const API_KEY = 'db60a324c334ac86ba951e414744cbb0'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

export const getWeatherData = async (info, searchParams) => {
    const url = new URL(BASE_URL + info)
    url.search = new URLSearchParams({...searchParams, appid: API_KEY})
    console.log(url);
    try {
        const res = await fetch(url)
        return res.json()
    } catch (error) {
        console.log(error)
    }
}