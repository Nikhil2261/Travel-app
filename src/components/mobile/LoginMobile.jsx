import React from 'react';
import '../../styles/login.css';
import bg from '../../assets/bglogin.png';

export default function LoginMobile() {
  return (
    <div
      className="login-page mobile"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="login-overlay" />

      <div className="login-card mobile-card">
        <h2>Login or Create Account</h2>
        <p>Enter your mobile number</p>

        <div className="phone-input">
          <span>🇮🇳</span>
          <span>+91</span>
          <input placeholder="Mobile Number" />
        </div>

        <button className="mlogin-btn">CONTINUE</button>

        <div className="divider">
          <span>or</span>
        </div>

        <div className="social-column">
          <button className="social-btn">
            <img src="/icons/google.svg" alt="" />
            Continue with Google
          </button>
          <button className="social-btn">
            <img src="/icons/mail.svg" alt="" />
            Continue with Email
          </button>
        </div>

        <div className="referral">Have a Referral Code?</div>
      </div>
    </div>
  );
}



