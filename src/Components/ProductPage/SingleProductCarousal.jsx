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
    const { id, imgUrl, subImg1, subImg2, subImg3, subImg4 } = product;
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
        <SwiperSlide>
          <div>
            <img className="w-full h-full object-cover" src={subImg1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={subImg2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={subImg3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={subImg4} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SingleProductCarousal;
