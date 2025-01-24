import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import './App.css'; // Add CSS for styling

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>React Spring Mysql App</h1>
        <nav className="nav-bar">
          <Link to="/" className="nav-button">Home</Link>
          <Link to="/signup" className="nav-button">Signup</Link>
          <Link to="/login" className="nav-button">Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
