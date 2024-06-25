import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Cookies = () => {
  return (
    <>
    <Header />
    <br/><br/><br/><br/><br/>
    <div className="cookies container mt-4">
      <h1>Cookies and Other Technologies</h1><hr/>
      <p>Codeplayers uses cookies (small text files placed on your device) and similar technologies to provide our websites and online services and help collect data. The text in a cookie often consists of a string of numbers and letters that uniquely identifies your computer, but it can contain other information as well. Codeplayers apps use other identifiers, such as the advertising ID in Windows, for similar purposes, and many of our websites and applications also contain web beacons or other similar technologies, as described below.</p>
      
      <h2>Our Use of Cookies and Similar Technologies</h2>
      <p>Codeplayers uses cookies and similar technologies for several purposes, depending on the product, including:</p>
      <ul>
        <li>
          <strong>Storing your Preferences and Settings:</strong> Settings that enable our products to operate correctly or that maintain your preferences over time may be stored on your device. For example, if you enter your city or postal code to get local news or weather information on a Codeplayers website, we may store that data in a cookie so that you will see the relevant local information when you return to the site. If you opt out of interest-based advertising, we store your opt-out preference in a cookie on your device.
        </li>
        <li>
          <strong>Analytics:</strong> In order to provide our products, we use cookies and other identifiers to gather usage and performance data. For example, we use cookies to count the number of unique visitors to a web page or service and to develop other statistics about the operations of our products.
        </li>
      </ul>
      
      <h2>How to Control Cookies</h2>
      <p>Most web browsers automatically accept cookies but provide controls that allow you to block or delete them. For example, you can block or delete cookies by clicking Settings > Privacy > Cookies. Instructions for blocking or deleting cookies in other browsers may be available in each browser's privacy or help documentation.</p>
      <p>Certain features of Codeplayers products depend on cookies. Please be aware that if you choose to block cookies, you may not be able to sign in or use those features, and preferences that are dependent on cookies may be lost. If you choose to delete cookies, settings and preferences controlled by those cookies, including advertising preferences, will be deleted and may need to be recreated.</p>
      
      <h2>Other Similar Technologies</h2>
      <p>In addition to standard cookies, our products can also use other similar technologies to store and read data files on your computer. This is typically done to maintain your preferences or to improve speed and performance by storing certain files locally. But, like standard cookies, these technologies can also be used to store a unique identifier for your computer, which can then be used to track behavior.</p>
    </div>
    <br/><br/><br/><br/><br/>
    <Footer />
    </>
  );
};

export default Cookies;
