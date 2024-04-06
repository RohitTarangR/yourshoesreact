import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import Favorites from "../Banner/Favorites";
import { DeleteOutlineOutlined, FavoriteBorder } from "@mui/icons-material";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  FavProduct,
  FeaturedProd,
  WomenProduct,
  items,
  kidsProduct,
} from "../../data";
import { newArrivalData } from "../Banner/NewArrival";

const Cart = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const [product, setProduct] = useState({});
  // const [section, setSection] = useState();
  const productType = new URLSearchParams(search).get("type");
  const deliveryFee = 250;

  useEffect(() => {
    switch (productType) {
      case "men":
        const forMan = items?.find((item) => item.id === parseInt(id));
        setProduct(forMan);
        break;
      case "women":
        const forWomen = WomenProduct?.find((item) => item.id === parseInt(id));
        setProduct(forWomen);
        break;
      case "kids":
        const forKids = kidsProduct?.find((item) => item.id === parseInt(id));
        setProduct(forKids);
        break;
      case "favourite":
        const forFavourite = FavProduct?.find(
          (item) => item.id === parseInt(id)
        );
        setProduct(forFavourite);
        break;
      case "featured":
        const forFeatured = FeaturedProd?.find(
          (item) => item.id === parseInt(id)
        );
        setProduct(forFeatured);
        break;
      case "newarrival":
        const forNewArrival = newArrivalData?.find(
          (item) => item.id === parseInt(id)
        );
        setProduct(forNewArrival);
        break;

      default:
        setProduct({});
    }
  }, [id, productType]);

  return (
    <>
      <Navbar />

      <section
        id="cart"
        className="py-16 px-40 max-md:px-10 max-sm:p-5 max-sm:text-xs"
      >
        {!product ? (
          <p>There are no items in your bag.</p>
        ) : (
          <div className="flex flex-wrap justify-around ">
            <div className="">
              <div className="w-full">
                <h2 className="text-3xl font-semibold py-5 max-md:text-2xl">
                  Bag
                </h2>
                <div className="flex space-x-3">
                  <div className="w-40">
                    <img src={product?.imgUrl} alt="" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex max-sm:flex-col max-sm:justify-normal max-sm:items-start justify-between items-center">
                      <p className="font-semibold text-start">
                        {product?.productName}
                      </p>
                      <p className="font-semibold text-end  max-sm:mt-1 ">
                        MRP: ₹ {product?.price}
                      </p>
                    </div>
                    <p className="text-gray-600">Basketball Shoes</p>
                    <p className="text-gray-600">
                      Black/Bright Crimson/Wolf Grey/White
                    </p>
                    <div className="flex space-x-10">
                      <div className="flex space-x-3">
                        <p className="text-gray-600">Size </p>
                        <select name="" id="" className="text-gray-600">
                          <option value="">8</option>
                          <option value="">9</option>
                          <option value="">10</option>
                          <option value="">11</option>
                        </select>
                      </div>
                      <div className="flex space-x-3">
                        <p className="text-gray-600">Quantity </p>
                        <select name="" id="" className="text-gray-600">
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                          <option value="">5</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-x-5">
                      <FavoriteBorder />
                      <DeleteOutlineOutlined />
                    </div>
                  </div>
                </div>
                <hr className="my-5" />
              </div>
            </div>

            <div className="space-y-5 max-xl:py-10 max-xl:w-full">
              <h2 className="text-3xl font-semibold max-md:text-2xl">
                Summary
              </h2>
              <div>
                <table border={"none"} className="space-y-5 w-full">
                  <thead>
                    <tr>
                      <td>Subtotal</td>
                      <td className="text-end">₹ {product?.price}</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Estimated Delivery & Handling</td>
                      <td className="text-end">₹ {deliveryFee}</td>
                    </tr>
                    <tr className="font-semibold">
                      <td>Total</td>
                      <td className="text-end">
                        ₹{product?.price + deliveryFee}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr className="my-5" />
              </div>
              <div>
                <button className="w-full bg-black text-white h-14 rounded-full max-xl:h-10">
                  Member Checkout
                </button>
                <Link to="/">
                  <button className="w-full bg-black text-white h-14 rounded-full my-2 max-xl:h-10">
                    Add More Items
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
      <div className="max-md:-translate-y-40">
        <Favorites title="WishList" />
      </div>
    </>
  );
};

export default Cart;
