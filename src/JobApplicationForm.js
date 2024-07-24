import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import col1 from './assets/img/colleges/1.jpg';
import col2 from './assets/img/colleges/2.jpg';
import col3 from './assets/img/colleges/3.jpg';
import col4 from './assets/img/colleges/4.png';
import cert1 from './assets/img/Certificates/CP Completion Certificate.jpg';
import cert2 from './assets/img/Certificates/CP Letter of Appreciation.jpg';

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


const JobApplicationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="job-application-container">
      <section id="internships-and-colleges" className="internships-and-colleges section">
        <br /><br />
        <div className="container section-title" data-aos="fade-up">
          <h2>Internships and College Associations</h2>
          <p>
            We proudly collaborate with leading institutions to offer enriching internship experiences.
          </p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {[
              { name: 'O P Jindal University, Raigarh', img: col4 },
              { name: 'ITM University, Raipur', img: col1 },
              { name: 'Bhilai Institute of Technology, Durg', img: col2 },
              { name: 'IHFE, HYD', img: col3 },
            ].map(({ name, img }, index) => (
              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
                key={name}
              >
                <div className="college-item d-flex align-items-center">
                  <img
                    src={img}
                    className="college-img img-fluid"
                    alt={name}
                  />
                  <div>
                    <h4>{name}</h4>
                    <p>Partnered for educational and professional growth.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br /><br /><br /><br />

        <div className="container" data-aos="fade-up" data-aos-delay="200">
        <div className="container section-title" data-aos="fade-up">
          <h2>Completion Certificate & Letters of Appreciation</h2>
        </div>
        <br/><br/>
        <div className="d-flex flex-column gy-4">
          {[
            { title: 'Completion Certificate', img: cert1 },
            { title: 'Letter of Appreciation', img: cert2 },
          ].map(({ title, img }, index) => (
            <div
              className="certificate-item mb-4"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
              key={title}
            >
              <img
                src={img}
                className="img-fluid mb-2"
                alt={title}
              />
            </div>
          ))}
        </div>
        </div>
      </section>

      <div className="container section-title text-center" data-aos="fade-up">
        <br /><br />
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
            <option value="2 Months">2 Months</option>
            <option value="3 Months">3 Months</option>
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
          <input type="text" {...register('qualification')} className="form-control" />
          {errors.qualification && <p>{errors.qualification.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="cv" className="label">Attach CV*</label>
          <input type="file" {...register('cv')} className="form-control" />
          {errors.cv && <p>{errors.cv.message}</p>}
        </div>

        <div className="form-group">
          <input type="checkbox" {...register('terms')} />
          <label htmlFor="terms" className="label"> I accept the Terms & Conditions*</label>
          {errors.terms && <p>{errors.terms.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="captcha" className="label">What is 1 + 0?*</label>
          <input type="text" {...register('captcha')} className="form-control" />
          {errors.captcha && <p>{errors.captcha.message}</p>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <br /><br />
    </div>
  );
};

export default JobApplicationForm;
