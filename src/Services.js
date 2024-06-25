import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import rest from "./assets/img/rest.jpg";
import hotel from "./assets/img/hotel.jpg";
import school from "./assets/img/school.jpg";
import sme from "./assets/img/sme.jpg";
import food from "./assets/img/food.jpg";
import theater from "./assets/img/theater.jpg";
import retail from "./assets/img/retail.jpg";
import build from "./assets/img/build.jpg";
import fast2 from "./assets/img/fast2.jpg";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const services = [
    {
      img: hotel,
      title: "Property Management System",
      description: "Infinity ERP features a dedicated PMS Module, meticulously designed for the hotel industry, ensuring efficient management of your hotels and restaurants.",
    },
    {
      img: school,
      title: "School Management System",
      description: "Leading schools have successfully transitioned to Infinity ERP, replacing their previous School Management Software due to its exceptional features and user-friendly interface.",
    },
    {
      img: sme,
      title: "SMEs",
      description: "Infinity ERP is fully equipped with features to manage all processes of SMEs, including procurement, material management, payroll, CRM, and more.",
    },
    {
      img: rest,
      title: "Restaurant & Bar Management",
      description: "Simplify your restaurant's operation with fast and accurate billing and KOTs.Online Aggregator and Payments Integrations are other highlights of Infinity ERP.",
    },
    {
      img: food,
      title: "Food Court Management",
      description: "Infinity ERP is fully prepared for integration with RFID cards and Touch-POS, enabling complete control over your food court operations.",
    },
    {
      img: theater,
      title: "Theater Food Ordering",
      description: "This unique innovation by Infinity ERP developers allows theater audiences to order food directly from their seats, making it convenient to manage crowds efficiently.",
    },
    {
      img: retail,
      title: "Retail and Wholesale Traders",
      description: "Infinity ERP serves as an invaluable assistant for retail and wholesale traders, streamlining daily business processes such as inventory management, banking, and tracking debtor outstandings instantly.",
    },
    {
      img: build,
      title: "Builders and Contractors",
      description: "Infinity ERP is highly capable of managing material flow across multiple sites, providing centralized reporting to ensure a smooth workflow.",
    },
    {
      img: fast2,
      title: "FMCG",
      description: "Unlike other trades, FMCG companies must maintain their own records. Infinity ERP can manage this efficiently through integration, eliminating the need for double data entry.",
    }
  ];

  return (
    <section id="features-details" className="features-details section">
      <div className="container">
        <div className="container section-title text-center" data-aos="fade-up">
          <br /><br />
          <br />
          <h2>Services</h2>
          <p>Our Excellent Services<br /> Single product, multiple verticles.</p>
        </div>
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div className="col-md-4 text-center" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="features-item">
                <div className="image-container">
                  <img src={service.img} className="img-fluid" alt={service.title} />
                </div>
                <div className="content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
