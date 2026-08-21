import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import StudioStats from "../components/StudioStats/StudioStats";
import Services from "../components/Services/Services";
import Process from "../components/Process/Process";
import FeaturedWork from "../components/FeaturedWork/FeaturedWork";
import Portfolio from "../components/Portfolio/Portfolio";
import About from "../components/About/About";
import ProjectCTA from "../components/ProjectCTA/ProjectCTA";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
function Home() {
  return (
    <div id="top">
      <Navbar />

      <main>
        <Hero />
        <StudioStats />
        <Services />
        <Process />
        <FeaturedWork />
        <Portfolio />
        <About />
        <ProjectCTA />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default Home;