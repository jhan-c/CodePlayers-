import React from 'react';
import Pricing from './Pricing'; // Adjust the import path as needed
import Header from './Header'; // Optional: include Header if needed
import Footer from './Footer'; // Optional: include Footer if needed

const PricingPage = () => {
  return (
    <>
      <Header /> {/* Optional: Include if you want the header to be present */}
      <Pricing />
      <Footer /> {/* Optional: Include if you want the footer to be present */}
    </>
  );
};

export default PricingPage;
