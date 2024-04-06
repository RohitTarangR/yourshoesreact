import React, { useEffect, useState } from "react";
import {
  FavProduct,
  FeaturedProd,
  WomenProduct,
  items,
  kidsProduct,
} from "../../data";
import { Link, useLocation, useParams } from "react-router-dom";
import Navbar from "../Home/Navbar";
import { FavoriteBorderOutlined, Home } from "@mui/icons-material";
import SingleProductCarousal from "./SingleProductCarousal";
import { newArrivalData } from "../Banner/NewArrival";

const MenSinglePage = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const [product, setProduct] = useState({});
  const [section, setSection] = useState();
  const productType = new URLSearchParams(search).get("type");
  useEffect(() => {
    switch (productType) {
      case "men":
        const forMan = items?.find((item) => item.id === parseInt(id));
        setProduct(forMan);
        setSection("Men");
        break;
      case "women":
        const forWomen = WomenProduct?.find((item) => item.id === parseInt(id));
        setProduct(forWomen);
        setSection("Women");
        break;
      case "kids":
        const forKids = kidsProduct?.find((item) => item.id === parseInt(id));
        setProduct(forKids);
        setSection("Kids");
        break;
      case "favourite":
        const forFavourite = FavProduct?.find(
          (item) => item.id === parseInt(id)
        );
        setProduct(forFavourite);
        setSection("Favourite");
        break;
      case "featuredProduct":
        const forFeatured = FeaturedProd?.find(
          (item) => item.id === parseInt(id)
        );
        setProduct(forFeatured);
        setSection("featuredProduct");
        break;
      case "newarrival":
        const forNewArrival = newArrivalData?.find(
          (item) => item.id === parseInt(id)
        );
        setProduct(forNewArrival);
        setSection("NewArrival");
        break;

      default:
        setProduct({});
    }
  }, [id, productType]);

  return !product ? (
    <div>No product Found</div>
  ) : (
    <>
      <Navbar />

      <section className="grid grid-cols-2  items-center max-lg:grid-cols-1">
        <div className="flex justify-end w-4/5 h-[90%] rounded-lg mx-auto p-5 max-lg:w-4/5 max-lg:h-4/5 max-md:w-full max-sm:w-full max-sm:h-full">
          {/* <img src={imgUrl} alt="" width={"100%"} className="object-cover" /> */}
          <SingleProductCarousal images={product?.SliderImages} />
        </div>
        <div className="space-y-7 p-5">
          <div className="flex space-x-4 max-lg:hidden items-center">
            <Link to="/">
              <Home />
            </Link>
            <Link to="/">Home</Link> <span>/</span>
            <Link to={`/${section}`}>{section}</Link> <span>/</span>
            <p className="cursor-pointer">{product?.productName}</p>
          </div>
          <h2 className="text-4xl font-bold max-lg:text-3xl">
            {product?.productName}
          </h2>
          <p className=" text-start">{product?.desc}</p>
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
              ₹ {product?.price}.00
            </div>
          </div>
          <div className="btn max-lg:text-center max-sm:flex max-sm:flex-col">
            <Link to={`/cart/${product?.id}?type=${section}`}>
              <button className="w-44 max-sm:w-full max-sm:my-2 max-lg:w-60 h-12 bg-black text-white text-[16px] rounded-lg mr-10">
                Add to Cart
              </button>
            </Link>
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
