import React from 'react'
import {
  Facebook,
  Instagram,
  Twitter,
  Place,
  Phone,
  Email,
  YouTube,
} from "@mui/icons-material/";
import { useForm } from "@formspree/react";
import l1 from "../../Assests/img/Your_Shoes.png";
import { Link } from 'react-router-dom';


const Footer = () => {


    const [state, handleSubmit] = useForm("xwkgpljo");


  return (
    <>
      <div className="grid place-items-center grid-cols-4 max-xl:grid-cols-2 max-xl:py-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:place-items-start max-md:px-10 py-10 bg-black text-white">
        <div className="flex flex-col justify-center items-center max-md:items-start">
          <Link to="/">
            <img
              src={l1}
              alt=""
              width={150}
              className="-mb-8 hover:scale-150 transition-all duration-500 cursor-pointer"
            />
          </Link>
          <p className="text-start max-md:py-3 w-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos
            laborum earum doloremque illum
          </p>
          <div className="flex my-3 justify-center items-center">
            <p className="border-2 border-white rounded-full p-1 cursor-pointer hover:bg-white hover:text-blue-500 hover:scale-125  transition-all duration-300">
              <Twitter />
            </p>
            <p className="border-2 border-white rounded-full p-1 ml-5 cursor-pointer hover:bg-white hover:text-pink-700 hover:scale-125 transition-all duration-300">
              <Instagram />
            </p>
            <p className="border-2 border-white rounded-full p-1 ml-5 cursor-pointer hover:bg-white hover:text-blue-700 hover:scale-125 transition-all duration-300">
              <Facebook />
            </p>
            <p className="border-2 border-white rounded-full p-1 ml-5 cursor-pointer hover:bg-white hover:text-red-500 hover:scale-125 transition-all duration-300">
              <YouTube />
            </p>
          </div>
        </div>
        <div className="text-start max-md:py-3">
          <h1 className="text-lg font-semibold my-3 underline underline-offset-4">
            ADDRESS
          </h1>
          <a href="https://maps.app.goo.gl/djig4CBe58D6LHpKA">
            <p className="flex justify-center items-center mt-3 hover:scale-110 hover:text-green-600 transition-all duration-300">
              <Place className="mr-3" /> Gota, Ahmedabad
            </p>
          </a>

          <p className="flex justify-center items-center mt-3 hover:scale-110 hover:text-blue-600 transition-all duration-300 cursor-pointer  ">
            <Phone className="mr-5" /> +012 665-7737-121
          </p>

          <a href="mailto:abc@gmail.com">
            <p className="flex justify-center items-center mt-3 hover:scale-110 hover:text-red-600 transition-all duration-300">
              <Email className="mr-6" /> abc@gmail.com
            </p>
          </a>
        </div>
        <div className="text-start max-md:py-3">
          <h1 className="text-lg font-semibold my-3 underline underline-offset-4">
            QUICK LINKS
          </h1>
          <p className="text-md mt-1 hover:text-slate-400 hover:rotate-6 hover:scale-125 transition-all duration-300 cursor-pointer">
            <Link to="/"> Home </Link>
          </p>
          <p className="text-md mt-1 hover:text-slate-400 hover:rotate-6 hover:scale-125 transition-all duration-300 cursor-pointer">
            <Link to="/men"> Men </Link>
          </p>
          <p className="text-md mt-1 hover:text-slate-400 hover:rotate-6 hover:scale-125 transition-all duration-300 cursor-pointer">
            <Link to="/men"> Women </Link>
          </p>
          <p className="text-md mt-1 hover:text-slate-400 hover:rotate-6 hover:scale-125 transition-all duration-300 cursor-pointer">
            <Link to="/men"> Kids </Link>
          </p>
          <p className="text-md mt-1 hover:text-slate-400 hover:rotate-6 hover:scale-125 transition-all duration-300 cursor-pointer">
            <Link to="/service"> Service </Link>
          </p>
          <p className="text-md mt-1 hover:text-slate-400 hover:rotate-6 hover:scale-125 transition-all duration-300 cursor-pointer">
            <Link to="/about"> About us </Link>
          </p>
          <p className="text-md mt-1 hover:text-slate-400 hover:rotate-6 hover:scale-125 transition-all duration-300 cursor-pointer">
            <Link to="/contact"> Contact us </Link>
          </p>
        </div>
        <div>
          <h1 className="text-lg font-semibold my-3 underline underline-offset-4">
            SUBSCRIBE TO OUR NEWSLETTER
          </h1>

          <div className="my-6">
            <form onSubmit={handleSubmit} className='flex'>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                className="bg-gray-300 text-black w-56 h-10 outline-none pl-5 rounded-s-md max-2xl:w-44"
              />

              <button
                type="submit"
                disabled={state.submitting}
                className="bg-green-600 text-white outline-none h-10 w-20 rounded-e-md hover:bg-green-700 hover:text-white transition-all duration-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-black py-5 underline underline-offset-4">
        <hr className="text-white bg-white" />

        <p className="text-white text-center mt-5 font-semibold">
          Thank you for visiting our website!!
        </p>
      </div>
    </>
  );
}

export default Footer