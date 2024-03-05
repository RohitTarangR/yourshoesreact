import React from 'react'
import { FavProduct } from '../../data';
import { ShoppingCart, ShoppingCartCheckout } from '@mui/icons-material';
// import { items } from '../../data';





const Favorites = () => {
  return (
    <>
      <div className="flex flex-col items-center max-md:mt-44">
        <div>
          <h1 className="flex text-4xl font-bold justify-center m-8">
            Our Favorites
          </h1>

          <div className="flex gap-72 max-xl:gap-52 max-lg:gap-32 max-md:gap-20 max-lg:text-base max-md:text-sm max-sm:gap-10 font-bold text-lg">
            <p className="cursor-pointer">FOR EVERYDAY</p>
            <p className="cursor-pointer">FOR ACTIVITY</p>
            <p className="cursor-pointer">FOR THE RAIN</p>
          </div>
        </div>
        <hr className="bg-[#D3D4D5] h-[3px] w-[80%] my-5 mx-auto" />

        <div>
          <div class="container flex flex-wrap mx-auto justify-center">
            {FavProduct.map((item, i) => {
              return (
                <div
                  class="item m-3 text-center border border-slate-100"
                  key={i}
                >
                  {/* <Link to={`/men/${item.id}`}> */}
                    <div className="object-cover w-72">
                      <img
                        src={item.imgUrl}
                        alt={item.productName}
                        className="w-full"
                      />
                    </div>
                  {/* </Link> */}
                  <p>{item.productName}</p>
                  <p className="font-semibold">MRP: ₹ {item.price}.00</p>
                  <div className="flex flex-col justify-center relative">
                    <button className=" text-sm font-bold w-full bg-black h-[40px] my-2 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-300 before:to-zinc-300 hover:text-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#fff]">
                      Add to Cart
                      <ShoppingCart className="mx-2 scale-90" />
                    </button>

                    <button className=" text-sm font-bold w-full  bg-zinc-300 h-[40px] my-1 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-black before:to-black hover:text-zinc-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#000]">
                      Buy Now
                      <ShoppingCartCheckout className="mx-2 scale-90" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Favorites
