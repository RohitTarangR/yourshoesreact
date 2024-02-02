import React from 'react'
import {OurStore} from "../../data"


const Stores = () => {
  return (
    <>
    <div className='bg-[#e5e9eb] pt-5 pb-16'>

      <h1 className="text-4xl font-bold text-center my-10 mx-8">Visit Our Stores</h1>

      <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 place-items-center'>
        {OurStore.map((Store,key)=>{
            return (
              <>
                <div className="">
                  <img
                    src={Store.img}
                    alt=""
                    width={"400px"}
                    className="mx-5 hover:brightness-75 max-md:py-2 max-sm:w-72 transition-all duration-300 max-xl:w-72 max-lg:w-52"
                  />
                </div>
              </>
            );
      })}
      </div>
    </div>
    <div>
    </div>
    </>
  );
}

export default Stores