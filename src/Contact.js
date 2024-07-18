import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Get in Touch</p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-geo-alt"></i>
              <h3>Address</h3>
              <p>
                <ul>
                  <li><span>Headquarters:
                    C 24-25, Infinity Tower, Sector-5, Devendra Nagar, 
                    Raipur, CG. 492001.
                  </span></li>
                  <li><span>Regional Office:
                    191/2, Nand Bhawan, Gandhi Ganj,
                    Raigarh, CG, 492001.
                  </span></li>
                  <li><span>Development Centre:
                    F8, Jupiter Block, Regency Magnum,
                    Hennur Main road, Kalyan Nagar,
                    Bengaluru, 560043.</span></li>
                </ul>
              </p>
            </div>
          </div>
          {/* End Info Item */}

          <div className="col-lg-3 col-md-6">
            <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-telephone"></i>
              <h3>Call Us</h3>
              <p>+91 7582875000<br/>+91 7582975000<br/>+91 7354575000</p>
            </div>
          </div>
          {/* End Info Item */}

          <div className="col-lg-3 col-md-6">
            <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-envelope"></i>
              <h3>Email Us</h3>
              <p>codeplayers@outlook.com</p>
              <p>codeplayers.infinity@outlook.com</p>
            </div>
          </div>
          {/* End Info Item */}
        </div>

        <div className="row gy-4 mt-1">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6253.377079693168!2d81.6513115249436!3d21.260371148634068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd7963c8575d%3A0x58aa9ec58291a46f!2sShayvidz%20CA%20CS%20Academy!5e0!3m2!1sen!2sus!4v1720865671492!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
          {/* End Google Maps */}

          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="400">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                </div>
                <div className="col-md-12">
                  <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                </div>
                <div className="col-md-12">
                  <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
          {/* End Contact Form */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
