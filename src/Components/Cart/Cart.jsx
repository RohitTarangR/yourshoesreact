import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import Favorites from "../Banner/Favorites";
import { DeleteOutlineOutlined, FavoriteBorder } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const cartProducts = localStorage.getItem("cart-data");
    if (cartProducts) {
      setProduct(JSON.parse(cartProducts));
    }
  }, []);

  const removeFromCart = (id) => {
    const newFilterData = product?.filter((item) => item.id !== parseInt(id));
    if (!newFilterData.length) {
      localStorage.removeItem("cart-data");
      setProduct([]);
    } else {
      setProduct(newFilterData);
      localStorage.setItem("cart-data", JSON.stringify(newFilterData));
    }
  };

  const subtotal = product.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );

  const deliveryAndHandling = 250;

  const total = subtotal + deliveryAndHandling;

  const notify = () =>{toast("Your item succefully removed from the cart !")}

  return !product ? (
    <div>No products Found</div>
  ) : (
    <>
      <Navbar />

      <ToastContainer
        closeOnClick
        position="top-center"
        autoClose={1500}
        pauseOnHover={false}
      />

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
                {product?.length === 0 ? (
                  <div className="py-3">
                    Your Cart is Empty ! Go and Checkout our latest Collection !
                  </div>
                ) : (
                  product?.map((value) => (
                    <div className="flex space-x-3 my-2">
                      <div className="w-40">
                        <img src={value?.imgUrl} alt="" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex max-sm:flex-col max-sm:justify-normal max-sm:items-start justify-between items-center">
                          <p className="font-semibold text-start">
                            {value?.productName}
                          </p>
                          <p className="font-semibold text-end  max-sm:mt-1 ">
                            MRP: ₹ {value?.price}
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
                            <p className="text-gray-600">Quantity :</p>
                            <input
                              type="number"
                              name=""
                              id=""
                              value={value?.qty}
                              className="appearance-none outline-none"
                            />
                          </div>
                        </div>
                        <div className="space-x-5 flex">
                          <button>
                            <FavoriteBorder />
                          </button>
                          <button
                            onClick={() => {
                              removeFromCart(value?.id);
                              notify();
                            }}
                          >
                            <DeleteOutlineOutlined />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
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
                      <td className="text-end">₹ {subtotal}</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Delivery & Handling</td>
                      <td className="text-end">
                        ₹ {product.length === 0 ? 0 : deliveryAndHandling}
                      </td>
                    </tr>
                    <tr className="font-semibold">
                      <td>Total</td>
                      <td className="text-end">
                        ₹{product.length === 0 ? 0 : total}
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
