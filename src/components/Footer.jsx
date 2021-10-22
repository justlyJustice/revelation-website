import { Link } from "react-router-dom";

import { logo } from "../images";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-1">
            <img src={logo} alt={logo} />
            <div className="social__media">
              <a
                href="https://web.facebook.com/rcpatv"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-facebook fb"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UC103XSIWkMtNEDYW88AmWeA/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-youtube yt"></i>
              </a>
            </div>
          </div>
          <div className="col-2">
            <h5>Links</h5>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/radio">Radio</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h5>Contact</h5>
            <p>
              <i className="fa fa-home"></i>
              Ebi's Mechanic Road, Amarata,
              <br />
              Yenagoa, Bayelsa State
            </p>
            <p>
              <i className="fa fa-phone"></i>
              08038687786 || 08035593158
            </p>
            <p>
              <i className="fa fa-envelope"></i>
              revelationpower@gmail.com
            </p>
          </div>

          <div className="col-4">
            <ContactForm />
          </div>
        </div>
        <div className="rights">
          <small>
            &copy; Copyright 2021 Revelation Power Christian Assembly. - All
            Rights Reserved
          </small>
        </div>
      </div>
    </section>
  );
};

export default Footer;
