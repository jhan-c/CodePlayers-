import React, { useEffect, useState } from 'react';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="scroll-top"
      className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? 'active' : ''}`}
      onClick={scrollToTop}
    >
      <i className="bi bi-arrow-up-short"></i>
    </button>
  );
};

export default ScrollTopButton;
