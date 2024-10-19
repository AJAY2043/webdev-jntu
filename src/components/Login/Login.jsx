import React from 'react'
import './Login.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" />
            </div>
            <div className="form-actions">
              <button type="submit">Login</button>
              <p className="forgot-password">Forgot your password?</p>
            </div>
          </form>
          <div className="signup-link">
            <p>Don't have an account? <a href="/signinsignup">Sign Up</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
