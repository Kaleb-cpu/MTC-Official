import "bootstrap/dist/css/bootstrap.min.css";
import { HashLink } from 'react-router-hash-link'
import "../assets/css files/footer.css"
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import foip from "../../public/media/documents/MTC_Privacy_Policy.pdf"


function Footer() {
    return (
        <div className="">
         <footer className="footer-59391">
        <div className="border-bottom pb-5 mb-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <form action="#" className="subscribe mb-4 mb-lg-0">
                  <div className="form-group">
                  {/* <input type="email" className="form-control" placeholder="Enter your email" /> */}
                  <button><span className="icon-keyboard_backspace"></span></button>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 text-lg-center">
                <ul className="list-unstyled nav-links nav-left mb-4 mb-lg-0">
                  <li><a href="/">Home</a></li>
                  <li><a href="/Childcare">Child Care</a></li>
                  <li><a href="/Emergency">Emergency</a></li>
                </ul>
              </div>
              <div className="col-lg-3">
                <ul className="list-unstyled nav-links social nav-right text-lg-right">
                  <li className="pr-2"><a href="#"><span><BsLinkedin/></span></a></li> 
                  <li className="pr-2"><a href="#"><span><BsInstagram/></span></a></li>
                  <li className="pr-2"><a href="#"><span><BsFacebook/></span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-center site-logo order-2 order-lg-2 mb-3 mb-lg-0">
              <a href="/" className="m-0 p-0">MTC</a>
            </div>
            <div className="col-lg-4 order-1 order-lg-1 mb-3 mb-lg-0">
              <ul className="list-unstyled nav-links m-0 nav-left">
                <li><a href={foip}>FOIP</a></li>
                <li><a href="/About">About</a></li>
                <li> <HashLink to="/About#contact-us">Contact</HashLink> </li>
              </ul>
            </div>
            
            <div className="col-lg-4 text-lg-right order-3 order-lg-3">
              <p className="m-0 text-muted"><small>&copy; 2023. All Rights Reserved.</small></p>
            </div>
          </div>
        </div>

    </footer>
        
        </div>
    )
}
export default Footer