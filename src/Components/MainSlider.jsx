import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

// import images

import s1 from "../Assests/img/slider/1.png"


const MainSliderImg = [
  {
    id: 1,
    img: s1,
  },
  {
    id: 2,
    img: "https://swiperjs.com/demos/images/nature-1.jpg",
  },
  {
    id: 3,
    img: "https://swiperjs.com/demos/images/nature-1.jpg",
  },
  {
    id: 4,
    img: "https://swiperjs.com/demos/images/nature-1.jpg",
  },
  {
    id: 5,
    img: "https://swiperjs.com/demos/images/nature-1.jpg",
  },
  {
    id: 6,
    img: "https://swiperjs.com/demos/images/nature-1.jpg",
  },
  {
    id: 7,
    img: "https://swiperjs.com/demos/images/nature-1.jpg",
  },
];

function MainSlider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        loop={true}
        rewind={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {MainSliderImg.map((item) => {
          return (
            <>
              <SwiperSlide>
                <img
                  src={item.img}
                  alt="img" width={"30%"} height={"100%"} className="object-cover"
                />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}

export default MainSlider;
