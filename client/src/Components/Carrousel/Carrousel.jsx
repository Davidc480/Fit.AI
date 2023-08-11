'use client'

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carrousel = ()=>{
    const settings = {
        dots: true,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1
      };

      return (
        <Slider {...settings}>
          <div class="w-[16.53938rem] h-[24.80906rem] overflow-hidden">
            <img class="w-auto h-auto object-top"src="https://us.123rf.com/450wm/tommisch/tommisch1605/tommisch160500169/57388958-hombre-atl%C3%A9tico-mostrando-cuerpo-musculoso-y-haciendo-ejercicios-con-pesas-sobre-fondo-negro.jpg?ver=6" alt="" />
          </div>
          {/* <div >
            <img class="w-auto h-auto" src="https://www.boldtribe.com/cdn/shop/articles/Entrenamiento_De_Espalda_En_Casa_Para_Mejorar_Su_Postura_480x.jpg?v=1621475288" alt="" />
          </div> */}
          <div>
            <img class="w-16.53938rem h-24.80906rem" src="https://s2.best-wallpaper.net/wallpaper/iphone/1910/Man-muscle-dumbbells-black-background_iphone_1080x1920.jpg" alt="" />
          </div>
          {/* <div>
            <img src="https://media.gq.com.mx/photos/62863225500ac81936c484e4/16:9/w_2560%2Cc_limit/pesas.jpg" alt="" />
          </div> */}
          {/* Agrega más slides según sea necesario */}
        </Slider>
      );

}



export default Carrousel