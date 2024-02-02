import React from 'react'
import v1 from "../../Assests/video/v1.mp4"

const MainBanner = () => {
  return (
    <>
    
    <div className='relative flex justify-center items-center bg-gray-100 ' style={{width:"100%",height:"95vh"}}>
        <video autoPlay loop muted src={v1} style={{width:"90%",height:"80%"}}  className='object-cover -mt-8' ></video>

        <div className='absolute flex flex-col justify-center items-center gap-y-4'>
            <h1 className='text-white font-bold max-xl:text-4xl text-7xl'>Take That, Weather</h1>

            <p className='text-white max-sm:text-center font-bold text-md max-sm:text-sm max-sm:w-[370px]'>Water-repellent Mizzles are cozy inside and extra grippy outside.</p>

            <div className=' flex mt-10 gap-8'>
              <button className='bg-white max-lg:text-xs text-sm max-lg:w-32 max-lg:h-8  font-semibold  text-black w-44 h-10 rounded-sm transition-all duration-300 hover:bg-black hover:text-white'> SHOP MEN</button>
              
              <button className='bg-white max-lg:text-xs text-sm max-lg:w-32 max-lg:h-8 font-semibold text-black w-44 h-10 rounded-sm transition-all duration-300 hover:bg-black hover:text-white' >SHOP WOMEN</button>
            </div>
        </div>

    </div>
    </>
  )
}

export default MainBanner
