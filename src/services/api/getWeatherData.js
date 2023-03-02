import { API_KEY, BASE_URL } from "../utilities/url"

export const getWeatherData = async (info, searchParams) => {
    const url = new URL(BASE_URL + info)
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })
    try {
        const res = await fetch(url)
        return res.json()
    } catch (error) {
        console.log(error)
    }
}