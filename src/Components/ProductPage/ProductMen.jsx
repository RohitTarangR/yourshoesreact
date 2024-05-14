import React, { useState, useEffect } from "react";
import Navbar from "../Home/Navbar";
import SideBar from "./SideBar";
import {
  KeyboardArrowDown,
  ShoppingCart,
  ShoppingCartCheckout,
  Tune,
} from "@mui/icons-material/";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { addToCart } from "../../utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { items } from "../../data";


const ProductCardSkeleton = () => {
  return (
    <div className="item m-3 text-center border border-slate-100 overflow-hidden animate-pulse rounded-lg w-">
      <div className="object-cover w-80 h-80 max-sm:h-56 max-md:object-contain  bg-gray-300 rounded-lg"></div>
      <div className="h-12 bg-gray-300 my-2 rounded-lg"></div>
      <div className="h-10 bg-gray-300 rounded-lg"></div>
    </div>
  );
};


const ProductMen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const notify = () => toast("Item added to the cart !");

  return (
    <>
      <Navbar />
      <ToastContainer
        closeOnClick
        position="top-center"
        autoClose={1500}
        pauseOnHover={false}
      />
      <div className="flex justify-center">
        <div className="w-1/6 px-10 max-lg:p-0 max-lg:hidden">
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
          <div className="container flex flex-wrap justify-center space-y-10 max-lg:grid max-lg:grid-cols-2">
            <span className="max-lg:hidden"></span>
            {loading
              ? // Skeleton loader while loading
                Array.from({ length: 15 }).map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))
              : // Content when loading is complete
                items.map((item) => (
                  <div
                    className="item m-3 text-center border border-slate-100 overflow-hidden"
                    key={item.id}
                  >
                    <Link to={`/productoverview/${item.id}?type=men`}>
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
                      <button
                        onClick={() => {
                          addToCart(item?.id, item);
                          notify();
                        }}
                        className=" text-sm max-sm:text-xs font-bold w-full bg-black h-[40px] max-sm:h-[35px] my-2 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-300 before:to-zinc-300 hover:text-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#fff]"
                      >
                        Add to Cart
                        <ShoppingCart className="mx-2 scale-90 max-sm:scale-75" />
                      </button>

                      <button className=" text-sm max-sm:text-xs font-bold w-full  bg-zinc-300 h-[40px] max-sm:h-[35px] my-1 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-black before:to-black hover:text-zinc-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#000]">
                        Buy Now
                        <ShoppingCartCheckout className="mx-2 scale-90 max-sm:scale-75" />
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductMen;
