import React from 'react';
import AboutUs from './AboutUs'; // Adjust the import path as needed
import Header from './Header'; // Optional: include Header if needed
import Footer from './Footer'; // Optional: include Footer if needed

const AboutUsPage = () => {
  return (
    <>
      <Header /> {/* Optional: Include if you want the header to be present */}
      <AboutUs />
      <Footer /> {/* Optional: Include if you want the footer to be present */}
    </>
  );
};

export default AboutUsPage;
