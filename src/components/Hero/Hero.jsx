import React from 'react'
import './Hero.css'
import hero_img from '../../assets/hero-img1.jpg'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <img src={hero_img} alt="Marriage Ritual" className="hero-img" />
      </div>
      <div className="hero-right">
        <h2>Register free & get your matched partner</h2>
        <form className="registration-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Surname</label>
            <input type="text" placeholder="Enter your surname" />
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input type="text" placeholder="Enter mobile number" />
            <a href="#verify" className="verify-link">Click Here To Verify Mobile</a>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <div className="radio-group">
              <input type="radio" id="male" name="gender" />
              <label htmlFor="male">Male</label>
              <input type="radio" id="female" name="gender" />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <button type="submit" className="submit-button" onClick={()=>alert('thank for your registraion with Annapurna Matrimony')}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
