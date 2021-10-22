import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="contact__page all__pages">
        <div className="first__container">
          <h4 className="lg__text">Contact Us</h4>
          <hr className="hr__line" />
          <div className="row">
            <div className="col col__1">
              <div className="form">
                <ContactForm />
              </div>
            </div>

            <div className="col col__2">
              <p className="about__para">
                <i className="fa fa-home"></i>
                Ebi's Mechanic Road, Amarata,Yenagoa, Bayelsa State
              </p>
              <p className="about__para">
                <i className="fa fa-phone"></i>
                08166500893
              </p>
              <p className="about__para">
                <i className="fa fa-envelope"></i>
                revelationpower@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Contact;
