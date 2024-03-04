// import { Star } from "@mui/icons-material";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { ShoppingCart, ShoppingCartCheckout, Star } from "@mui/icons-material";

export const FeaturedProd = [
  {
    id: 1,
    title: "Product A",
    price: " ₹ 10 295.00",
    imgUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/07d5448e-c263-4169-95ff-195c58804c33/air-jordan-1-low-se-shoes-ZbxSRp.png",
  },
  {
    id: 2,
    title: "Product A",
    price: " ₹ 11 395.00",
    imgUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2a52f45b-1907-4809-8f8b-7849f4773b59/air-max-90-shoes-0MB5rJ.png",
  },
  {
    id: 3,
    title: "Product A",
    price: " ₹ 16 995.00",
    imgUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7cc09330-8e8f-49fa-a5c6-d3a11210bebd/air-more-uptempo-96-shoes-x7J3ls.png",
  },
  {
    id: 4,
    title: "Product A",
    price: " ₹ 11 895.00",
    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1c4ca3c-8b78-4ada-b132-173349363373/luka-2-pf-basketball-shoes-LM9ScX.png",
  },
  {
    id: 5,
    title: "Product A",
    price: " ₹ 11 895.00",
    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c799e0e8-3dbd-4ae4-bff4-b8607df0a5be/lebron-nxxt-gen-ampd-ep-basketball-shoes-G2Xh7F.png",
  },
  {
    id: 6,
    title: "Product A",
    price: " ₹ 11 895.00",
    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7d8adeb5-2a20-468c-a168-ffc4bad9f469/air-pegasus-89-g-nrg-golf-shoes-59Dfnm.png",
  },
  {
    id: 7,
    title: "Product A",
    price: " ₹ 11 895.00",
    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b1ebdb3-9043-492d-94bf-8ab78dccafb9/air-max-dn-shoes-FtLNfm.png",
  },
  {
    id: 8,
    title: "Product A",
    price: " ₹ 11 895.00",
    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1773a565-253c-4f32-bd9e-9934e60ced9a/air-dunk-jumbo-shoes-wc8JrQ.png",
  },
];

const FeaturedItem = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center pb-10">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Our featured items
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            faucibus massa dignissim tempus.
          </p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination, Autoplay]}
          autoplay={{ delay: 1000 }}
          pagination={false}
          breakpoints={{
            // When window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // When window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // When window width is >= 1024px
            1220: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          {FeaturedProd.map((product) => {
            return (
              <>
                <SwiperSlide>
                  <div className="relative group">
                    <div className="overflow-hidden aspect-w-1 aspect-h-1">
                      <img
                        className="object-cover w-full h-72 transition-all duration-300 group-hover:scale-105"
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
                            {product.title}
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
                          {product.price}
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
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
export default FeaturedItem;
