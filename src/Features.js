import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import tab1 from "./assets/img/tabs-1.jpg";
import tab2 from "./assets/img/tabs-2.jpg";
import tab3 from "./assets/img/tabs-3.jpg";

const Features = () => {
  const [activeTab, setActiveTab] = useState('features-tab-1');

  AOS.init();

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
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
            <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 'features-tab-1' ? 'active show' : ''}`}
                  onClick={() => handleTabClick('features-tab-1')}
                  data-bs-toggle="tab"
                >
                  <i className="bi bi-binoculars"></i>
                  <div>
                    <h4 className="d-none d-lg-block">Simple</h4>
                    <p>
                      Extensively Simplified User Interface which allows inexperienced people to run ERP conviniently.
                    </p>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 'features-tab-2' ? 'active show' : ''}`}
                  onClick={() => handleTabClick('features-tab-2')}
                  data-bs-toggle="tab"
                >
                  <i className="bi bi-box-seam"></i>
                  <div>
                    <h4 className="d-none d-lg-block">Intelligent</h4>
                    <p>
                      It analyses the usage of User so as to readjust itself to provide the best User Experience.
                    </p>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 'features-tab-3' ? 'active show' : ''}`}
                  onClick={() => handleTabClick('features-tab-3')}
                  data-bs-toggle="tab"
                >
                  <i className="bi bi-brightness-high"></i>
                  <div>
                    <h4 className="d-none d-lg-block">Secure</h4>
                    <p>
                      Here at CODEPLAYERS security comes first! ERP secure your data for as long as a decade or even more.
                    </p>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 'features-tab-3' ? 'active show' : ''}`}
                  onClick={() => handleTabClick('features-tab-3')}
                  data-bs-toggle="tab"
                >
                  <i className="bi bi-brightness-high"></i>
                  <div>
                    <h4 className="d-none d-lg-block">Reliable</h4>
                    <p>
                      The accuracy of ERP is incomparable. Our product comes up with NIL data corruption possibility.
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
              <div className={`tab-pane fade ${activeTab === 'features-tab-1' ? 'active show' : ''}`} id="features-tab-1">
                <img src={tab1} alt="" className="img-fluid" />
              </div>
              <div className={`tab-pane fade ${activeTab === 'features-tab-2' ? 'active show' : ''}`} id="features-tab-2">
                <img src={tab2} alt="" className="img-fluid" />
              </div>
              <div className={`tab-pane fade ${activeTab === 'features-tab-3' ? 'active show' : ''}`} id="features-tab-3">
                <img src={tab3} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
