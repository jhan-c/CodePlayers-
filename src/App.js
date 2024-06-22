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
import Frequently from './Frequently';
import ServicesPage from './ServicesPage';
import AboutUsPage from './AboutUsPage';
import IntegrationsPage from './IntegrationsPage';
import Footer from './Footer';
import PricingPage from './PricingPage';
import Testimonials from './Testimonials';
import Contact from "./Contact";
import './App.css';

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedServices />
      <About />
      <Clients />
      <Features />
      <Frequently />
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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/Integrations" element={<IntegrationsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
