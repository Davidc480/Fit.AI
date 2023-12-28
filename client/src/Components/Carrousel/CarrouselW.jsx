'use client'

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const CarrouselW = ({images})=>{
    const settings = {
      dots: false,
      rtl: true,
      vertical: true,
      arrows: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4500,
      variableHeight: true,
      cssEase: "linear"
      };

      return (
        <div class="w-auto h-full flex justify-center items-center">
        <Slider {...settings}>
        {images.map((image, index) => (
          <div class="flex justify-center items-center  h-full" key={index}>
            <img
              class="object-cover w-40 h-44 xl:w-56 xl:h-64 2xl:w-80 2xl:h-[27rem]"
              src={image}
              alt={`Image ${index}`}
            />
          </div>
        ))}
        </Slider>
        </div>
      );

}



export default CarrouselW
