import React from 'react';
import background from "../src/assets/img/About1/7.webp";

function AboutUs_HeroSection() {
  return (
    <section id="hero" className="hero section">
      <div className="hero-bg">
        <img src={background} alt="background image" />
      </div>
      <div className="container text-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 data-aos="fade-up">About</h1>
            <h1 data-aos="fade-up"><span>Our ERP Software Company</span></h1>
            <p data-aos="fade-up" data-aos-delay="100">Learn more about our company and our dedicated team.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs_HeroSection;

