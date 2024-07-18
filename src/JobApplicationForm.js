import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Header from './Header';
import Footer from './Footer';
import animation from "../src/assets/img/hero-services-img.png";
import background from "../src/assets/img/hero-bg-light.webp";

// Form validation schema
const schema = yup.object().shape({
  position: yup.string().required('Position is required'),
  experience: yup.string().required('Experience is required'),
  name: yup.string().required('Name is required'),
  mobile: yup.string().required('Mobile No. is required').matches(/^[0-9]+$/, 'Must be only digits').min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
  email: yup.string().required('Email Id. is required').email('Invalid email format'),
  gender: yup.string().required('Gender is required'),
  dateOfBirth: yup.string().required('Date of Birth is required'),
  company: yup.string().required('Company is required'),
  ctc: yup.string().required('CTC is required'),
  noticePeriod: yup.string().required('Notice Period is required'),
  primeExp: yup.string().required('Prime Experience In is required'),
  currentCity: yup.string().required('Current City is required'),
  address: yup.string().required('Address is required'),
  qualification: yup.string().required('Qualification is required'),
  cv: yup.mixed().required('Attach CV is required'),
  terms: yup.bool().oneOf([true], 'Terms & Conditions must be accepted'),
  captcha: yup.string().required('Captcha is required').oneOf(['1'], 'Incorrect captcha'),
});

function HeroSection() {
  return (
    <section id="hero" className="hero section">
      <div className="hero-bg">
        <img src={background} alt="background image" />
      </div>
      <div className="container text-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
        <img src={animation} className="img-fluid hero-img" alt="" data-aos="zoom-out" data-aos-delay="300" />
          <h1 data-aos="fade-up">"Empower your business with innovative ERP from <span>CodePlayers"</span></h1>
          <p data-aos="fade-up" data-aos-delay="100">Choose a powerful ERP for your Enterprise</p>
          <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
            <a href="#about" className="btn-get-started">Request a demo</a>
            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

const JobApplicationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <div className="job-application-container">
        <div className="container section-title text-center" data-aos="fade-up">
          <br /><br /><br /><br/>
          <h2>Feel Free To Apply</h2>
          <p>Join our team and help us shape the future.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="job-application-form">
          <div className="form-group">
            <label htmlFor="position" className="label">Position*</label>
            <select {...register('position')} className="form-control">
              <option value="">--Select--</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
            </select>
            {errors.position && <p>{errors.position.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="experience" className="label">Experience (yrs)*</label>
            <select {...register('experience')} className="form-control">
              <option value="">--Select--</option>
              <option value="1-2">1-2</option>
              <option value="3-5">3-5</option>
            </select>
            {errors.experience && <p>{errors.experience.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="name" className="label">Name*</label>
            <input type="text" {...register('name')} className="form-control" />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="mobile" className="label">Mobile No.*</label>
            <input type="text" {...register('mobile')} className="form-control" />
            {errors.mobile && <p>{errors.mobile.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="label">Email Id.*</label>
            <input type="text" {...register('email')} className="form-control" />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="gender" className="label">Gender*</label>
            <div style={{ marginTop: '10px' }}> {/* Added margin-top for spacing */}
              <input type="radio" value="Male" {...register('gender')} /> Male
              <span style={{ margin: '0 10px' }}></span> {/* Added spacing between radio buttons */}
              <input type="radio" value="Female" {...register('gender')} /> Female
            </div>
            {errors.gender && <p>{errors.gender.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="dateOfBirth" className="label">Date of Birth*</label>
            <input type="date" {...register('dateOfBirth')} className="form-control" />
            {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="company" className="label">Company*</label>
            <input type="text" {...register('company')} className="form-control" />
            {errors.company && <p>{errors.company.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="ctc" className="label">CTC (in Lacs)*</label>
            <input type="text" {...register('ctc')} className="form-control" />
            {errors.ctc && <p>{errors.ctc.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="noticePeriod" className="label">Notice Period*</label>
            <select {...register('noticePeriod')} className="form-control">
              <option value="">--Select--</option>
              <option value="Immediate">Immediate</option>
              <option value="1 Month">1 Month</option>
            </select>
            {errors.noticePeriod && <p>{errors.noticePeriod.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="primeExp" className="label">Prime Experience In*</label>
            <input type="text" {...register('primeExp')} className="form-control" />
            {errors.primeExp && <p>{errors.primeExp.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="currentCity" className="label">Current City*</label>
            <input type="text" {...register('currentCity')} className="form-control" />
            {errors.currentCity && <p>{errors.currentCity.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="address" className="label">Address*</label>
            <textarea {...register('address')} className="form-control"></textarea>
            {errors.address && <p>{errors.address.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="qualification" className="label">Qualification*</label>
            <select {...register('qualification')} className="form-control">
              <option value="">--Select--</option>
              <option value="B.Tech">B.Tech</option>
              <option value="M.Tech">M.Tech</option>
            </select>
            {errors.qualification && <p>{errors.qualification.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="cv" className="label">Attach CV(.pdf)*</label>
            <input type="file" {...register('cv')} className="form-control" />
            {errors.cv && <p>{errors.cv.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="captcha" className="label">0 + 1 = *</label>
            <input type="text" {...register('captcha')} className="form-control" />
            {errors.captcha && <p>{errors.captcha.message}</p>}
          </div>

          <div className="form-group form-check">
            <label className="form-check-label">
              <input type="checkbox" {...register('terms')} className="form-check-input" /> Have read the T&C
            </label>
            {errors.terms && <p>{errors.terms.message}</p>}
          </div>
          <button type="submit" className="btn-getstarted">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default JobApplicationForm;
