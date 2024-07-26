import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import rest from "./assets/img/services/rest.jpg";
import hotel from "./assets/img/services/hotel.jpg";
import school from "./assets/img/services/school.jpg";
import sme from "./assets/img/services/sme.jpg";
import food from "./assets/img/services/food.jpg";
import theater from "./assets/img/services/theater.jpg";
import retail from "./assets/img/services/retail.jpg";
import build from "./assets/img/services/build.jpg";
import fast2 from "./assets/img/services/fast2.jpg";
import steel from "./assets/img/services/steel.jpg";
import route from "./assets/img/services/route.jpg";
import vehicle from "./assets/img/services/vehicle.jpg";
import movement from "./assets/img/services/movement.jpg";
import driver from "./assets/img/services/driver.jpg";
import infinityERP from "./assets/img/services/infinityERP.png";
import Fleet from "./assets/img/services/FleetLOGO.png";
import InfinityXLogo from "./assets/img/services/InfinityX.png";
import atyour from "./assets/img/services/atyour.png";
import MIS from "./assets/img/services/misfinal.jpg";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const services = [
    {
      img: steel,
      title: "Steel and Allied Industries",
      description: "Infinity ERP offers comprehensive solutions tailored for Steel and Allied Industries, covering manufacturing, inventory management, quality control, and logistics.",
      extraImg: infinityERP,
    },
    {
      img: movement,
      title: "Logistics & Movement",
      description: "Track all inward and outward material movement at Security Gate and Weighbridge with our Infinity Fleet.",
      extraImg: Fleet,
    },
    {
      img: sme,
      title: "SMEs",
      description: "InfinityX is fully equipped with features to manage all processes of SMEs, including procurement, material management, payroll, CRM, and more.",
      extraImg: infinityERP,
    },
    {
      img: MIS,
      title: "Management Information System (MIS)",
      description: "InfinityX offers a robust Management Information System (MIS) that provides comprehensive reporting and data analysis, helping businesses make informed decisions.",
      extraImg: InfinityXLogo,
    },
    {
      img: build,
      title: "Builders and Contractors",
      description: "InfinityX is highly capable of managing material flow across multiple sites, providing centralized reporting to ensure a smooth workflow.",
      extraImg: infinityERP,
    },
    {
      img: rest,
      title: "Restaurant & Bar Management",
      description: "Simplify your restaurant's operation with fast and accurate billing and KOTs. Online Aggregator and Payments Integrations are other highlights of InfinityX.",
      extraImg: atyour,
    },
    {
      img: route,
      title: "Route Optimization",
      description: "Plan and optimize routes to reduce travel time, fuel consumption, and enhance delivery efficiency with our Infinity Fleet.",
      extraImg: Fleet,
    },
    {
      img: vehicle,
      title: "Vehicle Maintenance Management",
      description: "Schedule and track maintenance activities, ensuring all vehicles are kept in optimal condition with our Infinity Fleet.",
      extraImg: Fleet,
    },
    {
      img: driver,
      title: "Driver Management",
      description: "Manage driver schedules, track driving hours, and ensure compliance with regulations with our Infinity Fleet.",
      extraImg: Fleet,
    },
    {
      img: food,
      title: "Food Court Management",
      description: "Infinity ERP is fully prepared for integration with RFID cards and Touch-POS, enabling complete control over your food court operations.",
      extraImg: atyour,
    },
    {
      img: theater,
      title: "Theater Food Ordering",
      description: "This unique innovation by InfinityX developers allows theater audiences to order food directly from their seats, making it convenient to manage crowds efficiently.",
      extraImg: InfinityXLogo,
    },
    {
      img: retail,
      title: "Retail and Wholesale Traders",
      description: "InfinityX serves as an invaluable assistant for retail and wholesale traders, streamlining daily business processes such as inventory management, banking, and tracking debtor outstandings instantly.",
      extraImg: infinityERP,
    },
    {
      img: fast2,
      title: "FMCG",
      description: "Unlike other trades, FMCG companies must maintain their own records. Infinity ERP can manage this efficiently through integration, eliminating the need for double data entry.",
      extraImg: atyour,
    },
    {
      img: hotel,
      title: "Property Management System",
      description: "Infinity ERP features a dedicated PMS Module, meticulously designed for the hotel industry, ensuring efficient management of your hotels and restaurants.",
      extraImg: atyour,
    },
    {
      img: school,
      title: "School Management System",
      description: "Leading schools have successfully transitioned to Infinity ERP, replacing their previous School Management Software due to its exceptional features and user-friendly interface.",
      extraImg: infinityERP,
    }
  ];

  return (
    <section id="services-details" className="services-details section">
      <div className="container">
        <div className="container section-title text-center" data-aos="fade-up">
          <br /><br />
          <br />
          <h2>Services</h2>
          <p>Our Excellent Services<br /> Single product, multiple verticals.</p>
        </div>
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div className="col-md-4 text-center" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="services-item">
                <div className="image-container">
                  <img src={service.img} className="img-fluid" alt={service.title} />
                </div>
                <div className="content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="extra-img-container">
                    {service.extraImg && <img src={service.extraImg} className="img-fluid extra-img" alt={`Extra ${service.title}`} />}
                  </div>
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

