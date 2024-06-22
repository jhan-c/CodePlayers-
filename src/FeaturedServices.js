import React from 'react';

function FeaturedServices() {
  return (
    <section id="featured-services" className="featured-services section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-xl-3 col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0"><i className="bi bi-briefcase"></i></div>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">Ease of use</a></h4>
                <p className="description">"Ease of use" is our first motto</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0"><i className="bi bi-card-checklist"></i></div>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">Utilize Hardware Potential</a></h4>
                <p className="description">Newest OS ready..</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0"><i className="bi bi-bar-chart"></i></div>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">Large Scale Database</a></h4>
                <p className="description">Capable of handling large scale database</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0"><i className="bi bi-gear"></i></div>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">Highly Customizable</a></h4>
                <p className="description">Highly Customizable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedServices;
