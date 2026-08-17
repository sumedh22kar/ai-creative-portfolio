import Navbar from "../components/Navbar/Navbar";
import Portfolio from "../components/Portfolio/Portfolio";

function Home() {
  return (
    <div id="top">
      <Navbar />

      <main>
        <section className="hero-placeholder">
          <h1>AI Creative Studio</h1>
          <p>AI Images • AI Videos • Creative Advertising</p>
        </section>

        <Portfolio />
      </main>
    </div>
  );
}

export default Home;