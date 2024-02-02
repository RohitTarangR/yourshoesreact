import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import shoe1 from "../../Assests/img/shoe1.jpg"
import shoe2 from "../../Assests/img/shoe2.jpg"
import shoe3 from "../../Assests/img/shoe3.jpg"
import shoe4 from "../../Assests/img/shoe4.jpg"

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = () => {
  return (
    <>
      <div className="p-10">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          showDots={true}
          rewindWithAnimation={true}
          arrows={true}
          pauseOnHover={false}
          autoPlay={true}
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
        >
          <div className="object-cover w-[100%] h-[100%]">
            <img src={shoe1} alt="" />
          </div>
          <div className="object-cover w-[100%] h-[100%]">
            <img src={shoe2} alt="" />
          </div>
          <div className="object-cover w-[100%] h-[100%]">
            <img src={shoe3} alt="" />
          </div>
          <div className="object-cover w-[100%] h-[100%]">
            <img src={shoe4} alt="" />
          </div>
        </Carousel>
        
      </div>
    </>
  );
};

export default Slide;
