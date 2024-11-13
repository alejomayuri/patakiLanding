'use client'
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './style.module.css';

const Carrusel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    afterChange: (current) => setActiveIndex(current),
  };

  return (
    <section>
      <Slider {...settings}>
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`${style.sliderElement} ${
              index === activeIndex
                ? style.activeSlide
                : style.inactiveSlide
            }`}
          >
            <h3>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod...
            </h3>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carrusel;