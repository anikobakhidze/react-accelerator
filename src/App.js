import "./App.css";
import logo from "./images/logo.svg";
import footerLogo from "./images/footerLogo.png";
import { ImSearch } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { VscArrowCircleRight } from "react-icons/vsc";
import { LiaFacebook } from "react-icons/lia";
import { CiTwitter, CiYoutube } from "react-icons/ci";

function App() {
  return (
    <>
      <header className="header-container">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <nav className="nav-container">
          <ul className="nav-list-container">
            <li className="nav-list">
              <a href="/">Home</a>
            </li>
            <li className="nav-list">
              <a href="/">Products</a>
            </li>
            <li className="nav-list">
              <a href="/">About</a>
            </li>
            <li className="nav-list">
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="header-icons-container">
          <ImSearch className="header-icon" />
          <AiOutlineUser className="header-icon" />
          <FaCartShopping className="header-icon" />
        </div>
      </header>
      <main className="main-content">
        <section className="section-container">
          <h3 className="section-heading">section1</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            similique iusto sit minus voluptatum, explicabo culpa doloremque est
            exercitationem, dolorem expedita, accusantium necessitatibus quis
            nihil. Impedit corrupti dolore eligendi est!
          </p>
        </section>
        <section className="section-container">
          <h3 className="section-heading">section2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            fuga eveniet tempora quisquam tenetur perspiciatis quidem nemo quod
            voluptas numquam, officia facere beatae nam quo deleniti cumque
            explicabo culpa consectetur laboriosam sequi, soluta officiis
            placeat? Et excepturi cupiditate nisi quam! Voluptas deserunt
            tenetur accusantium, porro ex, eligendi quaerat laborum nesciunt
            quibusdam provident doloremque veniam reiciendis velit
            necessitatibus hic eum officia odit tempora magni? Quibusdam aliquam
            consectetur vel magnam natus? Quod quam consectetur id voluptatum
            cum velit. Sit, veritatis? Fuga dolorum laboriosam perferendis
            officiis expedita obcaecati sunt autem ad odio nihil optio quibusdam
            quas fugit maiores, saepe eos omnis.
          </p>
        </section>
      </main>
      <footer className="footer-container">
        <div>
          <a href="/">
            <img src={footerLogo} alt="logo" />
          </a>
          <p>
            <a href="/" className="footer-link">
              Terms & Conditions
            </a>
          </p>
          <p className="my-2">
            <a href="/" className="footer-link">
              Privacy & Policy
            </a>
          </p>
          <p>&copy; 2024</p>
        </div>
        <div>
          <form className="subscription-container">
            <label htmlFor="subscribtion">Get Newsletter Updates</label>
            <input
              id="subscribtion"
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
    </>
  );
}

export default App;
