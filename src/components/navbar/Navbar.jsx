import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`navbar ${isActive ? 'active' : ''}`}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h3>Annapurna Matrimony</h3>
      </Link>

      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

      <div className={`nav-menu ${isActive ? 'active' : ''}`}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/aboutus" className="nav-link">About Us</Link>
        <Link to="/carrers" className="nav-link">Careers</Link>
        <Link to="/contactus" className="nav-link">Contact Us</Link>
        <Link to="/CMDdesk" className="nav-link">CMD Desk</Link>
        <Link to="/help" className="nav-link">Help</Link>
      </div>

      <div className="login">
        <Link to="/signinsignup" style={{ textDecoration: 'none' }}>
          <p>SignIn/SignUp</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
