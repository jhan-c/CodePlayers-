import React from 'react';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/aos/aos.css';
import AOS from 'aos';

const Pricing = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="pricing-container">
      <div className="container section-title text-center" data-aos="fade-up">
          <br /><br />
          <br />
          <h2>Pricing</h2>
          <p>Take a perfect strategy for boosting your business.</p>
      </div>
      <div className="quote-container">
        <h2 className="quote-title">Request For a Quote</h2>
        <p className="quote-description">
          No two companies are the same, and each has different needs and requirements.
          Thus, with our modular pricing strategy, we enable you to gain a personalized quote
          taking your account according to the enterprise structure. Complete the form below
          to get the most beneficial pricing plan for your company.
        </p>
        <form className="quote-form">
          <div className="form-group">
            <label htmlFor="fullName" class="label">Full Name</label>
            <input type="text" className="form-control" id="fullName" placeholder="Full Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="companyName" class="label">Company Name</label>
            <input type="text" className="form-control" id="companyName" placeholder="Company Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email" class="label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone" class="label">Phone</label>
            <input type="tel" className="form-control" id="phone" placeholder="Phone" required />
          </div>
          <div className="text-center">
            <button type="submit" className=" btn-getstarted">Request a Quote Now!</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Pricing;