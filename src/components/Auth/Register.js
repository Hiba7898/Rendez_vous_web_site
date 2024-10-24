import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';  // Now using the combined CSS file

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // Password visibility state
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Add register logic here
    navigate('/login');  // Redirect to login after registration
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="container">
      <div className="illustration">
        {/* Add your SVG, image, or 3D animation here */}
        {/* <img src="" alt="illustration" /> */}
      </div>
      <div className="form-container">
        <h1>Join Us Today</h1>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="password-input-container">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
              {passwordVisible ? '🙈' : '👁️'}  {/* Use any eye icons or an icon library like FontAwesome */}
            </span>
          </div>
          <button type="submit">Register</button>
        </form>
        <div className="form-footer">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
