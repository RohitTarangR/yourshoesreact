import React from "react";
import "react-multi-carousel/lib/styles.css";

import tbshoe1 from "../../Assests/img/tbshoes1.jpg";
import tbshoe2 from "../../Assests/img/tbshoes2.png";
import tbshoe3 from "../../Assests/img/tbshoes3.png";
import tbshoe4 from "../../Assests/img/tbshoes4.png";
import tbshoe5 from "../../Assests/img/tbshoes5.png";
import wshoes1 from "../../Assests/img/wshoes1.png";
import wshoes2 from "../../Assests/img/wshoes2.png";
import wshoes3 from "../../Assests/img/wshoes3.png";
import wshoes4 from "../../Assests/img/wshoes4.png";
import wshoes5 from "../../Assests/img/wshoes5.jpg";

const Recommend = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-14 mx-8">
        We Recommend
      </h1>

      
      <div className="grid place-items-center grid-cols-2 ml-20">
        <div className="w-[33%] max-2xl:w-full relative">
          <img
            src={tbshoe1}
            alt=""
            className="h-[100%] w-[100%] object-cover"
          />
          <p className="absolute text-white underline flex top-5 ml-[180px] text-3xl font-bold">
            Men's Collection
          </p>
          <button className="absolute bottom-0 right-0 m-5 bg-white text-sm  font-semibold  text-black w-24 h-8 rounded-sm transition-all duration-300 hover:bg-black border border=[#e5e9eb] hover:text-white">
            View All
          </button>
        </div>

        <div className="flex w-[40%] ml-10 -mt-5">
          <div className="mx-10 w-[100%]">
            <div className="my-10 flex flex-col text-center relative">
              <img src={tbshoe2} alt="" />
              <p className="text-lg">Title</p>
              <p className="text-sm">LongTitle</p>
              <p className="font-semibold">
                2499₹
                <span className="text-gray-400">
                  <strike> 4999₹ </strike>
                </span>
              </p>
              <span className="absolute right-0 mx-3 mt-2 bg-white rounded-full px-2 py-[3px] text-xs border border-[#D3D4D5]">
                50% off
              </span>
            </div>
            <div className=" flex flex-col text-center relative">
              <img src={tbshoe3} alt="" />
              <p className="text-lg">Title</p>
              <p className="text-sm">LongTitle</p>
              <p className="font-semibold">
                2499₹
                <span className="text-gray-400">
                  <strike> 4999₹ </strike>
                </span>
              </p>
              <span className="absolute right-0 mx-3 mt-2 bg-white rounded-full px-2 py-[3px] text-xs border border-[#D3D4D5]">
                50% off
              </span>
            </div>
          </div>
          <div className="mx-10 w-[100%]">
            <div className="my-10 flex flex-col text-center relative ">
              <img src={tbshoe4} alt="" />
              <p className="text-lg">Title</p>
              <p className="text-sm">LongTitle</p>
              <p className="font-semibold">
                2499₹
                <span className="text-gray-400">
                  <strike> 4999₹ </strike>
                </span>
              </p>
              <span className="absolute right-0 mx-3 mt-2 bg-white rounded-full px-2 py-[3px] text-xs border border-[#D3D4D5]">
                50% off
              </span>
            </div>
            <div className=" flex flex-col text-center relative">
              <img src={tbshoe5} alt="" />
              <p className="text-lg">Title</p>
              <p className="text-sm">LongTitle</p>
              <p className="font-semibold">
                2499₹
                <span className="text-gray-400">
                  <strike> 4999₹ </strike>
                </span>
              </p>
              <span className="absolute right-0 mx-3 mt-2 bg-white rounded-full px-2 py-[3px] text-xs border border-[#D3D4D5]">
                50% off
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mr-20 my-20">
        <div className="flex w-[40%] ml-10 -mt-5">
          <div className="mx-10 w-[100%]">
            <div className="my-10 flex flex-col text-center relative">
              <img src={wshoes1} alt="" />
              <p className="text-lg">Title</p>
              <p className="text-sm">LongTitle</p>
              <p className="font-semibold">
                2499₹
                <span className="text-gray-400">
                  <strike> 4999₹ </strike>
                </span>
              </p>
              <span className="absolute right-0 mx-3 mt-2 bg-white rounded-full px-2 py-[3px] text-xs border border-[#D3D4D5]">
                50% off
              </span>
            </div>
            <div className=" flex flex-col text-center relative">
              <img src={wshoes2} alt="" />
              <p className="text-lg">Title</p>
              <p className="text-sm">LongTitle</p>
              <p className="font-semibold">
                2499₹
                <span className="text-gray-400">
                  <strike> 4999₹ </strike>
                </span>
              </p>
              <span className="absolute right-0 mx-3 mt-2 bg-white rounded-full px-2 py-[3px] text-xs border border-[#D3D4D5]">
                50% off
              </span>
            </div>
          </div>
          <div className="mx-10 w-[100%]">
            <div className="my-10 flex flex-col text-center relative ">
              <img src={wshoes3} alt="" />
              <p className="text-lg">Title</p>
              <p className="text-sm">LongTitle</p>
              <p className="font-semibold">
                2499₹
                <span className="text-gray-400">
                  <strike> 4999₹ </strike>
                </span>
              </p>
              <span className="absolute right-0 mx-3 mt-2 bg-white rounded-full px-2 py-[3px] text-xs border border-[#D3D4D5]">
                50% off
              </span>
            </div>
            <div className=" flex flex-col text-center relative">
              <img src={wshoes4} alt="" />
              <p className="text-lg">Title</p>
              <p className="text-sm">LongTitle</p>
              <p className="font-semibold">
                2499₹
                <span className="text-gray-400">
                  <strike> 4999₹ </strike>
                </span>
              </p>
              <span className="absolute right-0 mx-3 mt-2 bg-white rounded-full px-2 py-[3px] text-xs border border-[#D3D4D5]">
                50% off
              </span>
            </div>
          </div>
        </div>
        <div className="w-[33%] relative">
          <img
            src={wshoes5}
            alt=""
            className="h-[100%] w-[100%] object-cover"
          />
          <p className="absolute text-white underline flex top-5 ml-[150px] text-3xl font-bold">
            Women's Collection
          </p>
          <button className="absolute bottom-0 right-0 m-5 bg-white text-sm  font-semibold  text-black w-24 h-8 border border=[#e5e9eb] rounded-sm transition-all duration-300 hover:bg-black hover:text-white">
            View All
          </button>
        </div>
      </div>


    </>
  );
};

export default Recommend;
