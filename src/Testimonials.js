import React, { useEffect } from 'react';
import './assets/vendor/swiper/swiper-bundle.min.css';
import Swiper from 'swiper/bundle';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from './assets/img/testimonials/testimonials-1.jpg';
import image2 from './assets/img/testimonials/testimonials-2.jpg';
import image3 from './assets/img/testimonials/testimonials-3.jpg';

const Testimonials = () => {
  useEffect(() => {
    AOS.init();
    new Swiper('.swiper-container', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 1,
        },
      },
    });
  }, []);

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Hear directly from our customers about their experiences with our products and services.</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper-container init-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                "Implementing CodePlayers Pvt Ltd's ERP system has been a game-changer for us. The extensive functionalities, combined with excellent customization options and reliable support, have greatly enhanced our efficiency. We strongly recommend their ERP system."
                </p>
                <div className="profile mt-auto">
                  <img src={image1} class="testimonial-img" alt=""/>
                  <h3>Shri Nimish Gadodia</h3>
                  <h4>Managing Director<br /> Navdurga Group & Scan Group of Companies</h4>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  "We are thrilled with the Infinity ERP system. It stands out with comprehensive features, an intuitive interface, and valuable customization options. Their robust support and proven success ensure smooth operations and enhanced productivity. We highly recommend their ERP solution for any organization looking to improve efficiency."
                </p>
                <div className="profile mt-auto">
                  <img src={image2} class="testimonial-img" alt=""/>
                  <h3>Shri Sparsh Goel</h3>
                  <h4>Director<br /> Hector Pipes</h4>
                </div> 
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  "We chose CodePlayers Pvt Ltd's ERP for its robust features and customization capabilities. The seamless integration into our existing systems and the immediate improvement in productivity have been impressive. Their support is top-notch, making this ERP a fantastic choice."
                </p>
                <div className="profile mt-auto">
                  <img src={image3} class="testimonial-img" alt=""/>
                  <h3>Shri Aman Agrawal</h3>
                  <h4>Director<br />Vedanta Washery & Logistics Private Limited</h4>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  "CodePlayers Pvt Ltd's ERP system has revolutionized our operations. The user friendly design and powerful features have streamlined our processes, while their exceptional support team ensures we always have the help we need. We highly recommend their ERP solution."
                </p>
                <div className="profile mt-auto">
                  <img src={image3} class="testimonial-img" alt=""/>
                  <h3>Shri Bhupesh Gupta</h3>
                  <h4>Managing Director<br />Cauvery Iron & Steel (India) Limited</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
