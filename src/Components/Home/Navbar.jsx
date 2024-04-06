import React, { useState } from "react";
import l1 from "../../Assests/img/Your_Shoes.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBagShopping, faBars, faHeart, faMagnifyingGlass, faUserCircle, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openNavbar = () => {
      setIsOpen(true);
    };

    const closeNavbar = () => {
      setIsOpen(false);
    };

  return (
    <>
      <div className="bg-black py-3 flex justify-center items-center gap-2">
        <p className="text-white text-xs text-center uppercase font-bold tracking-wider">
          free delivery, return & exchange
        </p>
        <FontAwesomeIcon icon={faAngleDown} style={{ color: "white" }} />
      </div>

      <main className="flex justify-around items-center max-sm:justify-between max-sm:px-10 shadow-md sticky top-0 z-50 bg-white">
          <Link to="/">
            <img
              src={l1}
              alt=""
              width={70}
              className="hover:scale-125 transition-all duration-300"
            />
          </Link>

        {/* desktop navbar  */}

        <nav className="flex space-x-5 justify-center ml-64 items-center max-xl:ml-0 max-sm:hidden uppercase text-sm">
          <Link
            to="/"
            className="text-red-500 font-semibold hover:underline hover:underline-offset-4 hover:mb-2 hover:text-red-300 decoration-2 transition-all duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/men"
            className="text-black font-semibold hover:underline hover:underline-offset-4 hover:mb-2 hover:text-gray-500  decoration-2 transition-all duration-300 ease-in-out"
          >
            Men
          </Link>
          <Link
            to="/women"
            className="text-black font-semibold hover:underline hover:underline-offset-4 hover:mb-2 hover:text-gray-500 decoration-2 transition-all duration-300 ease-in-out"
          >
            Women
          </Link>
          <Link
            to="/kids"
            className="text-black font-semibold hover:underline hover:underline-offset-4 hover:mb-2 hover:text-gray-500 decoration-2 transition-all duration-300 ease-in-out"
          >
            Kids
          </Link>
          <Link
            to="/about"
            className="text-gray-500 font-semibold hover:underline hover:underline-offset-4 hover:mb-2 hover:text-gray-300 decoration-2 transition-all duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-500 font-semibold hover:underline hover:underline-offset-4 hover:mb-2 hover:text-gray-300 decoration-2 transition-all duration-300 ease-in-out"
          >
            Contact
          </Link>
        </nav>

        {/* mobile navbar */}

        <div
          className={`absolute right-0 top-0 bg-slate-100 w-full items-center h-[100vh] ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <FontAwesomeIcon
            icon={faXmark}
            className="absolute right-10 top-5 text-3xl cursor-pointer"
            onClick={closeNavbar}
          />
          <nav className="flex flex-col items-center space-y-10 py-20">
            <Link
              to="/"
              className="text-red-500 font-semibold hover:underline hover:underline-offset-4 hover:mb-2 hover:text-red-300 decoration-2 transition-all duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/men"
              className="text-black font-semibold hover:underline hover:underline-offset-4 hover:mb-2 hover:text-gray-500  decoration-2 transition-all duration-300 ease-in-out"
            >
              Men
            </Link>
            <Link
              to="/women"
              className="text-black font-semibold hover:underline hover:underline-offset-4 hover:mb-2 hover:text-gray-500 decoration-2 transition-all duration-300 ease-in-out"
            >
              Women
            </Link>
            <Link
              to="/kids"
              className="text-black font-semibold hover:underline hover:underline-offset-4 hover:mb-2 hover:text-gray-500 decoration-2 transition-all duration-300 ease-in-out"
            >
              Kids
            </Link>
            <Link
              to="/about"
              className="text-gray-500 font-semibold hover:underline hover:underline-offset-4 hover:mb-2 hover:text-gray-300 decoration-2 transition-all duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-500 font-semibold hover:underline hover:underline-offset-4 hover:mb-2 hover:text-gray-300 decoration-2 transition-all duration-300 ease-in-out"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="right flex items-center space-x-5">
          <div className="search relative  max-xl:hidden">
            <input
              type="text"
              className="bg-[#f4f5f4] text-base pl-10 py-1 outline-none rounded-lg text-gray-600"
              placeholder="Search"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-2 top-2"
            />
          </div>
          <div className="flex items-center space-x-3">
            <Link to="/wishlist">
            <FontAwesomeIcon icon={faHeart} />
            </Link>
            <Link to="/cart/:id">
              <FontAwesomeIcon icon={faBagShopping} />
            </Link>
            <Link to="/login">
              <FontAwesomeIcon icon={faUserCircle} />
            </Link>
            <FontAwesomeIcon
              icon={faBars}
              className="hidden max-sm:inline cursor-pointer"
              onClick={openNavbar}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Navbar;
