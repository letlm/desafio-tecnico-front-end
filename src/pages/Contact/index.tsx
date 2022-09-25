import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import MediaQuery from "react-responsive";
import Footer from "../../components/Footer";

import ContactComp from "../../components/ContactComp";

function Contact() {
  return (
    <>
      <MediaQuery maxWidth={767}>
        <NavBar />
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <Header />
      </MediaQuery>
      <main className="container">
        <ContactComp />
      </main>
      <Footer />
    </>
  );
}

export default Contact;
