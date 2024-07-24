import React, { useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/img/CodePlayers.png';

const Header = () => {
  const location = useLocation();

  const mobileNavToggle = useCallback(() => {
    const body = document.querySelector('body');
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

    body.classList.toggle('mobile-nav-active');
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
  }, []);

  const attachListeners = useCallback(() => {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
    }

    document.querySelectorAll('#navmenu a').forEach(navLink => {
      navLink.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToggle();
        }
      });
    });

    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(toggle => {
      toggle.addEventListener('click', function (e) {
        if (document.querySelector('.mobile-nav-active')) {
          e.preventDefault();
          this.parentNode.classList.toggle('active');
          this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
          e.stopImmediatePropagation();
        }
      });
    });
  }, [mobileNavToggle]);

  const detachListeners = useCallback(() => {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.removeEventListener('click', mobileNavToggle);
    }

    document.querySelectorAll('#navmenu a').forEach(navLink => {
      navLink.removeEventListener('click', mobileNavToggle);
    });

    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(toggle => {
      toggle.removeEventListener('click', function (e) {
        if (document.querySelector('.mobile-nav-active')) {
          e.preventDefault();
          this.parentNode.classList.toggle('active');
          this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
          e.stopImmediatePropagation();
        }
      });
    });
  }, [mobileNavToggle]);

  useEffect(() => {
    attachListeners();
    return () => {
      detachListeners();
    };
  }, [location, attachListeners, detachListeners]);

  return (
    <header className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link to="/" className="logo d-flex align-items-center me-auto">
          <img src={logo} alt="Logo" />
        </Link>
        <nav id="navmenu" className="navmenu d-flex align-items-center">
          <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/Integrations">Integrations</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/ClientsSection">Clients</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li className="dropdown">
              <a href="#"><span>Resources</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><Link to="/Blogs">Blogs</Link></li>
                <li><Link to="/CaseStudies">Case Studies</Link></li>
                <li><Link to="/Brochure">Brochures</Link></li>
                <li><Link to="/TrainingVideos">Video Archive</Link></li>
              </ul>
            </li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/JobApplicationForm">Career</Link></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
        <a className="btn-getstarted" href="/LoginPage">Sign in</a>
      </div>
    </header>
  );
};

export default Header;
