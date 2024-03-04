import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { useParams } from "react-router-dom";
// import { items } from "../../data";
const SingleProductCarousal = ({ images }) => {
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
        {images?.map((item) => {
          return (
            <SwiperSlide>
              <div className="rounded-lg overflow-hidden">
                <img className="w-full h-full object-cover rounded-lg" src={item} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SingleProductCarousal;
