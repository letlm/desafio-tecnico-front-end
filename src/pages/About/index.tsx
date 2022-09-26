import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import MediaQuery from "react-responsive";
import Footer from "../../components/Footer";
import AboutComp from "../../components/AboutComp";

function About() {
  return (
    <>
      <MediaQuery maxWidth={767}>
        <NavBar />
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <Header />
      </MediaQuery>
      <main className="container">
        <AboutComp />
      </main>
      <Footer />
    </>
  );
}

export default About;
