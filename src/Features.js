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
                  data-bs-toggle="tab"
                >
                  <i className="bi bi-binoculars"></i>
                  <div>
                    <h4 className="d-none d-lg-block">Simple</h4>
                    <p>
                      Extensively Simplified User Interface which allows inexperienced people to run ERP conveniently.
                    </p>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab1 === 'features-tab-2' ? 'active show' : ''}`}
                  onClick={() => handleTabClick1('features-tab-2')}
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
                  className={`nav-link ${activeTab1 === 'features-tab-3' ? 'active show' : ''}`}
                  onClick={() => handleTabClick1('features-tab-3')}
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
                  className={`nav-link ${activeTab1 === 'features-tab-4' ? 'active show' : ''}`}
                  onClick={() => handleTabClick1('features-tab-4')}
                  data-bs-toggle="tab"
                >
                  <i className="bi bi-shield-lock"></i>
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
          <div className="col-lg-6">
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
            <ul className="nav nav-tabs flex-column" data-aos="fade-up" data-aos-delay="100">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab2 === 'features-tab-5' ? 'active show' : ''}`}
                  onClick={() => handleTabClick2('features-tab-5')}
                  data-bs-toggle="tab"
                >
                  <i className="bi bi-lightbulb"></i>
                  <div>
                    <h4 className="d-none d-lg-block">Utilize Hardware Potential</h4>
                    <p>
                      Our software operates by exploiting the highest potential of the hardware making the most of it.
                    </p>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab2 === 'features-tab-6' ? 'active show' : ''}`}
                  onClick={() => handleTabClick2('features-tab-6')}
                  data-bs-toggle="tab"
                >
                  <i className="bi bi-graph-up"></i>
                  <div>
                    <h4 className="d-none d-lg-block">Dynamic Application Mechanism</h4>
                    <p>
                      The proposed mechanism achieves easy compatibility and acquisition feasibility under fluctuating needs.
                    </p>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab2 === 'features-tab-7' ? 'active show' : ''}`}
                  onClick={() => handleTabClick2('features-tab-7')}
                  data-bs-toggle="tab"
                >
                  <i className="bi bi-graph-up"></i>
                  <div>
                    <h4 className="d-none d-lg-block">User Level Reports</h4>
                    <p>
                      Our ERP assists to view user session reports based on role based access control and track user activities.
                    </p>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab2 === 'features-tab-8' ? 'active show' : ''}`}
                  onClick={() => handleTabClick2('features-tab-8')}
                  data-bs-toggle="tab"
                >
                  <i className="bi bi-lightbulb"></i>
                  <div>
                    <h4 className="d-none d-lg-block">Scalable Upto the Mark</h4>
                    <p>
                      We endeavor to serve companies of all sizes to reap the benefits of ERP software.
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
