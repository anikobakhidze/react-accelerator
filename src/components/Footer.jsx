import React from "react";
import footerLogo from "../assets/images/footerLogo.png";
import { VscArrowCircleRight } from "react-icons/vsc";
import { LiaFacebook } from "react-icons/lia";
import { CiTwitter, CiYoutube } from "react-icons/ci";
import Logo from "./Logo";
function Footer() {
  return (
    <footer className="footer-container">
      <div>
        <Logo logo={footerLogo} />
        <nav>
          <ul>
            <li>
              <a href="/" className="footer-link">
                Terms & Conditions
              </a>
            </li>
            <li className="my-2">
              <a href="/" className="footer-link">
                Privacy & Policy
              </a>
            </li>
          </ul>
        </nav>
        <p>&copy; 2024</p>
      </div>
      <div>
        <form className="subscription-container">
          <label htmlFor="subscription">Get Newsletter Updates</label>
          <input
            id="subscription"
            className="subscription-input"
            type="email"
            placeholder="Subscribe"
          />
          <VscArrowCircleRight className="subscription-arrow-icon" />
        </form>
        <div className="social-icons-container">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <LiaFacebook className="social-icon facebook-icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <CiTwitter className="social-icon twitter-icon" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <CiYoutube className="social-icon youtube-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
