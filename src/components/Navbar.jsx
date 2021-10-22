import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../images";

const Navbar = () => {
  const [menuShown, setMenuShown] = useState(false);

  const showMenu = () => {
    setMenuShown((value) => !value);
  };

  return (
    <section className="header">
      <nav>
        <div className="logo-div">
          <img src={logo} alt="Logo" className="header_logo" />
        </div>
        <div className="nav_div">
          <ul
            className={menuShown ? "navbar navbar__active" : "navbar"}
            id="navbar"
          >
            <li>
              <Link to="/" className="nav_links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav_links">
                About us
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="nav_links">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/radio" className="nav_links">
                Radio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav_links">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={menuShown ? "hamburger toggle" : "hamburger"}
          id="hamburger"
          onClick={showMenu}
        >
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
