import DashboardView from "../../components/DashboardView";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MediaQuery from "react-responsive";
import NavBar from "../../components/NavBar";
import Estimate from "../../components/Estimate";
import Partners from "../../components/Partners";
import DashboardContent from "../../components/DashboardContent";

function Home() {
  return (
    <>
      <MediaQuery maxWidth={767}>
        <NavBar />
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <Header />
      </MediaQuery>
      <main className="container">
        <DashboardView />
        <DashboardContent />
        <Partners />
        <Estimate />
      </main>
      <Footer />
    </>
  );
}

export default Home;
