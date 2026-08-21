import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import FeaturedWork from "../components/FeaturedWork/FeaturedWork";
import Portfolio from "../components/Portfolio/Portfolio";
import Services from "../components/Services/Services";
import Workflow from "../components/Workflow/Workflow";
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
        <FeaturedWork />
        <Portfolio />
        <Services />
        <Workflow />
        <About />
        <ProjectCTA />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default Home;