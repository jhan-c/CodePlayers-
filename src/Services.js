import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import feature1 from "./assets/img/features-1.jpg";
import feature2 from "./assets/img/features-2.jpg";
import feature3 from "./assets/img/features-3.jpg";
import feature4 from "./assets/img/features-4.jpg";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section id="features-details" className="features-details section">
        <div className="container">
          <div className="row gy-4 justify-content-between features-item">
            <div className="container section-title" data-aos="fade-up">
              <br/><br/>
              <br/><br/>
              <h2>Services</h2>
              <p>Our Excellent Services<br/> Single product, multiple verticles.</p>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <img src={feature1} className="img-fluid" alt="Feature 1" />
            </div>
            <div className="col-lg-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
              <div className="content">
                <h3>Utilize Hardware Potential</h3>
                <p>
                  Our software operates by exploiting the highest potential of the hardware making the most of it.
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
              <img src={feature3} className="img-fluid" alt="Feature 3" />
            </div>
            <div className="col-lg-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
              <div className="content">
                <h3>User Level Reports</h3>
                <p>
                  Our ERP assists to view user session reports based on role-based access control and track user activities.
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
              <img src={feature4} className="img-fluid" alt="Feature 4" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item">
                <div className="icon">
                  <i className="bi bi-briefcase"></i>
                </div>
                <h4 className="title"><a href="#" className="stretched-link">Lorem Ipsum</a></h4>
                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item">
                <div className="icon">
                  <i className="bi bi-card-checklist"></i>
                </div>
                <h4 className="title"><a href="#" className="stretched-link">Dolor Sitema</a></h4>
                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item">
                <div className="icon">
                  <i className="bi bi-bar-chart"></i>
                </div>
                <h4 className="title"><a href="#" className="stretched-link">Sed ut perspiciatis</a></h4>
                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="service-item">
                <div className="icon">
                  <i className="bi bi-binoculars"></i>
                </div>
                <h4 className="title"><a href="#" className="stretched-link">Magni Dolores</a></h4>
                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="service-item">
                <div className="icon">
                  <i className="bi bi-brightness-high"></i>
                </div>
                <h4 className="title"><a href="#" className="stretched-link">Nemo Enim</a></h4>
                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div className="service-item">
                <div className="icon">
                  <i className="bi bi-calendar4-week"></i>
                </div>
                <h4 className="title"><a href="#" className="stretched-link">Eiusmod Tempor</a></h4>
                <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
