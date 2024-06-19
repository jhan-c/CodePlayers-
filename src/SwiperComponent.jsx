import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const SwiperComponent = () => {
    useEffect(() => {
      const swiper = new Swiper('.swiper-container', {
        // Swiper options here
        slidesPerView: 1,
        spaceBetween: 10,
        // Add more Swiper options as needed
      });
  
      // Optional: Destroy Swiper instance on component unmount
      return () => {
        swiper.destroy(true, true);
      };
    }, []); // Empty dependency array ensures effect runs only once
  
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
          {/* Add more slides as needed */}
        </div>
      </div>
    );
  };
  
  export default SwiperComponent;
  