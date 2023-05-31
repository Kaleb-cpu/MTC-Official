import { useState } from "react";
import "../assets/css files/NavBar.css";
import "../assets/css files/App.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const changeClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
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
            <li
              className="Nav-items"
            >
              <Link
                to=""
                className="Nav-links aroundTown"
                onClick={closeMobileMenu}
              >
                {" "}
                Around Towne <i className="fas fa-caret-down" />
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

            <li className="Nav-items">
              <Link
                to="/ResidentInfo"
                className="Nav-links-button"
                onClick={closeMobileMenu}
              >
                {" "}
                Resident info{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Navbar;