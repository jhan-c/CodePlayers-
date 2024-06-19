import React, { useEffect } from 'react';
import './assets/vendor/swiper/swiper-bundle.min.css';
import Swiper from 'swiper/bundle';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper-container init-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <h2>"They are the best"</h2>
                <p>
                    Codeplayers has been providing SchoolPro in our school since 2016. We found it very helpful in finding solutions to all major and minor problems such as attendance, admission, fee or transport. All the modules have unique and specific features which ultimately save time and help us to be more advanced through technology. I wish all the very best to Codeplayers team and hope that you will be the ‘One stop solution’ for digital education in future.
                </p>
                <div className="profile mt-auto">
                  <h3>Shakti Agrawal</h3>
                  <h4>Director DPS</h4>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <h2>Infinity ERP and nothing else!</h2>
                <p>
                    Infinity Erp. is like a data matrix for us. It has made it easier for us to gather all the information in one place. The insights that the software provides us has helped us in targeting the correct audience by expanding our marketing strategy. Codeplayer’s restaurant management system has also assisted us in managing our inventory more efficiently and control the overall restaurant management cost.  I have always recommended Codeplayer’s for their proactive services.
                </p>
                <div className="profile mt-auto">
                  <h3>Shikhar Agrawal</h3>
                  <h4>Owner RK Entertainments</h4>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <h2>Nothing More Simplified...</h2>
                <p>
                    “Implementation of Infinity Erp. Hotel Software has improved various operational aspects in our hotel and has enhanced the management reporting system too. ''We are much satisfied with Codeplayer’s user-friendly software and their instant services.”Most importantly, its 24/7 physical and online support makes Codeplayer’s special.”
                </p>
                <div className="profile mt-auto">
                  <h3>Manoj Agrawal</h3>
                  <h4>Owner Hotel Pathik</h4>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <h2>"Thankyou CodePlayers"</h2>
                <p>
                    Infinity Erp. provides better control of what’s happening at our QSR.  I like the Anti-theft dashboard the most, it is easy to use. It has allowed us to swiftly open the dashboard and access the total sales made from anywhere. We can now classify the risks and monitor any suspicious bill alterations conveniently. My experience with Codeplayers has been really great.
                </p>
                <div className="profile mt-auto">
                  <h3>Manoj Bansal</h3>
                  <h4>Galaxy The Mall</h4>
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
