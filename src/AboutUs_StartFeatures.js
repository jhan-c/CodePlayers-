import React from 'react';
import AOS from 'aos';

import image from './assets/img/About1/5.jpg';

const StarFeatures = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="more-features" className="more-features section">
      <div className="container">
        <div className="row justify-content-around gy-4">
          <div className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
            <h3>Star Features</h3>
            <p>Enjoy seamless integration with your favorite tools, unparalleled customer support, and customizable options to fit your needs.
            Experience the future of automation with our cutting-edge technology designed to boost your productivity and efficiency.</p>
            <div className="row">
              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-plug"></i>
                <div>
                  <h6>API integration with GST, TDS, TCS.</h6>                
                </div>
              </div>
              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-whatsapp"></i>
                <div>
                  <h6>WhatsApp integration with MIS report</h6>                 
                </div>
              </div>
              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-truck"></i>
                <div>
                  <h6>Complete and detailed information of the fleet</h6>                
                </div>
              </div>
              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-gear"></i>
                <div>
                  <h6>100 % Highly Customizable</h6>                
                </div>
              </div>
              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-calculator"></i>
                <div>
                  <h6>Automatic Party master generation using GSTN</h6>                  
                </div>
              </div>         
              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-phone"></i>
                <div>
                  <h6>User-friendly interface, as easy as a smartphone</h6>                
                </div>
              </div>
            </div>
          </div>
          <div className="features-image col-lg-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
            <img src={image} alt="Features" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StarFeatures;
