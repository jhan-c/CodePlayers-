import React from 'react';
import InfinityERPImage from './assets/img/Brochures/Infinity_ERP.png';
import InfinityFleetImage from './assets/img/Brochures/Infinity_Fleet.png';
import BillsAndSlipsImage from './assets/img/Brochures/sample bills and slips.jpg';
import InfinityERPpdf from './assets/img/Brochures/Infinity_ERP.pdf';
import InfinityFleetpdf from './assets/img/Brochures/Infinity_Fleet.pdf';
import BillsAndSlipspdf from './assets/img/Brochures/sample_bills_and_slips.pdf';

const brochures = [
    {
        image: InfinityERPImage,
        title: 'Infinity ERP',
        link: InfinityERPpdf
    },
    {
        image: InfinityFleetImage,
        title: 'Infinity Fleet',
        link: InfinityFleetpdf
    },
    {
        image: BillsAndSlipsImage,
        title: 'bills and slips',
        link: BillsAndSlipspdf
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
