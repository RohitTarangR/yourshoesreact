import React from 'react'
// import SingleProduct from '../Products/SingleProduct';
import { ShoppingCart, ShoppingCartCheckout, Star } from '@mui/icons-material';



const product = [
  {
    id: 1,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3ee1c15861e74a0d81330e00b73392f1_9366/BASELINER_V2_INDOOR_Grey_IQ8789_01_standard.jpg",
    pTitle: "Adidas",
    price: 11999,
  },
  {
    id: 2,
    imgUrl:
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/89a1464bb91e46219131fedaf8e94acb_9366/Dropset_2_Trainer_Black_IG3305_01_standard.jpg",
    pTitle: "DROPSET 2 TRAINER",
    price: 12999,
  },
  {
    id: 3,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/eca64bfaa9704b34ba477ae1d7dc09fb_9366/TERREX_Soulstride_Flow_Trail_Running_Shoes_Black_HP5564_HM1.jpg",
    pTitle: "TERREX SOULSTRIDE",
    price: 13999,
  },
  {
    id: 4,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/12bad7a2bac7441ea8351d82ecfa815d_9366/Supernova_Solution_Shoes_Black_IF3005_HM1.jpg",
    pTitle: "SUPERNOVA SOLUTION SHOES",
    price: 14999,
  },
];


const NewArrival = () => {
  return (
    <>
      <div className="bg-zinc-100 py-16">
        <h1 className="flex text-4xl font-bold justify-center">
          New Arrivals
        </h1>

        <div className="flex flex-wrap gap-5 justify-center  mx-auto mt-8">
            {product.map((product) => (
              // <SingleProduct key={product.id} product={product} />
              <div className="relative group">
                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                  <img
                    className="object-cover w-80 h-72 transition-all duration-300 group-hover:scale-105"
                    src={product.imgUrl}
                    alt=""
                  />
                </div>
                <div className="absolute left-3 top-3">
                  <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">
                    Sale
                  </p>
                </div>
                <div className="flex items-start justify-between mt-4 space-x-4">
                  <div>
                    <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                      <p href="#" title="">
                        {product.pTitle}
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                      </p>
                    </h3>
                    <div className="flex items-center mt-2.5 space-x-px">
                      <Star className="text-yellow-500 text-xs" />
                      <Star className="text-yellow-500 text-xs" />
                      <Star className="text-yellow-500 text-xs" />
                      <Star className="text-yellow-500 text-xs" />
                      <Star className="text-yellow-500 text-xs" />
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                      ₹ {product.price}.00
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center relative">
                  <button className="font-bold w-full bg-black h-[40px] my-2 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-300 before:to-zinc-300 hover:text-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#fff]">
                    Add to Cart
                    <ShoppingCart className="mx-2" />
                  </button>

                  <button className="font-bold w-full  bg-zinc-300 h-[40px] my-1 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-black before:to-black hover:text-zinc-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#000]">
                    Buy Now
                    <ShoppingCartCheckout className="mx-2" />
                  </button>
                </div>
              </div>
            ))}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default NewArrival


