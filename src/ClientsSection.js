import React from 'react';
import hector from './assets/img/ClientsSection/hector.png';
import jt from './assets/img/ClientsSection/jt.png';
import sarthak from './assets/img/ClientsSection/sarthaks.png';
import skasteels from './assets/img/ClientsSection/skasteels.png';
import blueline from './assets/img/ClientsSection/blueline.jpeg';
import cauvery from './assets/img/ClientsSection/cauvery.jpg';
import navadurga from './assets/img/ClientsSection/nav.png';
import kalinga from './assets/img/ClientsSection/kalinga.png';
import fataka from './assets/img/ClientsSection/fataka.png';
import rk from './assets/img/ClientsSection/rk.jpeg';
import shrestha from './assets/img/ClientsSection/shrestha.jpeg';
import dps from './assets/img/ClientsSection/dps.jpeg';
import vedantha from './assets/img/ClientsSection/vedantha.jpg';
import shristi from './assets/img/ClientsSection/shri.jpg';
import sunil from './assets/img/ClientsSection/sunil.jpg';
import jewellary from './assets/img/ClientsSection/jewellary.jpg';
import ganesh from './assets/img/ClientsSection/ganesh.jpeg';
import ks from './assets/img/ClientsSection/ks.jpeg';


const Clients = () => {
  return (
    <section id="services" class="services section">
      <div className="container section-title text-center" data-aos="fade-up">
        <br /><br />
        <h2>Our Clients</h2>
        <p>Our valued clients drive our success.<br /> Meet some of our esteemed partners and clients.</p>
      </div>
      <div class="container section-title" data-aos="fade-up">
      </div>
      <div class="container">
        <div class="row g-5">
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="500">
            <div class="service-item item-indigo position-relative">
              <img src={navadurga} class="bi bi-calendar4-week icon"/>
              <div>
                <h3>Navdurga group- Steel and Factory</h3>
                <p>Navdurga group is an industrial powerhouse with a dominant presence in steel and upcoming business in Ethanol, Ethanol, Tea Gardens, Resorts, Realty, Logistics, Mining and Education.</p>
                <a href="https://navdurgagroup.in/" class="read-more stretched-link">Learn More <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div class="service-item item-cyan position-relative">
              <img src={hector} alt="hector" class="bi bi-activity icon" />
              <div>
                <h3>Hector pipes</h3>
                <p> Hector pipes excel as efficient conduits for delivering high-pressure potable water, suitable for both hot and cold purposes, in both residential and industrial settings.</p>
                <a href="https://hectorpipes.com/" class="read-more stretched-link">Learn More <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div class="service-item item-orange position-relative">
              <img src={sarthak} alt="sarthak" class="bi bi-broadcast icon"/>
              <div>
                <h3>Sarthak TMT</h3>
                <p>Sarthak Group is the leading manufacturer of Iron and Steel sector. The company has an established presence in Heavy & Medium Steel Structural, TMT bars, Billets & Wire Rod with strong financial foundation.</p>
                <a href="https://sarthaktmt.com/" class="read-more stretched-link">Learn More <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div class="service-item item-teal position-relative">
              <img src={jt} alt="jt" class="bi bi-easel icon"/>
              <div>
                <h3>Jagdamba Trailors</h3>
                <p> Leading manufacturer based in Raigarh, Chhattisgarh, Jagadamba Trailors deliver excellence in Tip Trailers, Flatbed Trailers, Sidewall Trailers, and Tippers. </p>
                <a href="https://www.jagdambatrailers.com/" class="read-more stretched-link">Learn More <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <div class="service-item item-red position-relative">
              <img src={skasteels} class="bi bi-bounding-box-circles icon"/>
              <div>
                <h3>SKA Steels</h3>
                <p>SKA Steels is a reputed manufacturer and global supplier of high quality TMT Bars.</p>
                <a href="http://skasteel.in/" class="read-more stretched-link">Learn More <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="500">
            <div class="service-item item-indigo position-relative">
              <img src={blueline} class="bi bi-calendar4-week icon"/>
              <div>
                <h3>Blue lines TMT</h3>
                <p>Bluelines a reputed manufacturer and global supplier of high-quality TMT Bars, they are making consistent improvement in our quality and adding the value to the Steel.</p>
                <a href="https://www.linkedin.com/company/blue-lines-tmt/?originalSubdomain=in" class="read-more stretched-link">Learn More <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="600">
            <div class="service-item item-pink position-relative">
              <img src={cauvery} class="bi bi-chat-square-text icon"/>
              <div>
                <h3>Cauvery TMT</h3>
                <p>Cauvery TMT is renowned for its high-strength and durable TMT bars, serving the construction industry with top-notch quality.</p>
                <a href="https://www.youtube.com/watch?app=desktop&v=j738Z5ubgMw" class="read-more stretched-link">Learn More <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div class="service-item item-teal position-relative">
              <img src={kalinga} alt="jt" class="bi bi-easel icon"/>
              <div>
                <h3>Kalinga TMT</h3>
                <p>Kalinga are exceptionally strong, corrosion resistant, and have excellent bending property, giving them the strength to withstand enormous loads, earthquakes, and shakes.</p>
                <a href="https://kalingatmt.in/" class="read-more stretched-link">Learn More <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <div class="service-item item-red position-relative">
              <img src={ganesh} class="bi bi-bounding-box-circles icon"/>
              <div>
                <h3>Shri Ganesh Metaliks</h3>
                <p>Shri Ganesh Metaliks: Leading manufacturer of high-quality metallic products, specializing in durable and reliable construction materials.</p>
                <a href="https://www.facebook.com/p/Shree-Ganesh-Metaliks-Ltd-100068682734685/" class="read-more stretched-link">Learn More <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="500">
            <div class="service-item item-indigo position-relative">
              <img src={fataka} class="bi bi-calendar4-week icon"/>
              <div>
                <h3>Fataka Godam</h3>
                <p>FATAKA GODAM "Wholesaler & Retailer of all types of fancy crackers and fireworks available for festivals, marriages and all other functions !!</p>
                <a href="https://www.facebook.com/Fatakagodam/" class="read-more stretched-link">Learn More <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="600">
            <div class="service-item item-pink position-relative">
              <img src={rk} class="bi bi-chat-square-text icon"/>
              <div>
                <h3>RK Entertainments</h3>
                <p>RK Entertainments is a premier provider of entertainment services, specializing in organizing events and catering to diverse recreational needs.</p>
                <a href="https://www.facebook.com/rkraigarh/" class="read-more stretched-link">Learn More <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div class="service-item item-teal position-relative">
              <img src={shrestha} alt="jt" class="bi bi-easel icon"/>
              <div>
                <h3>Hotel Shreshtha</h3>
                <p>Hotel Shrestha is a luxurious hotel offering top-notch accommodations and exceptional hospitality in a prime location.</p>
                <a href="https://hotelshreshtha.co.in/" class="read-more stretched-link">Learn More <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <div class="service-item item-red position-relative">
              <img src={dps} class="bi bi-bounding-box-circles icon"/>
              <div>
                <h3>DPS Raigarh (school)</h3>
                <p>DPS RAIGARH offer a unique educational experience designed to enhance intellectual growth and promote paticipatory engagement.</p>
                <a href="https://www.dpsraigarh.com/" class="read-more stretched-link">Learn More <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="500">
            <div class="service-item item-indigo position-relative">
              <img src={ks} class="bi bi-calendar4-week icon"/>
              <div>
                <h3>KEDIA STEEL CORPORATION</h3>
                <p>one of the largest independent supplier of steel and related products.Its main aim is to supply customers with the best possible service.</p>
                <a href="https://www.kediasteelcorporation.com/" class="read-more stretched-link">Learn More <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="600">
            <div class="service-item item-pink position-relative">
              <img src={vedantha} class="bi bi-chat-square-text icon"/>
              <div>
                <h3>Vedanta Washery and Logistic Solution</h3>
                <p>Vedanta Washery AND Logistic Solutions Private Limited is majorly in Transport, storage and Communications business from last 11 years and currently, company operations are active.</p>
                <a href="https://www.linkedin.com/company/vedanta-washery-and-logistic-solutions-private-limited/about/" class="read-more stretched-link">Learn More <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div class="service-item item-teal position-relative">
              <img src={shristi} alt="jt" class="bi bi-easel icon"/>
              <div>
                <h3>Shrishtii TMT</h3>
                <p>Shrishtii TMT is a renowned name in Iron and Steel Industry backed by 24 glorious years of experience in steel making.</p>
                <a href="https://x.com/SHRISHTII_TMT/status/810027924824948736" class="read-more stretched-link">Learn More <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <div class="service-item item-red position-relative">
              <img src={sunil} class="bi bi-bounding-box-circles icon"/>
              <div>
                <h3>Sunil steels</h3>
                <p>Sunil Group of Industries take raw materials and craft them into high-quality iron and steel products that form the backbone of industries worldwide. With a commitment to excellence and innovation.</p>
                <a href="https://sunilgroupofindustries.com/" class="read-more stretched-link">Learn More <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="500">
            <div class="service-item item-indigo position-relative">
              <img src={jewellary} class="bi bi-calendar4-week icon"/>
              <div>
                <h3>Rambhagat Laxminarayan</h3>
                <p>Rambhagat Laxminarayan: Renowned jeweler offering exquisite designs and high-quality craftsmanship in fine jewelry.</p>
                <a href="https://www.instagram.com/rambhagatlaxminarayanjewellers/" class="read-more stretched-link">Learn More <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Clients;