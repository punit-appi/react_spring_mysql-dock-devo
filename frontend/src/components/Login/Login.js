import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for redirection
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL || 'http://13.234.225.55:8081/api';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/auth/login`, user)
      .then((response) => {
        // On successful login, save user data in localStorage (optional)
        localStorage.setItem('user', JSON.stringify(response.data)); // Store user data in localStorage
        // Redirect to profile page after successful login
        navigate('/profile');
      })
      .catch(() => alert('Invalid credentials'));
  };

  return (
    <div className="login-container">
      <h2>Welcome Back!</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Log In</button>
      </form>
    </div>
  );
};

export default Login;
