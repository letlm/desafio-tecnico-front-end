import DashboardView from "../../components/DashboardView";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <DashboardView />
      </main>
      <Footer />
    </>
  );
}

export default Home;
