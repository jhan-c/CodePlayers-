import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import GLightbox from 'glightbox';
import Header from './Header';
import Login from './LoginPage';
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
import TermsOfUse from './TermsOfUse';
import PrivacyPolicy from './PrivacyPolicy';
import Feedback from './Feedback';
import Cookies from './Cookies';
import LegalDisclosure from './LegalDisclosure';
import EULA from './EULA';
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
        <Route path="/LoginPage" element={<Login />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/Integrations" element={<IntegrationsPage />} />
        <Route path="/TermsOfUse" element={<TermsOfUse />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Cookies" element={<Cookies />} />
        <Route path="/LegalDisclosure" element={<LegalDisclosure />} />
        <Route path="/EULA" element={<EULA />} />
      </Routes>
    </Router>
  );
};

export default App;
