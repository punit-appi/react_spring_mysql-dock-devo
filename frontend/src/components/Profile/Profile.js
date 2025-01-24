import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css'; // Import the CSS file for styling

// Sample data for Coorg photos and locations
const coorgPhotos = [
  {
    id: 1,
    url: 'https://eventserica.com/wp-content/uploads/2024/02/Abbey-Falls-1.jpeg',
    title: 'Abbey Falls',
    location: 'Madikeri, Coorg',
  },
  {
    id: 2,
    url: 'https://4.imimg.com/data4/AQ/IE/GLADMIN-16246596/3-250x250.jpg',
    title: 'Nisargadhama',
    location: 'Kodagu, Coorg',
  },
  {
    id: 3,
    url: 'https://live.staticflickr.com/34/74074149_4c24938fe1_b.jpg',
    title: 'Iruppu Falls',
    location: 'Siddapura, Coorg',
  },
  {
    id: 4,
    url: 'https://i.pinimg.com/736x/1c/10/c1/1c10c144bd215a58da4d76168059421e.jpg',
    title: 'Dubare Elephant Camp',
    location: 'Coorg',
  },
  {
    id: 5,
    url: 'https://vl-prod-static.b-cdn.net/system/images/000/430/062/95acfeb55e0c5bcc7b53e497709c5514/700gt/tadiandamol_trek_coorg_bmcadventures_01.jpg?1593814917',
    title: 'Tadiandamol Peak',
    location: 'Coorg',
  },
];

const Profile = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const user = JSON.parse(localStorage.getItem('user')); // Retrieve user data from localStorage

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    
    // Redirect to login page after logout
    navigate('/login');
  };

  if (!user) {
    // If no user is found in localStorage, redirect to login
    navigate('/login');
    return null;
  }

  // Default profile picture
  const defaultProfilePic = "https://i.pinimg.com/564x/8d/ff/49/8dff49985d0d8afa53751d9ba8907aed.jpg"; // Placeholder image

  return (
    <div className="profile-container">
      <div className="profile-card">
        {/* Profile picture */}
        <img
          src={defaultProfilePic}  // Default profile picture
          alt="Profile"
          className="profile-pic"
        />
        <h2 className="profile-header">Welcome, {user.username || 'User'}!</h2>
        <p className="profile-info">Email: {user.email}</p>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>

      <div className="gallery-container">
        <h1 className="gallery-header">Coorg Photo Gallery</h1>
        <div className="gallery-grid">
          {coorgPhotos.map((photo) => (
            <div key={photo.id} className="photo-card">
              <img
                src={photo.url}
                alt={photo.title}
                className="photo-img"
              />
              <div className="photo-info">
                <h3 className="photo-title">{photo.title}</h3>
                <p className="photo-location">{photo.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
