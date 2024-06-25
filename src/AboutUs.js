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

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section id="about-us" className="about-us section">
        <div className="container section-title" data-aos="fade-up">
          <br/><br/><br/>
          <h2>About Us</h2>
          <p>Learn more about our company and our dedicated team.</p>
          <br/><br/>
        </div>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="company_skill">
                <h4>CODEPLAYERS is the blend of following.</h4>
                <div className="our_skill_inner">
                  {[
                    { skill: 'Development', value: 70 },
                    { skill: 'Design', value: 90 },
                    { skill: 'SEO', value: 85 },
                    { skill: 'Curiosity', value: 90 },
                    { skill: 'Management', value: 75 },
                  ].map(({ skill, value }) => (
                    <div className="single_skill" key={skill}>
                      <br />
                      <h5>{skill}</h5>
                      <div className="progress" style={{ width: '95%', height: '12px' }} data-value={value}>
                        <div className="progress-bar" style={{ width: `${value}%`, backgroundColor: '#61dafb' }}>
                          <div className="progress_parcent"><span className="counter">{value}</span>%</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" style={{ textAlign: 'center' }}>
              <h3><a href="/AboutUs" className="stretched-link">We don’t hide, we stand tall in front of challenge!</a></h3>
              <br/>
              <p>
                We give 100% assurance for providing efficient solutions to any problems or complaints you face with any of our products.
                Any suitable suggestions regarding product alteration and simplification are always welcome.
              </p>
              <br/><br/>
              <h3><a href="#" className='stretched-link'>We are an India based Company!</a></h3>
              <br/>
              <p>
                CODEPLAYERS has been one of the most reliable leading software providers for the past 23 years.
                Our customers have always given positive feedback about our efficiency and continue to be a part of our fascinating journey of software development.
              </p>
            </div>
          </div>
        </div>
        <br/><br/><br/><br/><br/>
        <div className="container">
          <div className="row gy-4" style={{ textAlign: 'center' }}>
            <div className="container section-title" data-aos="fade-up">
              <h2>OUR Methodology and Approach</h2>
            </div>
            <br/>
            {[
              { icon: 'bi bi-search', title: 'Needs Assessment', description: 'The project team thoroughly assesses the client\'s business processes, pain points, and long-term goals to ensure the ERP solution is a perfect fit.' },
              { icon: 'bi bi-pencil-square', title: 'Solution Design', description: 'The team designs an ERP solution tailored to the client\'s challenges and strategic objectives based on the needs assessment.' },
              { icon: 'bi bi-gear', title: 'Implementation', description: 'The implementation phase includes ERP installation, data migration, and employee training to ensure a smooth transition.' },
            ].map(({ icon, title, description }, index) => (
              <div className="col-xl-4 col-lg-4 col-md-4" data-aos="fade-up" data-aos-delay={(index + 1) * 100} key={title}>
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0 small-icon"><i className={icon}></i></div>
                  <div>
                    <h4 className="title"><a href="#" className="stretched-link">{title}</a></h4>
                    <p className="description">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features-details" className="features-details section">
        <div className="container">
          <div className="row gy-4 justify-content-between features-item" style={{ textAlign: 'center' }}>
            <div className="container section-title" data-aos="fade-up" style={{padding: '0px 12px 20px'}}>
              <h2>STRATEGIES</h2>
            </div>
            <div className="row gy-4 justify-content-center features-item" style={{padding: '0px-0px 0px'}} >
              {[
                { title: 'Needs Assessment and Solution Design', description: 'The project team spends the first two months understanding the client\'s requirements and designing a tailored ERP solution.' },
                { title: 'Data Migration and Integration', description: 'Data migration and integration with client legacy systems takes an additional three months, ensuring accuracy and reliability in the new ERP system.' },
                { title: 'Software Implementation and configuration', description: 'ERP software installation and configuration takes four months, with close collaboration for seamless implementation.' },
                { title: 'User training and Go-Live', description: 'The final project phase includes user training and ERP system go-live, completed in about one month.' },
              ].map(({ title, description }, index) => (
                <div className="col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={(index + 1) * 100} key={title}>
                  <div className="content d-flex flex-column justify-content-center">
                    <h4>{title}</h4>
                    <br/>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Meet</h2>
          <p>Our Team</p>
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
            ].map(({ name, role, degree, img }) => (
              <SwiperSlide key={name}>
                <div className="testimonial-item">
                  <h3>{name}</h3>
                  <h3 style={{ color: '#388da8' }}>{degree}</h3>
                  <br />
                  <p>{role}</p>
                  <div className="profile mt-auto">
                    <img src={img} className="testimonial-img" alt={name} style={{ width: '200px', height: '200px' }} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
