// src/InternalServerError.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function InternalServerError() {
    return (
        <div className="ISE-container d-flex align-items-center justify-content-center min-vh-100">
            <div className="text-center-ise">
                <h1 className="internal-server-error-title">500</h1>
                <p className="internal-server-error-message">Internal Server Error</p>
                <p className="internal-server-error-description">
                    Something went wrong on our end. Please try again later.
                </p>
                <p className="internal-server-error-back">
                    <Link to="/">Back to Home</Link>
                </p>
            </div>
        </div>
    );
}

export default InternalServerError;
