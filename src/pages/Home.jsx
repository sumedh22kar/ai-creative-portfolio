import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";

function Home() {
  return (
    <div id="top">
      <Navbar />

      <main>
        <Hero />
        <Portfolio />
      </main>
    </div>
  );
}

export default Home;