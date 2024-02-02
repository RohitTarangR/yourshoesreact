import React from 'react'
import SingleProduct from '../Products/SingleProduct';
import { FavProduct } from '../../data';






const Favorites = () => {
  return (
    <>
      <div className="flex flex-col  items-center">
        <div>
          <h1 className="flex text-4xl font-bold justify-center m-8">
            Our Favorites
          </h1>

          <div className="flex gap-72 max-xl:gap-52 max-lg:gap-32 max-md:gap-20 max-lg:text-base max-md:text-sm max-sm:gap-10 font-bold text-lg">
            <p className='cursor-pointer'>FOR EVERYDAY</p>
            <p className='cursor-pointer'>FOR ACTIVITY</p>
            <p className='cursor-pointer'>FOR THE RAIN</p>
          </div>
        </div>
        <hr className="bg-[#D3D4D5] h-[3px] w-[80%] my-5 mx-auto" />
 
        <div>
          <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-10">
            {FavProduct.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Favorites
