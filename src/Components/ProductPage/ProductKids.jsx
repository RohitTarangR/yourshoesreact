import React from "react";
import Navbar from "../Home/Navbar";
import { kidsProduct } from "../../data";
import SideBar from "./SideBar";
import {
  KeyboardArrowDown,
  ShoppingCart,
  ShoppingCartCheckout,
  Tune,
} from "@mui/icons-material/";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const ProductKids = () => {
  return (
    <>
      <Navbar />

      <div className="flex justify-center">
        <div className="w-1/6 px-10 max-lg:p-0 max-lg:hidden">
          <SideBar />
        </div>
        <div className="flex flex-col my-4">
          <div className="mr-10 space-x-6 flex justify-end items-center max-md:text-xs">
            <button>
              Hide Filters
              <Tune className="mx-1" />
            </button>
            <button>
              Sort By
              <KeyboardArrowDown />
            </button>
          </div>
          <div className="container flex flex-wrap justify-center space-y-5 max-lg:grid max-lg:grid-cols-2">
            <span className="max-lg:hidden"></span>
            {kidsProduct.map((item) => {
              return (
                <div className="item m-3 text-center border border-slate-100 overflow-hidden">
                  <Link to={`/productoverview/${item.id}?type=kids`}>
                    <div className="object-cover w-full ">
                      <img
                        src={item.imgUrl}
                        alt={item.productName}
                        className="w-full h-96 max-sm:h-2/3 max-md:object-contain object-cover"
                      />
                    </div>
                  </Link>
                  <p className="max-md:text-xs">{item.productName}</p>
                  <p className="font-semibold max-md:text-sm">
                    MRP: ₹ {item.price}.00
                  </p>

                  <div className="flex flex-col justify-center relative">
                    <Link to={`/cart/${item.id}?type=kids`}>
                      <button className=" text-sm max-sm:text-xs font-bold w-full bg-black h-[40px] max-sm:h-[35px] my-2 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-300 before:to-zinc-300 hover:text-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#fff]">
                        Add to Cart
                        <ShoppingCart className="mx-2 scale-90 max-sm:scale-75" />
                      </button>
                    </Link>

                    <button className=" text-sm max-sm:text-xs font-bold w-full  bg-zinc-300 h-[40px] max-sm:h-[35px] my-1 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-black before:to-black hover:text-zinc-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#000]">
                      Buy Now
                      <ShoppingCartCheckout className="mx-2 scale-90 max-sm:scale-75" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductKids;
