import React from 'react';
import AOS from 'aos';

const WhyChooseUs = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const features = [
    {
      icon: '🌟',
      title: 'Experience',
      description: 'With expertise and a successful track record, we can assist you in overcoming challenges and reaching your business objectives.',
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We\'re dedicated to leading in technological innovation and providing solutions to help our clients succeed in today\'s fast-changing market.',
    },
    {
      icon: '🎯',
      title: 'Customer Focus',
      description: 'We prioritize client satisfaction by fostering trust, transparency, and mutual success through long-term relationships.',
    },
    {
      icon: '📈',
      title: 'Results-Driven',
      description: 'We prioritize client success by delivering measurable results that enhance efficiency, cut costs, and boost revenue growth.',
    },
  ];

  return (
    <section id="why-choose-us" className="WhyChooseUs">
      <div className="container section-title" data-aos="fade-up">
        <h2>Why choose us</h2>
        <p>Streamline your operations and gain a competitive edge with our comprehensive ERP solutions.</p>
      </div>
      <div className="container">
        <div className="row gy-4">
          {features.map(({ icon, title, description }, index) => (
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={(index + 1) * 100} key={title}>
              <div className="WhyChooseUsItem">
                <div className="icon1">
                  <span>{icon}</span>
                </div>
                <div>
                  <h4 className="title">{title}</h4>
                  <p className="description">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
