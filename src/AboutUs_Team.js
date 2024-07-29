import React, { useEffect } from 'react';
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
import about7 from './assets/img/About/About8.jpg';
import about8 from './assets/img/About/About9.png';


// Import the team member detail components
const ArpitAgrawal = '/ArpitAgrawal';
const UtkarshAgrawal = '/UtkarshAgrawal';
const ManasAgrawal = '/ManasAgrawal';
const ManishAgrawal = '/ManishAgrawal';
const HarshitGoel = '/HarshitGoel';
const AditiAgrawal = '/AditiAgrawal';
const IleshThakkar = '/IleshThakkar';
const RitikaAgrawal = '/RitikaAgrawal';

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);


return (

<section id="about-us" className="about-us section">

 <section id="testimonials" className="testimonials section" style={{ background: '#f8f9fa' }}>
  <div className="container section-title" data-aos="fade-up">
    <h2>Meet</h2>
    <h3><a className='stretched-link'>Our Team</a></h3>
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
        { name: 'ARPIT AGRAWAL', role: 'Consultant: Business Development', degree: 'M.Tech (IIT Kharagpur)', img: about6 , link: ArpitAgrawal },
        { name: 'UTKARSH AGRAWAL', role: 'Director: Development & Implementation', degree: 'Founder & CEO', img: about1 , link: UtkarshAgrawal},
        { name: 'MANAS AGRAWAL', role: 'Director: Sales', degree: 'Co-Founder', img: about2 , link: ManasAgrawal},
        { name: 'MANISH AGRAWAL', role: 'Consultant: Application\'s Financial Structure', degree: 'FCA', img: about3 , link: ManishAgrawal},
        { name: 'HARSHIT GOEL', role: 'Consultant: Application\'s Development', degree: 'B-Tech (Computer Science)', img: about4 , link: HarshitGoel},
        { name: 'ADITI AGRAWAL', role: 'Consultant: Application\'s Development', degree: 'BE (Computer Science)', img: about5 , link: AditiAgrawal},
        { name: 'ILESH THAKKAR', role: 'Consultant: Business Development, Implementation and Support', degree: 'Business Head', img: about8 , link: IleshThakkar},
        { name: 'RITIKA AGRAWAL', role: 'Consultant: Product & structural design', degree: 'Design Head', img: about7 , link: RitikaAgrawal}
      ].map(({ name, role, degree, img, link }) => (
        <SwiperSlide key={name}>
          <div className="testimonial-item">
            <h3>{name}</h3>
            <h3 style={{ color: '#388da8' }}>{degree}</h3>
            <br />
            <p>{role}</p>
            <div className="profile mt-auto">
              <img src={img} className="testimonial-img" alt={name} style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
            <a href={link} class="read-more stretched-link">know more <i class="bi bi-arrow-right"></i></a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="swiper-pagination"></div>
  </div>
</section>
</section>
  );
};

export default AboutUs;