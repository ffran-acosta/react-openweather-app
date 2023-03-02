import { formatToLocalTime } from "./format.LocalTimeData"

export const formatForecastWeather =  (data) => {

    let { timezone, daily, hourly } = data

    daily = daily.slice(1, 6).map(x => {
        return {
            title: formatToLocalTime(x.dt, timezone, 'ccc'),
            temp: x.temp.day,
            icon: x.weather[0].icon
        }
    })

    hourly = hourly.slice(1, 6).map(x => {
        return {
            title: formatToLocalTime(x.dt, timezone, 'hh:mm a'),
            temp: x.temp,
            icon: x.weather[0].icon
        }
    })

    return {timezone, daily, hourly}

}