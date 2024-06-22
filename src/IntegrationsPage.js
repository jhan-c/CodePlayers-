import React from 'react';
import Integrations from './Integrations'; // Adjust the import path as needed
import Header from './Header'; // Optional: include Header if needed
import Footer from './Footer'; // Optional: include Footer if needed

const AboutUsPage = () => {
  return (
    <>
      <Header /> {/* Optional: Include if you want the header to be present */}
      <Integrations />
      <Footer /> {/* Optional: Include if you want the footer to be present */}
    </>
  );
};

export default AboutUsPage;
