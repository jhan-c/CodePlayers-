// src/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NotFound() {
    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="text-center">
                <h1 className="not-found-title">404</h1>
                <p className="not-found-message">Oops! The page you are looking for does not exist.</p>
                <p className="not-found-description">
                    It seems you've hit a broken link or entered a URL that doesn't exist on this site.
                </p>
                <p className="not-found-suggestion">
                    Here are some helpful links instead:
                </p>
                <ul className="not-found-links list-unstyled">
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                </ul>
                <p className="not-found-back">
                    <Link to="/">Back to Home</Link>
                </p>
            </div>
        </div>
    );
}

export default NotFound;
