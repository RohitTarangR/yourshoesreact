import React from "react";
import { FavProduct } from "../../data";
import { ShoppingCart, ShoppingCartCheckout } from "@mui/icons-material";
// import { items } from '../../data';

const Favorites = ({ title }) => {
  return (
    <>
      <div className="flex flex-col items-center max-md:mt-44">
        <div>
          <h1 className="flex text-3xl font-bold justify-center">{title}</h1>
        </div>
        <hr className="bg-[#D3D4D5] h-[2px] w-[80%] my-5 mx-auto" />

        <div>
          <div className="container flex flex-wrap mx-auto justify-center">
            {FavProduct.map((item) => {
              return (
                <div
                  className="item m-3 text-center border border-slate-100"
                  key={item.id}
                >
                  <div className="object-cover w-72 max-md:w-44 max-sm:w-36">
                    <img
                      src={item.imgUrl}
                      alt={item.productName}
                      className="w-full max-md:h-48 max-sm:h-40 object-cover"
                    />
                  </div>

                  <p>{item.productName}</p>
                  <p className="font-semibold">MRP: ₹ {item.price}.00</p>
                  <div className="flex flex-col justify-center relative">
                    <button className=" text-sm max-md:text-xs font-bold w-full bg-black h-[40px] max-md:h-[30px] my-2 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-300 before:to-zinc-300 hover:text-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#fff]">
                      Add to Cart
                      <ShoppingCart className="mx-2 scale-90 max-md:scale-75" />
                    </button>

                    <button className=" text-sm max-md:text-xs font-bold w-full  bg-zinc-300 h-[40px] max-md:h-[30px] my-1 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-black before:to-black hover:text-zinc-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#000]">
                      Buy Now
                      <ShoppingCartCheckout className="mx-2 scale-90 max-md:scale-75" />
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
};

export default Favorites;
