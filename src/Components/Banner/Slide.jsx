import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { imagesSlider } from "../../data";

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
      <div className="p-20 max-md:hidden">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          rewindWithAnimation={true}
          arrows={true}
          pauseOnHover={false}
          autoPlay={true}
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
        >
          {imagesSlider.map((item) => {
            return (
              <>
                <div className="w-[100%] h-[100%]" key={item.id}>
                  <img src={item.imgLink} alt={item.proName} />
                </div>
              </>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Slide;
