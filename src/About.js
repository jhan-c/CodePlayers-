import React from 'react';
import aboutCompany1 from './assets/img/about-company-1.jpg';
import aboutCompany2 from './assets/img/about-company-2.jpg';
import aboutCompany3 from './assets/img/about-company-3.jpg';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <p className="who-we-are">Who We Are</p>
            <h3>Our Story</h3>
            <p className="fst-italic">
              Established in 2010, the ERP software company has become a trusted partner
              for businesses of all sizes in the Raipur region and beyond. With a team of
              experienced software engineers, business analysts, and industry experts, the
              company has developed a comprehensive suite of ERP solutions that cater to
              the unique needs of various industries, including manufacturing, retail, and
              service-based organizations.
            </p>
            <p className='fst-italic'>
              The company's commitment to innovation and customer-centric approach has
              been the driving force behind its success. By continuously investing in research
              and development, the company has been able to stay ahead of the curve,
              offering its clients cutting-edge technology and streamlined business
              processes that improve efficiency, productivity, and ultimately, the bottom line.
            </p>
            
            <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
          </div>
          <div className="col-lg-6 about-images" data-aos="fade-up" data-aos-delay="200">
            <div className="row gy-4">
              <div className="col-lg-6">
                <img src={aboutCompany1} className="img-fluid" alt="About Company 1" />
              </div>
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-lg-12">
                    <img src={aboutCompany2} className="img-fluid" alt="About Company 2" />
                  </div>
                  <div className="col-lg-12">
                    <img src={aboutCompany3} className="img-fluid" alt="About Company 3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
