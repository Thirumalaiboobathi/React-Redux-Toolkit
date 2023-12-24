// ProfilePage.jsx
import React from 'react';
import './profile.css';
import PersonIcon from '@mui/icons-material/Person';
import Navbar from '../../navBar/navbar';

const ProfilePage = () => {
  const studentInfo = {
    studentName: 'Thirumalaiboobathi',
    age: 21,
    email: 'thiru260402@gmail.com',
    qualification: 'BE',
    phoneNumber: '+1 123-456-7890'
  };

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        
        <h1 className="profile-heading">Profile</h1>
        <div className="profile-icon">
          <PersonIcon fontSize="large" />
        </div>
        <div className="profile-details">
          <div className="detail">
            <span className="detail-label">Name:</span>{' '}
            <span className="detail-info">{studentInfo.studentName}</span>
          </div>
          <div className="detail">
            <span className="detail-label">Age:</span>{' '}
            <span className="detail-info">{studentInfo.age}</span>
          </div>
          <div className="detail">
            <span className="detail-label">Email:</span>{' '}
            <span className="detail-info">{studentInfo.email}</span>
          </div>
          <div className="detail">
            <span className="detail-label">Qualification:</span>{' '}
            <span className="detail-info">{studentInfo.qualification}</span>
          </div>
          <div className="detail">
            <span className="detail-label">Phone Number:</span>{' '}
            <span className="detail-info">{studentInfo.phoneNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
