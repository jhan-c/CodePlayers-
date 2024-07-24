import React from 'react';

const brochures = [
    {
        image: '/Brochures/Infinity_ERP.png',
        title: 'Infinity ERP',
        link: '/Brochures/Infinity_ERP Brochure.pdf'
    },
    {
        image: '/Brochures/Infinity_Fleet.png',
        title: 'Infinity Fleet',
        link: '/Brochures/Infinity_Fleet.pdf'
    },
];

const BrochurePage = () => {
    return (
        <div className="brochure-page">
          <br/><br/>
          <br/>
            <div className="container section-title text-center" data-aos="fade-up">
                <h2>Brochures</h2>
                <p>Codeplayers Brochures</p>
            </div>
            <div className="brochures-container">
                {brochures.map((brochure, index) => (
                    <div className="brochure-card" key={index}>
                        <img src={brochure.image} alt={brochure.title} className="brochure-image" />
                        <a href={brochure.link} className="download-button" download>Download Brochure</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrochurePage;
