import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { bible, photo1, photo2, photo3, radioLogo } from "../images";

const Home = () => {
  return (
    <>
      <section className="header">
        <Navbar />

        <div className="hero-image">
          <div className="content">
            <h2 className="sm__text">Welcome to</h2>
            <h3 className="lg__text">REVELATION POWER</h3>
            <h3 className="lg__text">CHRISTIAN ASSEMBLY</h3>
            <p className="para__text">...Lighting your world with His Word</p>
          </div>
        </div>
      </section>

      <section className="index__about">
        <div className="container">
          <div className="row">
            <div className="col-1">
              <img src={bible} alt="Bible" />
            </div>
            <div className="col-2">
              <h4 className="title">About Us </h4>
              <hr className="hr__line" />
              <p className="about__para">
                Revelation Power Christian Assembly Inc. is a church rooted in
                the word of God and power of the Holy Spirit. We present the
                word of God systematically and analytically. The result is pure
                and Holy living, preparing us...
                <Link to="/about" className="button">
                  Read More
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="index__gallery">
        <div className="container">
          <h4 className="title">Gallery</h4>
          <hr className="hr__line" />
          <div className="row">
            <div className="col-1">
              <img src={photo1} className="gallery__img" alt="gallery_img" />
            </div>
            <div className="col-2">
              <img src={photo2} className="gallery__img" alt="gallery_img" />
            </div>
            <div className="col-3">
              <img src={photo3} className="gallery__img" alt="gallery_img" />
            </div>
          </div>
        </div>
      </section>

      <section className="index__radio">
        <div className="container">
          <div className="row">
            <div className="col-1">
              <h4 className="title">Radio</h4>
              <hr className="hr__line" />
              <p className="radio__text">
                Revpowerradio Int'l is a dynamic Christian internet radio in
                Nigeria with top of the range programs, independently managed
                professional Christian...
              </p>

              <a href="radio.html" className="button">
                Read more
              </a>
            </div>
            <div className="col-2">
              <img src={radioLogo} alt={radioLogo} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
