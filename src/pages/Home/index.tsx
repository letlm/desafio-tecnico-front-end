import DashboardView from "../../components/DashboardView";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MediaQuery from "react-responsive";
import NavBar from "../../components/NavBar";

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
      </main>
      <Footer />
    </>
  );
}

export default Home;
