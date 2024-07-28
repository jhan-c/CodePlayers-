import React from 'react';
import backgroundimage from './assets/img/About1/6.png';

function OurStory() {
  return (
    <><section id="about-hero1" class="about-hero1 section">
          <div class="about-hero-bg">
              <img src={backgroundimage} alt="background image" />
          </div>
          <div class="container about-section-title" data-aos="fade-up">
              <h2>Our Story</h2>
              <h3>We are an India based Company!</h3><br />
              <p>
                  CODEPLAYERS has been one of the most reliable leading software providers for the past years.
                  Our customers have always given positive feedback about our efficiency and continue to be a part of our fascinating journey of software development.
              </p>
              <p>
                  Established in 2010, the ERP software company has become a trusted partner
                  for businesses of all sizes in the Raipur region and beyond. With a team of
                  experienced software engineers, business analysts, and industry experts, the
                  company has developed a comprehensive suite of ERP solutions that cater to
                  the unique needs of various industries, including manufacturing, retail, and
                  service-based organizations.<br />
              </p><br /><br />
          </div>
      </section><br /><br />
    </>
  );
}


export default OurStory;
