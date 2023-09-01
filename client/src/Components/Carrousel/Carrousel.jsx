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
              className="object-cover w-[16.53938rem] h-[19rem]"
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