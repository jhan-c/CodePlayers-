import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Form validation schema
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  position: yup.string().required('Position is required'),
  companyName: yup.string().required('Company Name is required'),
  mobileNumber: yup.string().required('Mobile No. is required').matches(/^[0-9]+$/, 'Must be only digits').min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
  referralSource: yup.string().required('Referral source is required'),
});

const DemoRequestForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://api.codeplayers.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log('Form submitted successfully');
        // Optionally, you can show a success message to the user here
      } else {
        console.error('Error submitting the form');
        // Optionally, you can show an error message to the user here
      }
    } catch (error) {
      console.error('Error:', error);
      // Optionally, you can show an error message to the user here
    }
  };

  return (
      <>
      <br /><br /><br />
      <div className="demo-request-container my-3 mx-3">
        <div className="content">
          <div className='paragraph-section'>
            <h3 className="thank-you-message">Thank you for your interest in CodePlayers</h3>
            <p>Experience our ERP solution first-hand with a live demo from our experts. Get answers to your key questions and see why CodePlayers is the right choice for your business.</p>
          </div>
          <div className="form-section">
            <div className="container section-title" data-aos="fade-up">
              <h2>See Our ERP in Action</h2>
              <p>Fill in the details below to request a demo of our ERP solution.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="demo-request-form">
              <div className="form-group">
                <label htmlFor="name" className="label">Name*</label>
                <input type="text" {...register('name')} className="form-control" />
                {errors.name && <p>{errors.name.message}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="position" className="label">Position*</label>
                <input type="text" {...register('position')} className="form-control" />
                {errors.position && <p>{errors.position.message}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="companyName" className="label">Company Name*</label>
                <input type="text" {...register('companyName')} className="form-control" />
                {errors.companyName && <p>{errors.companyName.message}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="mobileNumber" className="label">Mobile Number*</label>
                <input type="text" {...register('mobileNumber')} className="form-control" />
                {errors.mobileNumber && <p>{errors.mobileNumber.message}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="referralSource" className="label">Where did you hear about CodePlayers?*</label>
                <input type="text" {...register('referralSource')} className="form-control" />
                {errors.referralSource && <p>{errors.referralSource.message}</p>}
              </div>

              <div className="btn-container">
                <button type="submit" className="btn-getstarted">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </>
  );
};

export default DemoRequestForm;
