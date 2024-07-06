import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/img/CodePlayers.png';

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link to="/" className="logo d-flex align-items-center me-auto">
          <img src={logo} alt="Logo" />
        </Link>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/Integrations">Integrations</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/JobApplicationForm">Career</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
        <a className="btn-getstarted" href="/LoginPage">Sign in</a>
      </div>
    </header>
  );
};

export default Header;
