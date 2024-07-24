import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import GLightbox from 'glightbox';
import Header from './Header';
import Login from './LoginPage';
import HeroSection from './HeroSection';
import DemoRequestForm from './RequestDemoForm';
import FeaturedServices from './FeaturedServices';
import About from './About';
import Blogs from './Blogs';
import Blog1 from './blog1';
import Blog2 from './blog2';
import Blog3 from './blog3';
import Blog4 from './blog4';
import Blog5 from './blog5';
import CaseStudies from './CaseStudies';
import Casestudy1 from './casestudy1';
import Casestudy2 from './casestudy2';
import Casestudy3 from './casestudy3';
import Casestudy4 from './casestudy4';
import Casestudy5 from './casestudy5';
import TrainingVideos from './TrainingVideos';
import Brochure from './Brochure';
import Clients from './Clients';
import Features from './Features';
import CircularProgressGroup from './CircularProgressGroup';
import Frequently from './Frequently';
import ServicesPage from './Services';
import AboutUsPage from './AboutUs';
import IntegrationsPage from './Integrations';
import Footer from './Footer';
import PricingPage from './Pricing';
import Testimonials from './Testimonials';
import Contact from "./Contact";
import JobApplication from './JobApplicationForm';
import TermsOfUse from './TermsOfUse';
import PrivacyPolicy from './PrivacyPolicy';
import Feedback from './Feedback';
import Cookies from './Cookies';
import LegalDisclosure from './LegalDisclosure';
import EULA from './EULA';
import NotFound from './NotFound';
import InternalServerError from './InternalServerError';
import ClientsSection from './ClientsSection';
import './App.css';

// Import the team member detail components
import ArpitAgrawal from './ArpitAgrawal';
import UtkarshAgrawal from './UtkarshAgrawal';
import ManasAgrawal from './ManasAgrawal';
import ManishAgrawal from './ManishAgrawal';
import HarshitGoel from './HarshitGoel';
import AditiAgrawal from './AditiAgrawal';
import IleshThakkar from './IleshThakkar';
import RitikaAgrawal from './RitikaAgrawal';

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedServices />
      <About />
      <Clients />
      <Features />
      <CircularProgressGroup />
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
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/RequestDemoForm" element={<DemoRequestForm />} />
        <Route path="/Integrations" element={<IntegrationsPage />} />
        <Route path="/JobApplicationForm" element={<JobApplication />} />
        <Route path="/ClientsSection" element={<ClientsSection />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path="/blog4" element={<Blog4 />} />
        <Route path="/blog5" element={<Blog5 />} />
        <Route path="/CaseStudies" element={<CaseStudies />} />
        <Route path="/casestudy1" element={<Casestudy1 />} />
        <Route path="/casestudy2" element={<Casestudy2 />} />
        <Route path="/casestudy3" element={<Casestudy3 />} />
        <Route path="/casestudy4" element={<Casestudy4 />} />
        <Route path="/casestudy5" element={<Casestudy5 />} />
        <Route path="/Brochure" element={<Brochure />} />
        <Route path="/TrainingVideos" element={<TrainingVideos />} />
        <Route path="/TermsOfUse" element={<TermsOfUse />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Cookies" element={<Cookies />} />
        <Route path="/LegalDisclosure" element={<LegalDisclosure />} />
        <Route path="/EULA" element={<EULA />} />
        <Route path="/500" element={<InternalServerError />} />
        <Route path="/ArpitAgrawal" element={<ArpitAgrawal />} />
        <Route path="/UtkarshAgrawal" element={<UtkarshAgrawal />} />
        <Route path="/ManasAgrawal" element={<ManasAgrawal />} />
        <Route path="/ManishAgrawal" element={<ManishAgrawal />} />
        <Route path="/HarshitGoel" element={<HarshitGoel />} />
        <Route path="/AditiAgrawal" element={<AditiAgrawal />} />
        <Route path="/IleshThakkar" element={<IleshThakkar />} />
        <Route path="/RitikaAgrawal" element={<RitikaAgrawal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
