import DashboardView from "../../components/DashboardView";
import Header from "../../components/Header";

function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <DashboardView />
      </main>
    </>
  );
}

export default Home;
