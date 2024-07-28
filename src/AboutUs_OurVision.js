import React from 'react';

const OurVision = () => {
  const features = [
    { icon: 'bi bi-shield-check', title: 'Integrity', description: 'We are committed to the highest ethical standards in all that we do.' },
    { icon: 'bi bi-award', title: 'Excellence', description: 'We strive for exceptional quality and continuous self-improvement.' },
    { icon: 'bi bi-people', title: 'Teamwork', description: 'We believe in the power of collaboration to drive success.' },
  ];

  return (
    <section id="our-methodology" className="section">
      <div className="container">
        <div className="row gy-4 text-center">
          <div className="container section-title" data-aos="fade-up">
            <h2>Our Vision</h2>
          </div>
          <br />
          <div className="row justify-content-center">
            {features.map(({ icon, title, description }, index) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 mb-4 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
                key={title}
              >
                <div
                  className="service-item d-flex flex-column p-4 rounded shadow"
                >
                  <div className="icon flex-shrink-0 small-icon mb-3"><i className={icon}></i></div>
                  <div className="flex-grow-1">
                    <h4 className="title">{title}</h4>
                    <p className="description">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
