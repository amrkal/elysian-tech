import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom'; 

function LoginPage() {
  const navigate = useNavigate();
  // Inline definition of the left side component
  const LeftSection = () => {
    return (
      <div className="left-section">
        {/* Logo (Positioned at the top-left) */}
        <div className="logo">
          {/* Using the logo from the public folder */}
          <img src="/Logo.png" alt="Logo" />
        </div>

        {/* Illustration */}
        <div className="illustration">
          {/* Using the illustration from the public folder */}
          <img src="/15.png" alt="Illustration" />
        </div>

        {/* Main Text */}
        <div className="main-text">
          <h1>Welcome aboard my friend</h1>
          <p>just a couple of clicks and we start</p>
        </div>
      </div>
    );
  };

  // State for email & password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="container">
      {/* Left side (inline component) */}
      <LeftSection />

      {/* Right side */}
      <div className="right-section">
        <form className="form-container" onSubmit={handleSubmit}>
          <h2>Log in</h2>

          {/* Email Field */}
          <div className="input-field">
            <label htmlFor="email" className="visually-hidden">
              Email
            </label>
            <div className="input-icon">
              {/* You can replace this icon with your own or remove if not needed */}
              <img src="/icon-email.png" alt="Email icon" />
            </div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="input-field">
            <label htmlFor="password" className="visually-hidden">
              Password
            </label>
            <div className="input-icon">
              <img src="/icon-lock.png" alt="Lock icon" />
            </div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => {
                const passField = document.getElementById('password');
                passField.type =
                  passField.type === 'password' ? 'text' : 'password';
              }}
            >
              <img src="/icon-eye.png" alt="Show/Hide Password" />
            </button>
          </div>

          {/* Forgot password link */}
          <div className="forgot-password">
            <a href="#!" onClick={() => navigate('/forgot-password')}>Forgot password?</a>
          </div>

          {/* Login button */}
          <button type="submit" className="btn primary-btn">
            Log in
          </button>

          {/* OR separator */}
          <div className="separator">
            <div className="line"></div>
            <span>Or</span>
            <div className="line"></div>
          </div>

          {/* Social buttons */}
          <div className="social-buttons">
            <button type="button" className="btn google-btn">
              <img src="/Google.png" alt="Google icon" />
              Google
            </button>
            <button type="button" className="btn facebook-btn">
              <img src="/Facebook.png" alt="Facebook icon" />
              Facebook
            </button>
          </div>

          {/* Register */}
          <div className="register">
            <span>Have no account yet?</span>
            <button type="button" className="btn register-btn" onClick={() => navigate('/register')}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
