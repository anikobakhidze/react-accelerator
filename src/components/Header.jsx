import logo from "../assets/images/logo.svg";
function Header() {
  return (
    <header className="flex justify-around items-center bg-slate-400">
      <img src={logo} alt="logo" />
      <nav className="w-80">
        <ul className="flex justify-around ">
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
    </header>
  );
}

export default Header;
