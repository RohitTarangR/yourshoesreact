import React from "react";
import Navbar from "../Home/Navbar";
import Stores from "../Home/Stores";
import Footer from "../Footer/Footer";

import ServiceBanner from "../../Assests/img/servicebanner.jpg";
import { serviceImg } from "../../data";

const Service = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <img
          src={ServiceBanner}
          alt=""
          className="relative h-[100%] w-[100%] object-cover"
        />
        <h1 className="text-center text-9xl font-semibold text-white absolute my-5 border border-white p-5 max-xl:text-8xl max-lg:text-6xl max-md:text-3xl max-md:p-2 max-sm:text-2xl">
          Service
        </h1>
      </div>

      <section
        id="feature"
        class="section-p1 grid grid-cols-6 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 place-items-stretch flex-wrap  p-10"
      >
        {serviceImg.map((item) => {
          return (
            <div
              class="fe-box text-center flex flex-col justify-center items-center py-6 px-4 rounded-3xl transition-all duration-300 my-4 mx-0 hover:drop-shadow-2xl"
              key={item.id}
            >
              <img src={item.img} className="w-56 mb-2 rounded-xl hover:scale-110 transition-all duration-300 ease-in-out" />
              <h6 className="rounded-lg text-base inline-block p-3 font-semibold leading-3 bg-black text-white">
                {item.text}
              </h6>
            </div>
          );
        })}

        {/* <div class="fe-box">
            <img src="./img/features/Order ahead.gif" />
            <h6>Online Order</h6>
        </div>

        <div class="fe-box">
            <img src="./img/features/Savings Money.gif" />
            <h6>Save Money</h6>
        </div>

        <div class="fe-box">
            <img src="./img/features/Promotion.gif" />
            <h6>Promotions</h6>
        </div>

        <div class="fe-box">
            <img src="./img/features/Happ sell.gif" />
            <h6>Happy Sell</h6>
        </div>

        <div class="fe-box">
            <img src="./img/features/Service 24_7.gif" />
            <h6>F24/7 Support</h6>
        </div> */}
      </section>

      <Stores />
      <Footer />
    </>
  );
};

export default Service;
