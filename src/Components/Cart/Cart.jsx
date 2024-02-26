import React from "react";
import Navbar from "../Home/Navbar";
import { DeleteOutlineOutlined, FavoriteBorder } from "@mui/icons-material";

const Cart = () => {
  return (
    <>
      <Navbar />

      <section id="cart" className="py-16 px-40">
        <div className="flex flex-wrap justify-around">
          <div>
            {/* {<p>There are no items in your bag.</p>} */}
            <div>
              <h2 className="text-3xl font-semibold">Bag</h2>
              <div className="flex space-x-3">
                <div className="w-40">
                  <img
                    src="https://secure-images.nike.com/is/image/DotCom/DM1124_002?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&fmt=jpg"
                    alt=""
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-start">Nike Impact 4</p>
                    <p className="font-semibold text-end">MRP: ₹ 8 495.00</p>
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

            {/* favorite */}
            <div className="max-xl:hidden">
              <h2 className="text-3xl font-semibold">Favourites</h2>
              <div className="flex space-x-3">
                <div className="w-40">
                  <img
                    src="https://secure-images.nike.com/is/image/DotCom/DM1124_002?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&fmt=jpg"
                    alt=""
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-start">Nike Impact 4</p>
                    <p className="font-semibold text-end">MRP: ₹ 8 495.00</p>
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
                    <button className="w-32 h-10 border-gray-300 border rounded-full ">
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
              <hr className="my-5" />
              <button className="text-gray-500 font-semibold underline underline-offset-4 decoration-gray-500">
                Go to favourites
              </button>
            </div>
          </div>

          <div className="space-y-5 max-xl:py-10">
            <h2 className="text-3xl font-semibold">Summary</h2>
            <div>
              <table border={"none"} className="space-y-5 w-full">
                <tr>
                  <td>Subtotal</td>
                  <td>₹ 8 495.00</td>
                </tr>
                <tr>
                  <td>Estimated Delivery & Handling</td>
                  <td>₹ 1 250.00</td>
                </tr>
              </table>
              <hr className="my-5" />
              <table className="w-full">
                <tr>
                  <td>Total</td>
                  <td className="text-end">₹ 9 745.00</td>
                </tr>
              </table>
              <hr className="my-5" />
            </div>
            <button className="w-full bg-black text-white h-14 rounded-full">
              Member Checkout
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
