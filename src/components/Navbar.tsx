import { useState } from "react";
import "../assets/css files/navbar.css";
import "../assets/css files/app.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";


function Navbar() {
  const [click, setClick] = useState(false);
  const changeClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // scroll

  return (
    <div>
      <section>
        <nav className="Nav">
          <Link to="/" className="Logo">
            <img src="/media/Logo.png" width={150} alt="MTC Logo" />{" "}
          </Link>
          <div className="menu-icon" onClick={changeClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={click ? "Nav-side-menu start" : "Nav-side-menu"}>
            <li className="Nav-items">
              <Link to="/" className="Nav-links home" onClick={closeMobileMenu}>
                {" "}
                Home{" "}
              </Link>
            </li>

            <li className="Nav-items">
              <Link
                to="/rentals"
                className="Nav-links rentals"
                onClick={closeMobileMenu}
              >
                {" "}
                Rentals{" "}
              </Link>
            </li>

            <li className="Nav-items">
              <Link
                to="/Childcare"
                className="Nav-links childcare"
                onClick={closeMobileMenu}
              >
                {" "}
                Child Care{" "}
              </Link>
            </li>
            <li className="Nav-items">
              <Link
                to="/Explore"
                className="Nav-links childcare"
                onClick={closeMobileMenu}
              >
                {" "}
                Explore{" "}
              </Link>
            </li>
            

            <li className="Nav-items">
              <Link
                to="/ResidentInfo"
                className="Nav-links about"
                onClick={closeMobileMenu}
              >
                {" "}
                Resident Info{" "}
              </Link>
            </li>
            <li className="Nav-items">
              <Link
                to="/About"
                className="Nav-links about"
                onClick={closeMobileMenu}
              >
                {" "}
                About{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
