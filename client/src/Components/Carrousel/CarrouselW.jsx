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
        <div class="w-auto h-full">
        <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              class="object-cover w-40 h-44 xl:w-56 xl:h-64"
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