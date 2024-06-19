import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import GLightbox from 'glightbox';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturedServices from './FeaturedServices';
import About from './About';
import Clients from './Clients';
import Features from './Features';
import FeaturesDetails from './FeaturesDetails';
import Services from './Services';
import Footer from './Footer';
import PricingPage from './PricingPage';
import Testimonials from './Testimonials';
import Contact from "./Contact";
import './App.css';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturedServices />
      <About />
      <Clients />
      <Features />
      <FeaturesDetails />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

const App = () => {
  useEffect(() => {
    AOS.init();
    GLightbox();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
