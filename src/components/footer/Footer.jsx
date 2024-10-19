import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <h2>Annapurna Matrimony</h2>
      </div>

      <div className="footer-links">
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Support</p>
      </div>

      <div className="footer-social">
        <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
        <a href="#twitter"><i className="fab fa-twitter"></i></a>
        <a href="#instagram"><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
