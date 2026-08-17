import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import FeaturedWork from "../components/FeaturedWork/FeaturedWork";
import Portfolio from "../components/Portfolio/Portfolio";
import Services from "../components/Services/Services";

function Home() {
  return (
    <div id="top">
      <Navbar />

      <main>
        <Hero />
        <FeaturedWork />
        <Portfolio />
        <Services />
      </main>
    </div>
  );
}

export default Home;