import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const AboutUs = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about-us" className="about-us section">
      <div className="container section-title" data-aos="fade-up">
        <br></br>
        <br></br>
        <h2>About Us</h2>
        <p>Learn more about our company and our dedicated team.</p>
      </div>
      
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6" data-aos="fade-right">
            <img src="path/to/about-image.jpg" alt="About Us" className="img-fluid" />
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <h3>Our Story</h3>
            <p>
              We are CodePlayers, a team of passionate professionals dedicated to providing innovative ERP solutions that empower businesses of all sizes. 
              Our journey started with a vision to simplify and streamline business processes through cutting-edge technology.
            </p>
            <h3>Our Mission</h3>
            <p>
              Our mission is to enhance business efficiency and growth by delivering top-notch ERP solutions and personalized support. 
              We are committed to continuous innovation and excellence in everything we do.
            </p>
          </div>
        </div>
        <div className="row gy-4 mt-5">
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="team-member">
              <img src="path/to/team-member1.jpg" alt="Team Member" className="img-fluid" />
              <h4>John Doe</h4>
              <p>CEO & Founder</p>
            </div>
          </div>
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="team-member">
              <img src="path/to/team-member2.jpg" alt="Team Member" className="img-fluid" />
              <h4>Jane Smith</h4>
              <p>CTO</p>
            </div>
          </div>
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="team-member">
              <img src="path/to/team-member3.jpg" alt="Team Member" className="img-fluid" />
              <h4>Mark Johnson</h4>
              <p>Head of Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
