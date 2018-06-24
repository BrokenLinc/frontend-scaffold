import React from 'react';

const Footer = () => (
  <footer className="footer">
    <ul className="footer-menu">
      <li>&copy; {new Date().getFullYear()} My Website</li>
    </ul>
    <div className="footer-logo">
      LOGO
    </div>
  </footer>
);

export default Footer;
