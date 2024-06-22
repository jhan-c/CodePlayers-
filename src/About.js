import React from 'react';
import { Link } from 'react-router-dom';
import aboutCompany1 from './assets/img/about-company-1.jpg';
import aboutCompany2 from './assets/img/about-company-2.jpg';
import aboutCompany3 from './assets/img/about-company-3.jpg';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <p className="who-we-are">Get to know us:</p>
            <h2>"We don’t hide, we stand tall in front of challenge"</h2><br/>
            <p className="fst">
            The CODEPLAYERS has been one of the most reliable leading software providers for the past 23 years.
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> <span>We give 100% assurance for providing efficient solutions to any problems or complaints you face with our any product.</span></li>
              <li><i className="bi bi-check-circle"></i> <span>CODEPLAYERS is the blend of following: Development, Design, SEO, Curiosity, Management.</span></li>
              <li><i className="bi bi-check-circle"></i> <span> Our customer has always given positive feedback about our efficiency and continue to be a part of our fascinating journey of software development.</span></li>
            </ul>
            <Link to="/aboutus" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></Link>
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
