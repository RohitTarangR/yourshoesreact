import React from "react";
import Navbar from "../Home/Navbar";
import { WomenProduct } from "../../data";
import SideBar from "./SideBar";
import {
  KeyboardArrowDown,
  ShoppingCart,
  ShoppingCartCheckout,
  Tune,
} from "@mui/icons-material/";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const ProductWomen = () => {
  return (
    <>
      <Navbar />

      <div className="flex">
        <div className="w-1/6 px-10">
          <SideBar />
        </div>
        <div className="flex flex-col my-4">
          <div className="mr-10 space-x-6 flex justify-end items-center">
            <button>
              Hide Filters
              <Tune className="mx-1" />
            </button>
            <button>
              Sort By
              <KeyboardArrowDown />
            </button>
          </div>
          <div className="container flex flex-wrap mx-auto justify-center space-x-10 space-y-10">
            <span></span>
            {WomenProduct.map((item, i) => {
              return (
                <div
                  className="item m-3 text-center border border-slate-100"
                  key={i}
                >
                  <Link to={`/productoverview/${item.id}?type=women`}>
                    <div className="object-cover w-96">
                      <img
                        src={item.imgUrl}
                        alt={item.productName}
                        className="w-full h-96 object-cover"
                      />
                    </div>
                  </Link>
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
      <Footer />
    </>
  );
};

export default ProductWomen;
