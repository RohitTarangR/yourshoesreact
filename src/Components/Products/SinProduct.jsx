import { ShoppingCart, ShoppingCartCheckout, Star } from '@mui/icons-material';
import React from 'react';



const SinProduct = ({FeaturedProd}) => {
  return (
    <>
      <div className="relative group">
        <div className="overflow-hidden aspect-w-1 aspect-h-1">
          <img
            className="object-cover w-full h-72 transition-all duration-300 group-hover:scale-125"
            src={FeaturedProd.imgUrl}
            alt=""
          />
        </div>
        <div className="absolute left-3 top-3">
          <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">
            Sale
          </p>
        </div>
        <div className="flex items-start justify-between mt-4 space-x-4">
          <div>
            <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
              <p href="#" title="">
                {FeaturedProd.title}
                <span className="absolute inset-0" aria-hidden="true"></span>
              </p>
            </h3>
            <div className="flex items-center mt-2.5 space-x-px">
              <Star className="text-yellow-500 text-xs" />
              <Star className="text-yellow-500 text-xs" />
              <Star className="text-yellow-500 text-xs" />
              <Star className="text-yellow-500 text-xs" />
              <Star className="text-yellow-500 text-xs" />
            </div>
          </div>

          <div className="text-right">
            <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
              {FeaturedProd.price}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center relative">
          <button className="font-bold w-full bg-black h-[40px] my-2 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-300 before:to-zinc-300 hover:text-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#fff]">
           Add to Cart
            <ShoppingCart className="mx-2" />
          </button>

          <button className="font-bold w-full  bg-zinc-300 h-[40px] my-1 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-black before:to-black hover:text-zinc-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#000]">
            Buy Now
            <ShoppingCartCheckout className="mx-2" />
          </button>
        </div>
      </div>
    </>
  );
}

export default SinProduct