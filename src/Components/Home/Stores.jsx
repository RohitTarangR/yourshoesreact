import React from "react";
import { OurStore } from "../../data";

const Stores = () => {
  return (
    <>
      <div className="bg-[#e5e9eb] pt-5 pb-16">
        <h1 className="text-4xl font-bold text-center my-10 mx-8">
          Visit Our Stores
        </h1>

        <div className="grid grid-cols-4 place-items-center max-2xl:gap-5 px-5 max-lg:grid-cols-2">
          {OurStore.map((Store) => {
            return (
              <>
                <div className="relative">
                  <img
                    src={Store.img}
                    alt="store"
                    className="w-96 h-96 object-cover max-sm:w-72 max-sm:h-72 brightness-75"
                  />
                  <p className="absolute bottom-4 left-5 font-bold bg-white px-3 py-1 rounded-xl max-md:text-xs max-md:left-2 max-sm:bottom-3">
                    {Store.city}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Stores;
