import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'faq-active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <h3>{question}</h3>
      {isOpen && (
        <div className="faq-content">
          <p>{answer}</p>
        </div>
      )}
      <i className={`faq-toggle bi ${isOpen ? 'bi-chevron-down' : 'bi-chevron-right'}`}></i>
    </div>
  );
};

const Frequently = () => {
  const faqs = [
    {
      question: 'Question1?',
      answer: 'Answer1.',
    },
    {
      question: 'Question2?',
      answer: 'Answer2.',
    },
    {
      question: 'Question3?',
      answer: 'Answer3.',
    },
    {
      question: 'Question4?',
      answer: 'Answer4.',
    },
    {
      question: 'Question5?',
      answer: 'Answer5.',
    },
    {
      question: 'Question6?',
      answer: 'Answer6.',
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
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
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
