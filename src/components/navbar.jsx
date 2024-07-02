import React, { useState } from 'react';
import './navbar.css';
import logo from '../assets/mediamonk_logo.png';
import { Link } from 'react-scroll';

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    console.log('Toggle clicked'); // Log to check if the function is called
    setIsModalOpen(!isModalOpen);
  };

  const handleNavLinkClick = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="toggle-icon" onClick={toggleModal}>
        ☰
        {isModalOpen && (
          <div className="modal">
            <ul className="nav-links">
              <li><Link to="home" smooth={true} duration={500} onClick={handleNavLinkClick}>Home</Link></li>
              <li><Link to="about" smooth={true} duration={500} onClick={handleNavLinkClick}>About Us</Link></li>
              <li><Link to="services" smooth={true} duration={500} onClick={handleNavLinkClick}>Services</Link></li>
              <li><Link to="contact" smooth={true} duration={500} onClick={handleNavLinkClick}>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
