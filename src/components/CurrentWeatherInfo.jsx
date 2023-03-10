import { TbWind } from 'react-icons/tb';
import { FaTemperatureLow, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { BsDroplet } from 'react-icons/bs';
import { GiSunrise, GiSunset } from 'react-icons/gi';
import { formatToLocalTime, iconUrl } from '../services';


const Temperature = ({ weather: {
    description, 
    icon, 
    temp, 
    temp_min, 
    temp_max, 
    sunrise, 
    sunset, 
    speed, 
    humidity, 
    feels_like, 
    timezone
} }) => {
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>{description}</p>
            </div>
            <div className="flex flex-row items-center justify-between text-white py-3">
                <img
                    src={iconUrl(icon)}
                    alt="weather icon detail"
                    className="w-20"
                />
                <p className="text-5xl">{`${temp.toFixed()}°`}</p>
                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm justify-center items-center">
                        <FaTemperatureLow size={18} className='mr-1' />
                        Real fell:
                        <span className='font-medium ml-1' >{`${feels_like.toFixed()}°`}</span>
                    </div>
                    <div className="flex font-light text-sm justify-center items-center">
                        <BsDroplet size={18} className='mr-1' />
                        Humidity:
                        <span className='font-medium ml-1' >{humidity} %</span>
                    </div>
                    <div className="flex font-light text-sm justify-center items-center">
                        <TbWind size={18} className='mr-1' />
                        Wind:
                        <span className='font-medium ml-1' >{speed} km/h</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
                <GiSunrise />
                <p className='font-light'>
                    Rise:  <span className='font-medium ml-1'> {formatToLocalTime(sunrise, timezone, "hh:mm a")} </span>
                </p>
                <p className='font-light'>|</p>

                <GiSunset />
                <p className='font-light'>
                    Set:  <span className='font-medium ml-1'> {formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
                </p>
                <p className='font-light'>|</p>

                <FaArrowUp />
                <p className='font-light'>
                    High:  <span className='font-medium ml-1'> {`${temp_max.toFixed()}°`} </span>
                </p>
                <p className='font-light'>|</p>

                <FaArrowDown />
                <p className='font-light'>
                    Low:  <span className='font-medium ml-1'> {`${temp_min.toFixed()}°`} </span>
                </p>
                <p className='font-light'>|</p>
            </div>
        </div>
    )
}
export default Temperature