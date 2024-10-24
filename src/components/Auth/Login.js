import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';  // Assuming you're using the same CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);  // State to track password visibility
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Add login logic here
    navigate('/dashboard');  // Redirect after successful login
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="container">
      <div className="illustration">
        {/* Add your SVG, image, or 3D animation here */}
      </div>
      <div className="form-container">
        <h1>Welcome to Your App 👋🏻</h1>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <form onSubmit={handleLogin}>
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
              {passwordVisible ? '🙈' : '👁️'} {/* Use any eye icons (or you can use FontAwesome) */}
            </span>
          </div>
          <div className="login-options">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="form-footer">
          <p>New on our platform? <a href="/register">Create an account</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
