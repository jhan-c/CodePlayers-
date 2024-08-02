import React from 'react';
import animation from "../src/assets/img/hero-services-img.png";
import background from "../src/assets/img/hero-bg-light.webp";

function HeroSection() {
  return (
    <section id="hero" className="hero section">
      <div className="hero-bg">
        <img src={background} alt="background image" />
      </div>
      <div className="container text-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
        <img src={animation} className="img-fluid hero-img" alt="" data-aos="zoom-out" data-aos-delay="300" />
          <h1 data-aos="fade-up">"Empower your business with innovative ERP from <span>CodePlayers"</span></h1>
          <p data-aos="fade-up" data-aos-delay="100">Choose a powerful ERP for your Enterprise</p>
          <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
            <a href="./RequestDemoForm" className="btn-get-started">Request a demo</a>
            <a href="https://youtu.be/rhCQjqgtzks?si=PCSh9XerzD4kXfMO" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
