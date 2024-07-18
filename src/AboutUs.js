import React, { useEffect } from 'react';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/aos/aos.css';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';


import about1 from './assets/img/About/About1.jpg';
import about2 from './assets/img/About/About2.jpg';
import about3 from './assets/img/About/About3.jpg';
import about4 from './assets/img/About/About4.jpg';
import about5 from './assets/img/About/About5.jpg';
import about6 from './assets/img/About/About6.jpg';
import about7 from './assets/img/About/About7.jpg';
import about71 from './assets/img/About/About8.jpg';
import about8 from './assets/img/About1/5.jpg';
import about9 from './assets/img/About1/3.jpg';
import about11 from './assets/img/About1/7.jpg';
import about12 from './assets/img/About1/6.png';

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section id="hero" className="hero section">
        <div className="hero-bg">
          <img src={about11} alt="background image" />
        </div>
        <div className="container section-title" data-aos="fade-up">
          <br/><br/><br/>
          <h2>About</h2>
          <h1 data-aos="fade-up"><strong><span>Our ERP Software Company</span></strong></h1><br/>
          <p  >Learn more about our company and our dedicated team.</p>
          <br/><br/>
        </div> 
      </section>
      
<section id="about-us" className="about-us section">
<section id="about-details" class="about-details section">
<div class="container">
  <div class="row gy-4 justify-content-between about-item">
    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
      <img src={about9} class="img-fluid" alt=""/>
    </div>

    <div class="col-lg-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
      <div class="content">
        <h3><a href="/AboutUs" className="stretched-link">We don’t hide, we stand tall in front of challenge!</a></h3>
        <p>
          We give 100% assurance for providing efficient solutions to any problems or complaints you face with any of our products.
          Any suitable suggestions regarding product alteration and simplification are always welcome.<br /><br />
          We provide a comprehensive ERP system to streamline your business operations and drive efficiency across your organization.
        </p>
      </div>
    </div>
  </div>
</div>
</section>

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
            <h4 className="title"><a href="#" className="stretched-link">Empower Businesses</a></h4>
            <p className="description">"Empower Businesses" is our first motto</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
        <div className="service-item d-flex">
          <div className="icon flex-shrink-0"><i className="bi bi-card-checklist"></i></div>
          <div>
            <h4 className="title"><a href="#" className="stretched-link">Increase Efficiency</a></h4>
            <p className="description">Increase Efficiency through our services</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
        <div className="service-item d-flex">
          <div className="icon flex-shrink-0"><i className="bi bi-bar-chart"></i></div>
          <div>
            <h4 className="title"><a href="#" className="stretched-link">Drive Innovation</a></h4>
            <p className="description">Drive Innovation with our solutions</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="about-hero1" class="about-hero1 section">
  <div class="about-hero-bg">
    <img src={about12} alt="background image" />
  </div>
  <div class="container about-section-title" data-aos="fade-up">
    <h2>Our Story</h2>
    <h3>We are an India based Company!</h3><br/>
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
      service-based organizations.<br/>
    </p><br/><br/>
  </div>
</section><br/><br/>


    <section id="project-timeline" className="project-timeline section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Project Timeline and Milestones</h2>
        </div>
        <div className="container" data-aos="fade-up">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Needs Assessment and Solution Design</h4>
                <p>The project team spent the first two months of the engagement thoroughly understanding the client's requirements and designing the ERP solution to meet their specific needs.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Data Migration and Integration</h4>
                <p>The data migration and integration with the client's legacy systems was a critical phase that took an additional three months to complete, ensuring the accuracy and reliability of the data in the new ERP system.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Software Implementation and Configuration</h4>
                <p>The installation and configuration of the ERP software took approximately four months, during which the team worked closely with the client to ensure a seamless implementation process.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>User Training and Go-Live</h4>
                <p>The final phase of the project involved comprehensive user training and the official go-live of the ERP system, which took approximately one month to complete.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
<section id="our-methodology" className="section">
  <div className="container">
    <div className="row gy-4" style={{ textAlign: 'center' }}>
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Vision</h2>
      </div>
      <br/>
      <div className="row justify-content-center">
        {[
          { icon: 'bi bi-shield-check', title: 'Integrity', description: 'We are committed to the highest ethical standards in all that we do.' },
          { icon: 'bi bi-award', title: 'Excellence', description: 'We strive for exceptional quality and continuous self-improvement.' },
          { icon: 'bi bi-people', title: 'Teamwork', description: 'We believe in the power of collaboration to drive success.' },
        ].map(({ icon, title, description }, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 mb-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={(index + 1) * 100} key={title}>
            <div className="service-item d-flex flex-column p-4 rounded shadow" style={{ background: '#fff', transition: 'transform 0.3s' }} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <div className="icon flex-shrink-0 small-icon mb-3" style={{ fontSize: '2rem', color: '#61dafb' }}><i className={icon}></i></div>
              <div className="flex-grow-1">
                <h4 className="title" style={{ color: '#333' }}>{title}</h4>
                <p className="description" style={{ color: '#666' }}>{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<section id="why-choose-us" className="section">
  <div className="container section-title" data-aos="fade-up">
    <h2>Why choose us</h2>
    <p>Streamline your operations and gain a competitive edge with our comprehensive ERP solutions.</p>
  </div>
  <div className="container">
    <div className="row gy-4">
      {[
        { icon: '🌟', title: 'Experience', description: 'With expertise and a successful track record, we can assist you in overcoming challenges and reaching your business objectives.' },
        { icon: '🚀', title: 'Innovation', description: 'We\'re dedicated to leading in technological innovation and providing solutions to help our clients succeed in today\'s fast-changing market.' },
        { icon: '🎯', title: 'Customer Focus', description: 'We prioritize client satisfaction by fostering trust, transparency, and mutual success through long-term relationships.' },
        { icon: '📈', title: 'Results-Driven', description: 'We prioritize client success by delivering measurable results that enhance efficiency, cut costs, and boost revenue growth.' },
      ].map(({ icon, title, description }, index) => (
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={(index + 1) * 100} key={title}>
          <div className="service-item1">
            <div className="icon1">
              <span >{icon}</span>
            </div>
            <div>
              <h4 className="title">{title}</h4>
              <p className="description">{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section id="more-features" className="more-features section">
      <div className="container">
        <div className="row justify-content-around gy-4">
          <div className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
            <h3>Star Features</h3>
            <p>Enjoy seamless integration with your favorite tools, unparalleled customer support, and customizable options to fit your needs.
            Experience the future of automation with our cutting-edge technology designed to boost your productivity and efficiency.</p>
            <div className="row">
              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-plug"></i>
                <div>
                  <h6>
                  API integration with GST, TDS, TCS.</h6>                
                </div>
              </div>
              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-whatsapp"></i>
                <div>
                  <h6>WhatsApp integration with MIS report</h6>                 
                </div>
              </div>
              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-truck"></i>
                <div>
                  <h6>Complete and detailed information of the fleet</h6>                
                </div>
              </div>
              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-gear"></i>
                <div>
                  <h6>100 % Highly Customizable</h6>                
                </div>
              </div>
              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-calculator"></i>
                <div>
                  <h6>
                  Automatic Party master generation using GSTN</h6>                  
                </div>
              </div>         
              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-phone"></i>
                <div>
                  <h6>User-friendly interface, as easy as a smartphone</h6>                
                </div>
              </div>
            </div>
          </div>
          <div className="features-image col-lg-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
            <img src={about8} alt="Features" />
          </div>
        </div>
      </div>
    </section>

 <section id="testimonials" className="testimonials section" style={{ background: '#f8f9fa' }}>
  <div className="container section-title" data-aos="fade-up">
    <h2>Meet</h2>
    <h3><a href="#" className='stretched-link'>Our Team</a></h3>
  </div>
  <div className="container" data-aos="fade-up" data-aos-delay="100">
    <Swiper
      modules={[Autoplay, Pagination]}
      loop={true}
      speed={600}
      autoplay={{ delay: 5000 }}
      slidesPerView="auto"
      pagination={{ clickable: true }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 1,
        },
      }}
    >
      {[
        { name: 'ARPIT AGRAWAL', role: 'Consultant: Business Development', degree: 'M.Tech (IIT Kharagpur)', img: about6 },
        { name: 'UTKARSH AGRAWAL', role: 'Director: Development & Implementation', degree: 'Founder & CEO', img: about1 },
        { name: 'MANAS AGRAWAL', role: 'Director: Sales', degree: 'Co-Founder', img: about2 },
        { name: 'MANISH AGRAWAL', role: 'Consultant: Application\'s Financial Structure', degree: 'FCA', img: about3 },
        { name: 'HARSHIT GOEL', role: 'Consultant: Application\'s Development', degree: 'B-Tech (Computer Science)', img: about4 },
        { name: 'ADITI AGRAWAL', role: 'Consultant: Application\'s Development', degree: 'BE (Computer Science)', img: about5 },
        { name: 'ILESH THAKKAR', role: 'Consultant: Business Development, Implementation and Support', degree: 'Business Head', img: about7},
        { name: 'RITIKA AGRAWAL', role: 'Consultant: Product & structural design', degree: 'Design Head', img: about71}
      ].map(({ name, role, degree, img }) => (
        <SwiperSlide key={name}>
          <div className="testimonial-item">
            <h3>{name}</h3>
            <h3 style={{ color: '#388da8' }}>{degree}</h3>
            <br />
            <p>{role}</p>
            <div className="profile mt-auto">
              <img src={img} className="testimonial-img" alt={name} style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="swiper-pagination"></div>
  </div>
</section>
</section>
</div>
  );
};

export default AboutUs;