import React from 'react';
import '../../styles/login.css';
import bg from '../../assets/bglogin.png'; 

export default function LoginDesktop() {
  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="login-overlay" />

      <div className="login-card">
        <h2>Login or Create Account</h2>
        <p>Enter your mobile number to get started</p>

        <div className="phone-input">
          <span>🇮🇳 </span>
          <span>+91</span>
          <input placeholder="Enter Mobile Number" />
        </div>

        <button className="dlogin-btn">CONTINUE</button>

        <div className="divider">
          <span>or</span>
        </div>

        <div className="social-row">
          <button className="social-btn">
            <img src="/icons/google.svg" alt="" />
            Google
          </button>
          <button className="social-btn">
            <img src="/icons/mail.svg" alt="" />
            Email
          </button>
        </div>

        <div className="referral">NEW USER</div>

        <div className="login-footer">
          By proceeding, you agree to our <b>Privacy Policy</b> & <b>T&C</b>
        </div>
      </div>
    </div>
  );
}
