'use client'

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carrousel = ({images})=>{
    const settings = {
      dots: false,
      vertical: true,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4500,
      variableHeight: true,
      cssEase: "linear"
      };

return (
  <div class="w-full h-full flex justify-center items-center">
  <Slider {...settings}>
  {images.map((image, index) => (
    <div class="flex justify-center items-center h-full" key={index}>
      <img
        class="object-cover w-40 h-36  xl:w-[13.53938rem] xl:h-[11.5rem] 2xl:w-64 2xl:h-72"
        src={image}
        alt={`Image ${index}`}
      />
    </div>
  ))}
  </Slider>
  </div>
);

}



export default Carrousel
