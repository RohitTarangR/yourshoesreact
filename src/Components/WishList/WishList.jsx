import React from "react";
import Navbar from "../Home/Navbar";
import { Close, ShoppingCart } from "@mui/icons-material";

const WishListItems = [
  {
    id: 1,
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/23484790/2023/5/31/14fc49d0-6ce3-4410-9e8c-147f57c539d91685518426707HRXbyHrithikRoshanMenWhiteMeshRunningNon-MarkingShoes1.jpg",
    productName: "Nike Air Flow Shoes",
    discounted_price: 9999,
    original_price: 19999,
    discount_percentage: 35,
  },
  {
    id: 2,
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/23484790/2023/5/31/14fc49d0-6ce3-4410-9e8c-147f57c539d91685518426707HRXbyHrithikRoshanMenWhiteMeshRunningNon-MarkingShoes1.jpg",
    productName: "Nike Air Flow Shoes",
    discounted_price: 9999,
    original_price: 19999,
    discount_percentage: 35,
  },
  {
    id: 3,
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/23484790/2023/5/31/14fc49d0-6ce3-4410-9e8c-147f57c539d91685518426707HRXbyHrithikRoshanMenWhiteMeshRunningNon-MarkingShoes1.jpg",
    productName: "Nike Air Flow Shoes",
    discounted_price: 9999,
    original_price: 19999,
    discount_percentage: 35,
  },
  {
    id: 4,
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/23484790/2023/5/31/14fc49d0-6ce3-4410-9e8c-147f57c539d91685518426707HRXbyHrithikRoshanMenWhiteMeshRunningNon-MarkingShoes1.jpg",
    productName: "Nike Air Flow Shoes",
    discounted_price: 9999,
    original_price: 19999,
    discount_percentage: 35,
  },
  {
    id: 5,
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/23484790/2023/5/31/14fc49d0-6ce3-4410-9e8c-147f57c539d91685518426707HRXbyHrithikRoshanMenWhiteMeshRunningNon-MarkingShoes1.jpg",
    productName: "Nike Air Flow Shoes",
    discounted_price: 9999,
    original_price: 19999,
    discount_percentage: 35,
  },
  {
    id: 6,
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/23484790/2023/5/31/14fc49d0-6ce3-4410-9e8c-147f57c539d91685518426707HRXbyHrithikRoshanMenWhiteMeshRunningNon-MarkingShoes1.jpg",
    productName: "Nike Air Flow Shoes",
    discounted_price: 9999,
    original_price: 19999,
    discount_percentage: 35,
  },
  {
    id: 7,
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/23484790/2023/5/31/14fc49d0-6ce3-4410-9e8c-147f57c539d91685518426707HRXbyHrithikRoshanMenWhiteMeshRunningNon-MarkingShoes1.jpg",
    productName: "Nike Air Flow Shoes",
    discounted_price: 9999,
    original_price: 19999,
    discount_percentage: 35,
  },
  {
    id: 8,
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/23484790/2023/5/31/14fc49d0-6ce3-4410-9e8c-147f57c539d91685518426707HRXbyHrithikRoshanMenWhiteMeshRunningNon-MarkingShoes1.jpg",
    productName: "Nike Air Flow Shoes",
    discounted_price: 9999,
    original_price: 19999,
    discount_percentage: 35,
  },
  {
    id: 9,
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/23484790/2023/5/31/14fc49d0-6ce3-4410-9e8c-147f57c539d91685518426707HRXbyHrithikRoshanMenWhiteMeshRunningNon-MarkingShoes1.jpg",
    productName: "Nike Air Flow Shoes",
    discounted_price: 9999,
    original_price: 19999,
    discount_percentage: 35,
  },
  {
    id: 10,
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/23484790/2023/5/31/14fc49d0-6ce3-4410-9e8c-147f57c539d91685518426707HRXbyHrithikRoshanMenWhiteMeshRunningNon-MarkingShoes1.jpg",
    productName: "Nike Air Flow Shoes",
    discounted_price: 9999,
    original_price: 19999,
    discount_percentage: 35,
  },
];

const WishList = () => {
  return (
    <>
      <Navbar />

      <section
        id="wishlists"
        className="flex flex-col justify-center items-center mx-auto"
      >
        <div className="flex">
          <h3>My Wishlists </h3>
          <span>111 items</span>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {WishListItems.map((item) => {
            return (
              <>
                <div className="relative">
                  <button className="absolute top-2 right-2 bg-white text-black rounded-full">
                    <Close className="scale-75" />
                  </button>
                  <div className="img">
                    <img
                      src={item.imgUrl}
                      alt={item.productName}
                      className="w-72 object-cover"
                    />
                  </div>
                  <div className="details flex flex-col justify-center items-center space-y-1 border border-gray-400">
                    <p className="text-center">{item.productName}</p>
                    <div className="price flex space-x-1 items-center">
                      <p className="font-bold">{item.discounted_price}</p>
                      <p className="text-gray-500 font-semibold text-sm">
                        <strike className="decoration-red-500">
                          {item.original_price}
                        </strike>
                      </p>
                      <p className="text-red-500 text-xs font-bold">
                        {item.discount_percentage}% OFF
                      </p>
                    </div>
                    <button className=" text-sm max-sm:text-xs font-bold w-full bg-black h-[40px] max-sm:h-[35px] my-2 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-300 before:to-zinc-300 hover:text-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#fff]">
                      Move to Bag
                      <ShoppingCart className="mx-2 scale-90 max-sm:scale-75" />
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default WishList;
