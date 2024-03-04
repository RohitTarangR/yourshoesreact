import React, { useEffect, useRef, useState } from "react";
import {
  ShoppingCartOutlined,
  AccountCircleOutlined,
  Menu,
  } from "@mui/icons-material";
import l1 from "../../Assests/img/Your_Shoes.png";
import { Link } from "react-router-dom";




  

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

     const node = useRef();

     const handleClickOutside = (e) => {
       if (node.current.contains(e.target)) {
         return;
       }
       setIsOpen(false);
     };

     useEffect(() => {
       document.addEventListener("mousedown", handleClickOutside);
       return () => {
         document.removeEventListener("mousedown", handleClickOutside);
       };
     }, []);


  return (
    <>
      <div className="flex justify-between  py-2 sticky top-0 z-10 text-black items-center bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_5px_16px]">
        <div className="flex gap-8 font-semibold ml-16 max-xl:hidden">
          <Link
            to="/"
            className="hover:text-red-600 hover:scale-150 transition-all duration-500"
          >
            Home
          </Link>

          {/* dropdown */}

          <div className="dropdown inline-block relative ">
            <button className=" hover:text-red-600 hover:scale-125 transition-all duration-300">
              Product
            </button>
            <div className="dropdown-content absolute z-10 min-w-24  bg-slate-300 text-white hidden rounded  text-center">
              <p className="text-black px-8 py-1 hover:text-white hover:bg-black cursor-pointer transition-all duration-300">
                <Link to="/men">Men</Link>
              </p>
              <p className="text-black px-8 py-1 hover:text-white hover:bg-black cursor-pointer transition-all duration-300">
                <Link to="/women">Women</Link>
              </p>
              <p className="text-black px-8 py-1 hover:text-white hover:bg-black cursor-pointer transition-all duration-300">
                <Link to="/kids">Kids</Link>
              </p>
            </div>
          </div>
          <Link
            to="/service"
            className="hover:text-red-600 hover:scale-150 transition-all duration-500"
          >
            Service
          </Link>
          <Link
            to="/about"
            className="hover:text-red-600 hover:scale-150 transition-all duration-500"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-red-600 hover:scale-150 transition-all duration-500"
          >
            Contact Us
          </Link>
        </div>

        <div>
          {/* <Link to="/"> */}
          <img
            className="w-10 transform scale-125 hover:scale-150 cursor-pointer transition-all duration-300 -translate-x-32 max-xl:translate-x-[2rem] "
            src={l1}
            alt=""
          />
          {/* </Link> */}
        </div>

        <div className="space-x-3 ">
          <Link to="/login">
            <button className=" max-md:-translate-x-8 px-3 -translate-x-12 hover:text-red-600 py-1 pb-2 rounded-md font-semibold hover:scale-110 transition-all duration-300">
              <span className="max-lg:hidden">Login</span>
              <AccountCircleOutlined />
            </button>
          </Link>
          <Link to="/cart">
            <button className=" max-md:px-2 -translate-x-16 hover:text-red-600 py-1  pb-2 rounded-md font-semibold hover:scale-110 transition-all duration-300">
              <span className="max-lg:hidden">Cart</span>{" "}
              <ShoppingCartOutlined />
            </button>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="max-md:-translate-x-20 -translate-x-16 max-xl:inline-block hidden hover:scale-125 hover:text-red-600 transition-all duration-300"
          >
            <Menu className="scale-100 " />
          </button>
        </div>
      </div>

      <div className="nav 2xl:hidden xl:hidden" ref={node}>
        {isOpen && (
          <div
            className={`flex flex-col w-1/4 max-sm:w-2/4 text-black h-[55%] bg-gray-300 absolute top-3 rounded-md z-50 right-14 ${
              isOpen ? "block" : "hidden"
            } transition-all duration-300`}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-lg bg-black text-white hover:text-red-600 transition-all duration-300 max-xl:inline-block hidden py-3"
            >
              Close
            </button>
            <Link
              to="/"
              className="text-center text-lg mt-5 hover:text-red-600 transition-all duration-300 hover:scale-125"
            >
              Home
            </Link>
            <Link
              to="/productPage"
              className="text-center text-lg mt-10 hover:text-red-600 transition-all duration-300 hover:scale-125"
            >
              Product
            </Link>
            <Link
              to="/Service"
              className="text-center text-lg mt-10 hover:text-red-600 transition-all duration-300 hover:scale-125"
            >
              Service
            </Link>
            <Link
              to="/About"
              className="text-center text-lg mt-10 hover:text-red-600 transition-all duration-300 hover:scale-125"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-center text-lg mt-10 hover:text-red-600 transition-all duration-300 hover:scale-125"
            >
              Contact us
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
