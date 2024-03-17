import React from "react";
import { ShoppingCart, ShoppingCartCheckout } from "@mui/icons-material";

const product = [
  {
    id: 1,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3ee1c15861e74a0d81330e00b73392f1_9366/BASELINER_V2_INDOOR_Grey_IQ8789_01_standard.jpg",
    productName: "Adidas",
    price: 11999,
  },
  {
    id: 2,
    imgUrl:
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/89a1464bb91e46219131fedaf8e94acb_9366/Dropset_2_Trainer_Black_IG3305_01_standard.jpg",
    productName: "DROPSET 2 TRAINER",
    price: 12999,
  },
  {
    id: 3,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/eca64bfaa9704b34ba477ae1d7dc09fb_9366/TERREX_Soulstride_Flow_Trail_Running_Shoes_Black_HP5564_HM1.jpg",
    productName: "TERREX SOULSTRIDE",
    price: 13999,
  },
  {
    id: 4,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/12bad7a2bac7441ea8351d82ecfa815d_9366/Supernova_Solution_Shoes_Black_IF3005_HM1.jpg",
    productName: "SUPERNOVA SHOES",
    price: 14999,
  },
];

const NewArrival = () => {
  return (
    <>
      <div className="bg-zinc-100 py-16">
        <h1 className="flex text-4xl font-bold justify-center">New Arrivals</h1>

        <div>
          <div class="container flex flex-wrap mx-auto justify-center">
            {product.map((item, i) => {
              return (
                <div
                  class="item m-3 text-center border border-slate-100"
                  key={i}
                >
                  <div className="object-cover w-72 max-md:w-44">
                    <img
                      src={item.imgUrl}
                      alt={item.productName}
                      className="w-full max-md:h-48 object-cover"
                    />
                  </div>

                  <p>{item.productName}</p>
                  <p className="font-semibold">MRP: ₹ {item.price}</p>
                  <div className="flex flex-col justify-center relative">
                    <button className=" text-sm max-md:text-xs font-bold w-full bg-black h-[40px] max-md:h-[30px] my-2 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-300 before:to-zinc-300 hover:text-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#fff]">
                      Add to Cart
                      <ShoppingCart className="mx-2 scale-90 max-md:scale-75" />
                    </button>

                    <button className=" text-sm max-md:text-xs font-bold w-full  bg-zinc-300 h-[40px] max-md:h-[30px] my-1 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-black before:to-black hover:text-zinc-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#000]">
                      Buy Now
                      <ShoppingCartCheckout className="mx-2 scale-90 max-md:scale-75" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
