import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import feature1 from "./assets/img/features-1.jpg";
import feature2 from "./assets/img/features-2.jpg";
import feature3 from "./assets/img/features-3.jpg";
import feature4 from "./assets/img/features-4.jpg";


const FeaturesDetails = () => {
  AOS.init();

  return (
    <section id="features-details" className="features-details section">
      <div className="container">
        <div className="row gy-4 justify-content-between features-item">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <img src={feature1} className="img-fluid" alt="Feature 1" />
          </div>
          <div className="col-lg-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
            <div className="content">
              <h3>Utilize Hardware Potential</h3>
              <p>
                Our software operates by exploiting the hightest potential of the hardware making the most of it.
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-between features-item">
          <div className="col-lg-5 d-flex align-items-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
            <div className="content">
              <h3>Dynamic Application Mechanism</h3>
              <p>The proposed mechanism achieves easy compatibility and acquisition feasibility under fluctuating needs.</p>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
            <img src={feature2} className="img-fluid" alt="Feature 2" />
          </div>
        </div>
        <div className="row gy-4 justify-content-between features-item">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <img src={feature3} className="img-fluid" alt="Feature 1" />
          </div>
          <div className="col-lg-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
            <div className="content">
              <h3>User Level Reports</h3>
              <p>
                Our ERP assists to view user session reports based on role based access control and track user activities.
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-between features-item">
          <div className="col-lg-5 d-flex align-items-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
            <div className="content">
              <h3>Scalable Upto the Mark</h3>
              <p>We endeavor to serve companies of all sizes to reap the benefits of ERP software.</p>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
            <img src={feature4} className="img-fluid" alt="Feature 2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesDetails;
