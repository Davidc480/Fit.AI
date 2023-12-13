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
        <div class="w-auto h-full">
        <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              class="object-cover w-40 h-36 sm:w-5 sm:h-5 xl:w-[13.53938rem] xl:h-[11.5rem] 2xl:w-[18rem] 2xl:h-[18.1rem]"
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