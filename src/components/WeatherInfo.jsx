import { TbWind } from 'react-icons/tb';
import { FaTemperatureLow, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { BsDroplet } from 'react-icons/bs';
import { GiSunrise, GiSunset } from 'react-icons/gi';


const Temperature = () => {
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>Cloudy</p>
            </div>
            <div className="flex flex-row items-center justify-between text-white py-3">
                <img 
                    src="" 
                    alt="" 
                    className="w-20" 
                />
                <p className="text-5xl">34°</p>
                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm justify-center items-center">
                        <FaTemperatureLow size={18} className='mr-1' />
                        Real fell: 
                        <span className='font-medium ml-1' >32°</span>
                    </div>
                    <div className="flex font-light text-sm justify-center items-center">
                        <BsDroplet size={18} className='mr-1' />
                        Humidity:
                        <span className='font-medium ml-1' >50 %</span>
                    </div>
                    <div className="flex font-light text-sm justify-center items-center">
                        <TbWind size={18} className='mr-1' />
                        Wind:
                        <span className='font-medium ml-1' >11 km/h</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
                <GiSunrise/>
                <p className='font-light'> 
                    Rise:  <span className='font-medium ml-1'> 06:45 AM </span> 
                </p>
                <p className='font-light'>|</p>

                <GiSunset />
                <p className='font-light'>
                    Set:  <span className='font-medium ml-1'> 06:45 AM </span>
                </p>
                <p className='font-light'>|</p>

                <FaArrowUp />
                <p className='font-light'>
                    High:  <span className='font-medium ml-1'> 35° </span>
                </p>
                <p className='font-light'>|</p>

                <FaArrowDown />
                <p className='font-light'>
                    Low:  <span className='font-medium ml-1'> 25° </span>
                </p>
                <p className='font-light'>|</p>
            </div>
        </div>
    )
}
export default Temperature