import React from 'react';
import Navbar from '../../navBar/navbar';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons library
import './ContactScreen.css';

const ContactScreen = () => {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-title">Contact Us</h2>
          <div className="contact-details">
            <p>
              Feel free to get in touch with us. We are available to assist you with any inquiries
              you might have.
            </p>
            <p>Email: thiru260402@gmail.com</p>
            <p>Address: Madurai, Tamilnadu, India</p>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/Thirumalaiboobathi"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub /> {/* GitHub Icon */}
              <span className="icon-text">GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/thirumalaiboobathi/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaInstagram /> {/* Instagram Icon */}
              <span className="icon-text">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/thirumalaiboobathi-b-902a51233/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin /> {/* LinkedIn Icon */}
              <span className="icon-text">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
