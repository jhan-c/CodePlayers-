import React from 'react';
import logo from "./assets/img/CodePlayers2.png";
import footerlogo from './assets/img/CodePlayers.png';

const Footer = () => {
  return (
    <footer id="footer" className="footer position-relative">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <img src={logo} alt="codeplayers logo"/>
            </a>
            <div className="footer-contact pt-3">
              <p>Headquarters: 191/2, Nand Bhawan, Gandhi Ganj Near Kabootarkhana, Raigarh, Chhattisgarh - 496001 INDIA</p>
              <p className="mt-3"><strong>Phone:</strong> <span>+91 7582875000</span></p>
              <p><strong>Email:</strong> <span>codeplayers@outlook.com</span></p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="/"><i className="bi bi-twitter-x"></i></a>
              <a href="/"><i className="bi bi-facebook"></i></a>
              <a href="/"><i className="bi bi-instagram"></i></a>
              <a href="/"><i className="bi bi-linkedin"></i></a>
              <a href="https://www.youtube.com/@CODEPLAYERSINFINITY"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>COMPANY</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/AboutUs">About Us</a></li>
              <li><a href="/Services">Services</a></li>
              <li><a href="/Pricing">Pricing</a></li>
              <li><a href="/Integrations">Integrations</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>LEGAL</h4>
            <ul>
              <li><a href="/TermsOfUse">Terms of service</a></li>
              <li><a href="/PrivacyPolicy">Privacy policy</a></li>
              <li><a href="/Feedback">Feedback</a></li>
              <li><a href="/Cookies">Cookies</a></li>
              <li><a href="/LegalDisclosure">Legal Disclosure</a></li>
              <li><a href="/EULA">EULA</a></li>
  
            </ul>
          </div>

          <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <form action="forms/newsletter.php" method="post" className="php-email-form">
              <div className="newsletter-form"><input type="email" name="email" /><input type="submit" value="Subscribe" /></div>
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your subscription request has been sent. Thank you!</div>
            </form>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>2018 - 2024</span> <strong className="px-1 sitename">Codeplayers Business System Pvt. Ltd.</strong></p>
        <div className="credits">
            <img src={footerlogo} alt="Logo" height={20} width={150}/>
        </div>
      </div>
      <a href="/Footer" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
    </footer>
  );
};

export default Footer;
