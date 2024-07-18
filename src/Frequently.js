import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FAQItem = ({ question, answer, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'faq-active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <h3>{question}</h3>
      {isOpen && (
        <div className="faq-content">
          <p>{answer}</p>
          {link && (
            <a href={link.url} className="faq-link" target="_blank" rel="noopener noreferrer">
              {link.text} <i class="bi bi-arrow-right"></i>
            </a>
          )}
        </div>
      )}
      <i className={`faq-toggle bi ${isOpen ? 'bi-chevron-down' : 'bi-chevron-right'}`}></i>
    </div>
  );
};

const Frequently = () => {
  const faqs = [
    {
      question: 'Do you offer a demo or trial of your ERP software?',
      answer: 'Yes, we offer demos and trials to help you understand the features and benefits of our ERP solutions before making a decision.',
      link: {
        url: './RequestDemoForm',
        text: 'Request a demo here'
      }
    },
    {
      question: 'How do you ensure the security of data within your ERP system?',
      answer: 'Our ERP solutions include robust security measures such as data encryption, access controls, and regular security audits to protect your sensitive information.',
    },
    {
      question: 'Is your ERP software compliant with industry standards and regulations?',
      answer: 'Yes, our ERP solutions comply with various industry standards and regulations to ensure your data is handled securely and legally.',
    },
    {
      question: 'Can Your ERP System Integrate with My Existing Software?',
      answer: 'Yes, our ERP systems are designed to integrate seamlessly with a wide range of existing software, ensuring minimal disruption to your business operations.',
    },
    {
      question: 'What Kind of Support Do You Offer Post-Implementation?',
      answer: "We offer comprehensive support, including 24/7 customer service, regular updates, maintenance, and training to ensure your team can fully leverage the ERP system's capabilities.",
    },
    {
      question: 'What is ERP and How Can It Benefit My Business?',
      answer: 'ERP (Enterprise Resource Planning) systems integrate various functions of a business into one complete system to streamline processes and information across the organization.',
    },
    {
      question: 'What types of training do you offer for your ERP system?',
      answer: 'We offer various training options including on-site training and virtual training. Our comprehensive training programs are designed to help users of all levels become proficient with our ERP system.',
    },
    {
      question: 'How can I get help if I encounter an issue with the ERP system?',
      answer: 'You can reach out to our support team via email, phone, or live chat. We also offer a comprehensive knowledge base and community forums where you can find answers to common questions and solutions to issues.',
    },
  ];

  return (
    <section id="faq" className="faq section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} link={faq.link} />
              ))}
            </div>
          </div>
          {/* End Faq Column */}
        </div>
      </div>
    </section>
  );
};

export default Frequently;
