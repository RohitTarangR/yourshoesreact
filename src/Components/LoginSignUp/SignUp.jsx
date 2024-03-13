import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar";
import { Google, Twitter, GitHub } from "@mui/icons-material/";
import Logo from "../../Assests/img/Your_Shoes.png";

function Login() {
  return (
    <>
      <Navbar />
      <section>
        <div className="relative flex flex-col my-5 overflow-hidden">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl px-10">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-black uppercase">
                Sign up
              </h1>
              <Link to="/">
                <img src={Logo} alt="" width={"130px"} />
              </Link>
            </div>
            <form>
              <div className="mb-2">
                <label
                  for="name"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-gray-2+400 focus:ring-gray-200 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <div />
                <div className="mb-2">
                  <label
                    for="email"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-gray-2+400 focus:ring-gray-200 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>
              <div className="mb-2">
                <label
                  for="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password <span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-gray-2+400 focus:ring-gray-200 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  for="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Confirm Password <span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-gray-2+400 focus:ring-gray-200 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-500">
                  Login
                </button>
              </div>
            </form>
            <div className="relative flex items-center justify-center w-full mt-6 border border-t">
              <div className="absolute px-5 bg-white">Or</div>
            </div>
            <div className="flex mt-4 gap-x-2">
              <button
                type="button"
                className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-gray-600"
              >
                <Google />
              </button>
              <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-gray-600">
                <GitHub />
              </button>
              <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-gray-600">
                <Twitter />
              </button>
            </div>

            <p className="mt-8 text-sm font-light text-center text-gray-700">
              Already account?
              <Link
                to="/login"
                className="font-medium text text-black hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
