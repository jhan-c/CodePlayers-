import React, { useEffect } from 'react';
import AOS from 'aos';

import image from './assets/img/About1/3.jpg';

const CompanyDesciption = () => {
    useEffect(() => {
      AOS.init();
    }, []);

return (
<section id="about-details" class="about-details section">
    <div class="container">
        <div class="row gy-4 justify-content-between about-item">
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <img src={image} class="img-fluid" alt="we done hide - image"/>
            </div>

            <div class="col-lg-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                <div class="content">
                    <h3><a href="/AboutUs" className="stretched-link">We don’t hide, we stand tall in front of challenge!</a></h3>
                    <p>
                    We give 100% assurance for providing efficient solutions to any problems or complaints you face with any of our products.
                    Any suitable suggestions regarding product alteration and simplification are always welcome.<br /><br />
                    We provide a comprehensive ERP system to streamline your business operations and drive efficiency across your organization.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
);
};

export default CompanyDesciption;