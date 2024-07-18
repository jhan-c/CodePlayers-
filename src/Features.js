import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import tab1 from "./assets/img/tabs-1.jpg";
import tab2 from "./assets/img/tabs-2.jpg";
import tab3 from "./assets/img/tabs-3.jpg";

const Features = () => {
  const [activeTab1, setActiveTab1] = useState('features-tab-1');
  const [activeTab2, setActiveTab2] = useState('features-tab-5'); // Start with the fifth feature active

  useEffect(() => {
    AOS.init();
  }, []);

  const handleTabClick1 = (tabId) => {
    setActiveTab1(tabId);
  };

  const handleTabClick2 = (tabId) => {
    setActiveTab2(tabId);
  };

  return (
    <section id="features" className="features section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Features</h2>
        <p>We've learned from customer experience and work back towards the technology</p>
      </div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 d-flex align-items-center">
            <ul className="nav nav-tabs flex-column" data-aos="fade-up" data-aos-delay="100">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab1 === 'features-tab-1' ? 'active show' : ''}`}
                  onClick={() => handleTabClick1('features-tab-1')}
                  data-bs-toggle="tab" href="#features-tab-1"
                >
                  <i className="bi bi-motherboard"></i>
                  <div>
                    <h4 className="d-none d-lg-block">Streamlined Operations, Maximized Efficiency</h4>
                    <p>
                      Integrate processes into one system, eliminating redundancies, boosting efficiency, reducing costs, and improving productivity.
                    </p>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab1 === 'features-tab-2' ? 'active show' : ''}`}
                  onClick={() => handleTabClick1('features-tab-2')}
                  data-bs-toggle="tab" href="#features-tab-2"
                >
                  <i className="bi bi-sliders2"></i>
                  <div>
                    <h4 className="d-none d-lg-block">Seamless Integration</h4>
                    <p>
                      Our ERP systems integrate smoothly with your current software and hardware, minimizing operational disruption.
                    </p>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab1 === 'features-tab-3' ? 'active show' : ''}`}
                  onClick={() => handleTabClick1('features-tab-3')}
                  data-bs-toggle="tab" href="#features-tab-3"
                >
                  <i className="bi bi-file-bar-graph"></i>
                  <div>
                    <h4 className="d-none d-lg-block">Real-Time Data for Better Decisions</h4>
                    <p>
                      Access real-time data and analytics to make quick, informed decisions with accurate, up-to-date information.
                    </p>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab1 === 'features-tab-4' ? 'active show' : ''}`}
                  onClick={() => handleTabClick1('features-tab-4')}
                  data-bs-toggle="tab" href="#features-tab-4"
                >
                  <i className="bi bi-graph-up-arrow"></i>
                  <div>
                    <h4 className="d-none d-lg-block">Scalable Solutions for Growth</h4>
                    <p>
                      Our scalable ERP solutions adapt and expand with your business, supporting growth and new opportunities.
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 my-4">
            <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
              <div className={`tab-pane fade ${activeTab1 === 'features-tab-1' ? 'active show' : ''}`} id="features-tab-1">
                <img src={tab1} alt="Feature 1" className="img-fluid" />
              </div>
              <div className={`tab-pane fade ${activeTab1 === 'features-tab-2' ? 'active show' : ''}`} id="features-tab-2">
                <img src={tab2} alt="Feature 2" className="img-fluid" />
              </div>
              <div className={`tab-pane fade ${activeTab1 === 'features-tab-3' ? 'active show' : ''}`} id="features-tab-3">
                <img src={tab3} alt="Feature 3" className="img-fluid" />
              </div>
              <div className={`tab-pane fade ${activeTab1 === 'features-tab-4' ? 'active show' : ''}`} id="features-tab-4">
                <img src={tab1} alt="Feature 4" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-between mt-5">
          <div className="col-lg-6 my-4">
            <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
              <div className={`tab-pane fade ${activeTab2 === 'features-tab-5' ? 'active show' : ''}`} id="features-tab-5">
                <img src={tab1} alt="Feature 5" className="img-fluid" />
              </div>
              <div className={`tab-pane fade ${activeTab2 === 'features-tab-6' ? 'active show' : ''}`} id="features-tab-6">
                <img src={tab2} alt="Feature 6" className="img-fluid" />
              </div>
              <div className={`tab-pane fade ${activeTab2 === 'features-tab-7' ? 'active show' : ''}`} id="features-tab-7">
                <img src={tab3} alt="Feature 7" className="img-fluid" />
              </div>
              <div className={`tab-pane fade ${activeTab2 === 'features-tab-8' ? 'active show' : ''}`} id="features-tab-8">
                <img src={tab2} alt="Feature 8" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 d-flex align-items-center">
            <ul className="nav nav-tabs flex-column features-list" data-aos="fade-up" data-aos-delay="100">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab2 === 'features-tab-5' ? 'active show' : ''}`}
                  onClick={() => handleTabClick2('features-tab-5')}
                  data-bs-toggle="tab" href="#features-tab-5"
                >
                  <i className="bi bi-cash-coin"></i>
                  <div>
                    <h4 className="d-none d-lg-block">Proven ROI: Investing in Success</h4>
                    <p>
                      Investing in our ERP solutions ensures a clear return on investment by enhancing efficiency, reducing costs, and driving business growth.
                    </p>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab2 === 'features-tab-6' ? 'active show' : ''}`}
                  onClick={() => handleTabClick2('features-tab-6')}
                  data-bs-toggle="tab" href="#features-tab-6"
                >
                  <i className="bi bi-clock"></i>
                  <div>
                    <h4 className="d-none d-lg-block">24/7 Support</h4>
                    <p>
                      We offer 24/7 support to keep your ERP system running smoothly. Our dedicated team is always available to assist with any issues or questions.
                    </p>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab2 === 'features-tab-7' ? 'active show' : ''}`}
                  onClick={() => handleTabClick2('features-tab-7')}
                  data-bs-toggle="tab" href="#features-tab-7"
                >
                  <i className="bi bi-shield-lock"></i>
                  <div>
                    <h4 className="d-none d-lg-block">Robust Security Features</h4>
                    <p>
                      Our ERP solutions ensure data protection with encryption, access controls, and regular audits.
                    </p>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab2 === 'features-tab-8' ? 'active show' : ''}`}
                  onClick={() => handleTabClick2('features-tab-8')}
                  data-bs-toggle="tab" href="#features-tab-8"
                >
                  <i className="bi bi-hand-index"></i>
                  <div>
                    <h4 className="d-none d-lg-block">User-Friendly Interface</h4>
                    <p>
                      Our ERP systems offer intuitive designs for easy team adoption, minimizing training and maximizing productivity
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
