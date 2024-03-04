import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useParams } from "react-router-dom";
import { items } from "../../data";
const SingleProductCarousal = () => {
  const { productId } = useParams();
  console.log("productId:", productId);
  console.log("items:", items);

  const product = items.find((item) => item.id === parseInt(productId));
  const { subImg1, subImg2, subImg3, subImg4 } = product;
  // const productPage = "Men";

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {items.map((item) => {
          return (
            <SwiperSlide>
              <div>
                {
                  items.forEach((imgCarousal)=>{
                    <img
                      className="w-full h-full object-cover"
                      src={imgCarousal.images}
                      alt=""
                    />
                  })
                }
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SingleProductCarousal;
