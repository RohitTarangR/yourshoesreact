import React from 'react'

const SingleProduct = ({product}) => {
  return (
    <>
      <div className="border  border-[#D3D4D5] w-auto h-auto transition-all duration-300 hover:shadow-2xl shadow-gray-200">
        <div className="w-full overflow-hidden relative ">
          <div
            id="clickFade"
            className="absolute bg-[rgba(0, 0, 0, 0.5) ml-14 my-32 opacity-0 hover:opacity-100 z-10"
          >
            <button className="font-semibold max-lg:w-52 w-64 h-12 bg-black text-white hover:bg-white hover:text-black transition-all mb-4 duration-300">
              Add to Cart
            </button>
            <button className="font-semibold max-lg:w-52 w-64 h-12 bg-black text-white hover:bg-white hover:text-black transition-all duration-300">
              Buy Now
            </button>
          </div>
          <img
            className="object-cover h-[350px] max-lg:w-72 max-md:w-[370px] hover:brightness-75 hover:scale-105 transition-all duration-500"
            width={"375px"}
            src={product.imgUrl}
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-bold m-4 text-2xl">{product.pTitle}</h1>

          <hr className="bg-[#D3D4D5] h-[2px] w-[80%] " />

          <p className="font-semibold m-2 text-md">{product.lTitle}</p>
        </div>
      </div>
    </>
  );
}

export default SingleProduct