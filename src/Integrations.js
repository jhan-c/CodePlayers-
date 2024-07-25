import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

import weighbridge from './assets/img/integration/weighbridge.png';
import tally from './assets/img/integration/tally.png';
import rfid from './assets/img/integration/rfid.png';
import client1 from './assets/img/clients/client-1.png';
import client2 from './assets/img/clients/client-2.png';
import client3 from './assets/img/clients/client-3.jpg';
import client4 from './assets/img/clients/client-4.png';
import client5 from './assets/img/clients/client-5.png';
import client6 from './assets/img/clients/client-6.png';
import epabx from './assets/img/integration/epabx.jpg';
import attendance from './assets/img/integration/attendance.png';
import secureye from './assets/img/integration/secureye.png';

const FeaturesDetails = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="features-details" className="features-details section">
      <div className="container section-title" data-aos="fade-up">
        <br></br>
        <br></br>
        <h2>Our Integrations</h2>
        <p>See what we can Integrate</p>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-between features-item">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <img src={weighbridge} className="img-fluid" alt="Feature 1" />
          </div>
          <div className="col-lg-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
            <div className="content">
              <h3>Weigh Bridge Integrations</h3>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>SMEs not even think to systemize their business operations without integration with WeighBridges.</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Zero the chance of revenue leakage being done by weighment operator in your organization.</span></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Features Item */}
        <div className="row gy-4 justify-content-between features-item">
          <div className="col-lg-5 d-flex align-items-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
            <div className="content">
              <h3>Accounting Integrations</h3>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>Push your vouchers into Tally as well as other accounting software with ease.</span></li>
                <li><i className="bi bi-check-circle"></i> <span> Save time and eliminate manual errors. Easily collaborate with tax practitioners for return filing.</span></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
            <img src={tally} className="img-fluid" alt="Feature 2" />
          </div>
        </div>
        {/* Features Item */}
        <div className="row gy-4 justify-content-between features-item">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <img src={rfid} className="img-fluid" alt="Feature 1" />
          </div>
          <div className="col-lg-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
            <div className="content">
              <h3>RFID Integrations</h3>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>Our Hotel PMS is ready to work with RFID cards.</span></li>
                <li><i className="bi bi-check-circle"></i> <span>You can manage your food court with Prepaid RFID card POS System.</span></li>
                <li><i className="bi bi-check-circle"></i> <span>With a very cost effective solution you can prevent revenue loss in your organisation.</span></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Features Item */}
        <div className="row gy-4 justify-content-between features-item align-items-center">
    <div className="col-lg-5 d-flex align-items-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
      <div className="content">
        <h3>Payment Integrations</h3>
        <ul>
          <li><i className="bi bi-check-circle"></i> <span>Give your customers the freedom to pay online.</span></li>
          <li><i className="bi bi-check-circle"></i> <span>Our ERP provides integrations with multiple leading online payment service providers.</span></li>
          <li><i className="bi bi-check-circle"></i> <span>Accept online payments from the popular digital wallets without any hassles.</span></li>
        </ul>
      </div>
    </div>
    <div className="col-lg-7 d-flex justify-content-end order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
      <div className="client d-flex flex-wrap justify-content-end">
        <div className="clients-logo">
          <img src={client1} className="img-fluid" alt="Client 1" />
        </div>
        <div className="clients-logo">
          <img src={client2} className="img-fluid" alt="Client 2" />
        </div>
        <div className="clients-logo">
          <img src={client3} className="img-fluid" alt="Client 3" />
        </div>
        <div className="clients-logo">
          <img src={client4} className="img-fluid" alt="Client 4" />
        </div>
        <div className="clients-logo">
          <img src={client5} className="img-fluid" alt="Client 5" />
        </div>
        <div className="clients-logo">
          <img src={client6} className="img-fluid" alt="Client 6" />
        </div>
      </div>
    </div>
  </div>
        {/* Features Item */}
        <div className="row gy-4 justify-content-between features-item">
          <div className="col-lg-6 my-5" data-aos="fade-up" data-aos-delay="100"> 
            <img src={attendance} className="img-fluid" alt="Feature 1" />
          </div>
          <div className="col-lg-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
            <div className="content">
              <h3>Attendance Machine Integrations</h3>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>Tell your Employees to touch their finger once or use face recognition with attendance machines.</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Leave rest on us. Do not waste time to prepare salary statement by manual attendance. Easily monitor employee's activity.</span></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Features Item */}
        <div className="row gy-4 justify-content-between features-item">
          <div className="col-lg-5 d-flex align-items-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
            <div className="content">
              <h3>Room Lock Integrations</h3>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>Integrate your key card programmer with hotel PMS.</span></li>
                <li><i className="bi bi-check-circle"></i> <span>controll your room lock with our PMS. No need to double the check-in/check-out entry with another software.</span></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
            <img src={secureye} className="img-fluid" alt="Feature 2" />
          </div>
        </div>
        {/* Features Item */}
        <div className="row gy-4 justify-content-between features-item">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <img src={epabx} className="img-fluid" alt="EPABX" />
          </div>
          <div className="col-lg-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
            <div className="content">
              <h3>EPABX Integrations</h3>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>Integrate your Telephone EPABX System with hotel PMS.</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Let auto download the SMDR data to the server. And save revenue by controlling telephone missuse.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesDetails;