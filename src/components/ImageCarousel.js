import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//assets
import m1 from "../images/m1.png";
import m2 from "../images/m2.png";
import m3 from "../images/m3.png";
import m4 from "../images/m4.png";
import m5 from "../images/m5.png";
import m6 from "../images/m6.png";
import m7 from "../images/m7.png";
import m8 from "../images/m8.png";
import m9 from "../images/m9.png";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    cssEase: "linear",
  };
  return (
    <div className="slider-container m-2 lg:mx-auto px-2">
      <Slider {...settings}>
        <div className="">
          <img
            className="lg:h-15 h-14 w-full p-1 object-contain"
            src={m1}
            loading="lazy"
          />
        </div>
        <div className="">
          <img
            className="lg:h-15 h-14 w-full p-1 object-contain"
            src={m2}
            loading="lazy"
          />
        </div>
        <div className="">
          <img
            className="lg:h-15 h-14 w-full p-1 object-contain"
            src={m3}
            loading="lazy"
          />
        </div>
        <div className="">
          <img
            className="lg:h-15 h-14 w-full p-1 object-contain"
            src={m4}
            loading="lazy"
          />
        </div>
        <div className="">
          <img
            className="lg:h-15 h-14 w-full p-1 object-contain"
            src={m5}
            loading="lazy"
          />
        </div>
        <div className="">
          <img
            className="lg:h-15 h-14 w-full p-1 object-contain"
            src={m6}
            loading="lazy"
          />
        </div>
        <div className="">
          <img className="lg:h-15 h-14 w-full p-1" src={m7} loading="lazy" />
        </div>
        <div className="">
          <img className="lg:h-15 h-14 w-full p-1" src={m8} loading="lazy" />
        </div>
        <div className="">
          <img className="lg:h-15 h-14 w-full p-1" src={m9} loading="lazy" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
