import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <button className="nav-link" onClick={handleLoginClick}>Login</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={handleRegisterClick}>Register</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={handleContactClick}>Contact</button>
            </li>

            <li className="nav-item">
            <button className="nav-link" onClick={handleAboutClick}>About</button>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="https://github.com/Thirumalaiboobathi" target="_blank" rel="noopener noreferrer" className="nav-link">
                <GitHubIcon fontSize="large" style={{ marginRight: '10px' }} />
              </a>
            </li>
            <li className="nav-item">
              <a href="https://www.linkedin.com/in/thirumalaiboobathi-b-902a51233/" target="_blank" rel="noopener noreferrer" className="nav-link">
                <LinkedInIcon fontSize="large" style={{ marginRight: '10px' }} />
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile" onClick={handleProfileClick}>
                <PersonIcon fontSize="large" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
