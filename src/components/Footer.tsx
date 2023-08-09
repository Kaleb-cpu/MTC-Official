import "bootstrap/dist/css/bootstrap.min.css";
import { HashLink } from "react-router-hash-link";
import "../assets/css files/footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import foip from "../../public/media/documents/MTC_Privacy_Policy.pdf";


function Footer() {
  return (
    <div className="mt-10">
      <footer className="footer-59391">
        <div className="border-bottom pb-5 mb-4">
          <div className="container">
            <div className="row justify-between align-items-center">
              <div className="pb-6">
               
                <p className="teritary md:w-3/5 w-4/5 m-auto font-2 text-lg">McKenzie Towne Council (MTC), within the city of Calagry acknowledges the traditional territories of the Blackfoot and the people of the Treaty 7 Region in Southern Alberta, which includes the Piikani, Kainai and Siksika Nations; the Stoney-Nakoda, including the Chiniki, Bearspaw and Wesley First Nations; and the Tsuut’ina Nation. McKenzie Towne Council (MTC), within the city of Calagry is also home to the Métis Nation of Alberta, Region 3.</p>
              </div>
              <div className="col-lg-4">
                <ul className="list-unstyled nav-links nav-left mb-4 mb-lg-0">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/Childcare">Child Care</a>
                  </li>
                  <li>
                    <a href="/Emergency">Emergency</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <ul className="list-unstyled nav-links social nav-right text-lg-right">
                  <li className="pr-2">
                    <a href="#">
                      <span>
                        <BsLinkedin />
                      </span>
                    </a>
                  </li>
                  <li className="pr-2">
                    <a href="#">
                      <span>
                        <BsInstagram />
                      </span>
                    </a>
                  </li>
                  <li className="pr-2">
                    <a href="#">
                      <span>
                        <BsFacebook />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-center site-logo order-2 order-lg-2 mb-3 mb-lg-0">
              <a href="/" className="m-0 p-0">
                MTC
              </a>
            </div>
            <div className="col-lg-4 order-1 order-lg-1 mb-3 mb-lg-0">
              <ul className="list-unstyled nav-links m-0 nav-left">
                <li>
                  <a href={foip}>FOIP</a>
                </li>
                <li>
                  <a href="/About">About</a>
                </li>
                <li>
                  {" "}
                  <HashLink to="/About#contact-us">Contact</HashLink>{" "}
                </li>
              </ul>
            </div>

            <div className="col-lg-4 text-lg-right order-3 order-lg-3">
              <p className="m-0 text-muted">
                <small>&copy; 2023. All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
