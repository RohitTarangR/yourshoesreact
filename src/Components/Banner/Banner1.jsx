import React from 'react'
import { Link } from 'react-router-dom';

const Banner1 = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-4 mt-10 py-14 bg-[#f3f4f6] max-md:p-10 max-md:text-center">
        <h1 className="text-black font-bold max-lg:text-2xl text-4xl">
          The Shade of Things to Come
        </h1>
        <p className="text-black font-semibold text-base">
          Color us excited for new, wear-with-everything neutral hues.
        </p>
        <div className="flex gap-5">
          <Link to="/men">
          <button className="font-semibold max-sm:text-sm border rounded-md max-md:w-32 max-lg:w-40 max-lg:h-10 w-56 h-12 bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black transition-all mb-4 duration-300">
            SHOP MEN
          </button>
          </Link>
          <Link to="/women">
          <button className="font-semibold max-sm:text-sm border rounded-md max-md:w-32 max-lg:w-40 max-lg:h-10 w-56 h-12 bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black transition-all mb-4 duration-300">
            SHOP WOMEN
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Banner1
