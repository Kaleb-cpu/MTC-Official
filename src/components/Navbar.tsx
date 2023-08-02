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
              {/* <select name="" id="">
                <option value="">Around Towne</option>
                <option value="">Ice Surface</option>
                <option value="">Political Contacts</option>
                <option value="">Ponds & Pathways</option>
                <option value="">Emergency</option>
                <option value="">Crime Stats</option>
              </select> */}
              <Dropdown>
                <Dropdown.Toggle
                  className="Nav-links aroundTown"
                  id="dropdown-basic"
                >
                  <div> Around Towne </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/Ice Surface"> Ice Surface</Link>{" "}
                  </Dropdown.Item>

                  
                  <Dropdown.Item>
                    <Link to="/Ponds Pathways"> Ponds & Pathways</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/Emergency"> Emergency</Link>
                  </Dropdown.Item>
                 
                </Dropdown.Menu>
              </Dropdown>
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
