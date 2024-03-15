import footerLogo from "../assets/images/footerLogo.png";
function Footer() {
  return (
    <footer className="flex justify-around bg-black text-white mt-auto">
      <img src={footerLogo} alt="logo" />
      <nav className="flex justify-around">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
