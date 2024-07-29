import React from 'react';

function OurMission() {
  return (

<section id="featured-services" className="featured-services section">
  <div className="container">
    <div className="section-title" data-aos="fade-up" >
      <h2>Our Mission</h2>
    </div>
    <div className="row gy-4">
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        <div className="service-item d-flex">
          <div className="icon flex-shrink-0"><i className="bi bi-briefcase"></i></div>
          <div>
            <h4 className="title"><a className="stretched-link">Empower Businesses</a></h4>
            <p className="description">"Empower Businesses" is our first motto</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
        <div className="service-item d-flex">
          <div className="icon flex-shrink-0"><i className="bi bi-card-checklist"></i></div>
          <div>
            <h4 className="title"><a className="stretched-link">Increase Efficiency</a></h4>
            <p className="description">Increase Efficiency through our services</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
        <div className="service-item d-flex">
          <div className="icon flex-shrink-0"><i className="bi bi-bar-chart"></i></div>
          <div>
            <h4 className="title"><a className="stretched-link">Drive Innovation</a></h4>
            <p className="description">Drive Innovation with our solutions</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);
}

export default OurMission;
