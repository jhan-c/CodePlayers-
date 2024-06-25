import React from 'react';
import Header from './Header';
import Footer from './Footer';

const LegalDisclosure = () => {
  return (
    <>
    <Header />
    <br/><br/><br/><br/><br/>
    <div className="legal-disclosure container mt-4">
      <h1>Legal Disclosure</h1><hr/>
      <p>
        The Codeplayers, External, & Legal Affairs group works on the cutting edge of business and regulatory issues around the world, playing a proactive and engaged role pioneering new legal and corporate affairs solutions that will advance business goals and also benefit consumers, industry partners, and the communities where we live and work.
      </p>
      <p>Please contact us at the below address in case of any legal concerns or queries.</p>
      
      <address>
        <strong>CODEPLAYERS Business System Private Limited</strong><br />
        191/2, Nand Bhawan, Gandhi Ganj, Raigarh(CG) 496001, INDIA<br />
        Phone: +91 75828 75000, +91 75829 75000<br />
        Email: <a href="mailto:codeplayers@outlook.com">codeplayers@outlook.com</a>
      </address>
    </div>
    <br/><br/><br/><br/><br/>
    <Footer />
    </>
  );
};

export default LegalDisclosure;
