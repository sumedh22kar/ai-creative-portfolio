import { projects } from "../../data/projects";
import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  const publishedProjects = projects
    .filter((project) => project.published)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-section__header">
        <span>OUR WORK</span>

        <h2>Selected Creative Work</h2>

        <p>
          Explore our AI-generated images, videos, advertisements and creative
          projects.
        </p>
      </div>

      <div className="portfolio-grid">
        {publishedProjects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;