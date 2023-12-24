import React from 'react';
import Navbar from '../../navBar/navbar';
import './AboutScreen.css';

const AboutScreen = () => {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Us</h2>
          <div className="about-details">
            <p>
              Welcome to our platform! We are a team of passionate individuals committed to
              delivering informative and engaging content.
            </p>
            <p>
              Our mission is to empower and educate our audience through our diverse range of
              articles, tutorials, and resources.
            </p>
            <p>
              Whether you're a beginner or an expert, we strive to provide valuable insights and
              knowledge to aid you on your journey.
            </p>
            <p>
              Our dedicated team works tirelessly to ensure that our content is up-to-date,
              accurate, and user-friendly.
            </p>
            <p>
              Explore our platform, and please don't hesitate to reach out to us with any
              questions, feedback, or suggestions. Your input is invaluable to us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
