'use client'

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carrousel = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1
      };

      return (
        <Slider {...settings}>
          <div>
            <img src="https://media.gq.com.mx/photos/62863225500ac81936c484e4/16:9/w_2560%2Cc_limit/pesas.jpg" alt="" />
          </div>
          <div>
            <img src="https://media.gq.com.mx/photos/62863225500ac81936c484e4/16:9/w_2560%2Cc_limit/pesas.jpg" alt="" />
          </div>
          <div>
            <img src="https://media.gq.com.mx/photos/62863225500ac81936c484e4/16:9/w_2560%2Cc_limit/pesas.jpg" alt="" />
          </div>
          <div>
            <img src="https://media.gq.com.mx/photos/62863225500ac81936c484e4/16:9/w_2560%2Cc_limit/pesas.jpg" alt="" />
          </div>
          {/* Agrega más slides según sea necesario */}
        </Slider>
      );

}

export default Carrousel