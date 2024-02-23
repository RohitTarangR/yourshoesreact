import React from "react";
import { items } from "../../data";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Home/Navbar";
import { FavoriteBorderOutlined, Home } from "@mui/icons-material";

const MenSinglePage = () => {
  const { productId } = useParams();
  console.log("productId:", productId);
  console.log("items:", items);

  const product = items.find((item) => item.id === parseInt(productId));

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="text-center fs-1">This Product is not available!</div>
      </>
    );
  }

  const {id, imgUrl, productName, price, desc } = product;
  const productPage = "Men"

  return (
    <>
      <Navbar />

      <section className="grid grid-cols-2  items-center max-lg:grid-cols-1">
        <div className="flex justify-end w-4/5 h-3/4 mx-auto p-5 max-lg:w-4/5 max-lg:h-4/5 max-md:w-full max-sm:w-full max-sm:h-full">
          <img src={imgUrl} alt="" width={"100%"} className="object-cover" />
        </div>
        <div className="space-y-7 p-5">
          <div className="flex space-x-4 max-lg:hidden items-center">
            <Link to="/">
              <Home />
            </Link>
            <Link to="/">Home</Link> <span>/</span>
            <Link to="/Men">{productPage}</Link> <span>/</span>
            <Link to={`/men/${id}`}>{productName}</Link>
          </div>
          <h2 className="text-4xl font-bold max-lg:text-3xl">{productName}</h2>
          <p className=" text-start">{desc}</p>
          <p className="font-bold">HighLights :</p>
          <ul className="list-disc ml-3">
            <li>Standard delivery 4–9 business days</li>
            <li>All purchases are subject to delivery fees.</li>
            <li>
              Orders are processed and delivered Monday–Friday (excluding public
              holidays)
            </li>
            <li>Nike Members enjoy free returns.</li>
          </ul>
          <div className="flex justify-around items-center bg-slate-100 w-3/5 max-lg:w-full py-2 px-4 border rounded-lg">
            <div className="color flex flex-col items-center">
              <p className="font-bold">Color</p>
              <span>Black</span>
            </div>
            <div className="size flex flex-col items-center">
              <p className="font-bold">Size</p>
              <span>40</span>
            </div>
            <div className="price font-bold text-2xl max-lg:text-xl">
              ${price}.00
            </div>
          </div>
          <div className="btn max-lg:text-center max-sm:flex max-sm:flex-col">
            <button className="w-44 max-sm:w-full max-sm:my-2 max-lg:w-60 h-12 bg-black text-white text-[16px] rounded-lg mr-10">
              Add to Cart
            </button>
            <button className="w-44 max-sm:w-full max-sm:my-2 max-lg:w-60 h-12 bg-white text-black border border-gray-400 text-[16px] rounded-lg">
              <FavoriteBorderOutlined className="scale-75 mb-1" /> Add to
              WishList
            </button>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default MenSinglePage;


