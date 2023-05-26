import { useState } from "react";
import DropDown from "../components/DropDown";
import "../assets/css files/NavBar.css";
import "../assets/css files/App.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const changeClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onClick = () => {
    setDropdown(false);
  };

  return (
    <>
      <section>
        <nav className="navbar">
          <Link to="/" className="logo">
            <img src="/media/Logo.png" width={150} alt="MTC Logo" />{" "}
          </Link>
          <div className="menu-icon" onClick={changeClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-side-menu start" : "nav-side-menu"}>
            <li className="nav-items">
              <Link to="/" className="nav-links home" onClick={closeMobileMenu}>
                {" "}
                Home{" "}
              </Link>
            </li>

            <li className="nav-items">
              <Link
                to="/rentals"
                className="nav-links rentals"
                onClick={closeMobileMenu}
              >
                {" "}
                Rentals{" "}
              </Link>
            </li>

            <li className="nav-items">
              <Link
                to="/Childcare"
                className="nav-links aroundTown"
                onClick={closeMobileMenu}
              >
                {" "}
                Child Care{" "}
              </Link>
            </li>
            <li
              className="nav-items"
              onMouseEnter={onMouseEnter}
              onClick={onClick}
            >
              <Link
                to=""
                className="nav-links childcare"
                onClick={closeMobileMenu}
              >
                {" "}
                Around Towne <i className="fas fa-caret-down" />
                {dropdown && <DropDown />}
              </Link>
            </li>

            <li className="nav-items">
              <Link
                to="/About"
                className="nav-links about"
                onClick={closeMobileMenu}
              >
                {" "}
                About{" "}
              </Link>
            </li>

            <li className="nav-items">
              <Link
                to="/ResidentInfo"
                className="nav-links-button"
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