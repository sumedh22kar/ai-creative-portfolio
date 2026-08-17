import { projects } from "../../data/projects";
import PortfolioCard from "../Portfolio/PortfolioCard";

function FeaturedWork() {
  const featuredProjects = projects
    .filter((project) => project.published && project.featured)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section className="featured-work" id="featured">
      <div className="featured-work__header">
        <div>
          <span className="section-label">FEATURED WORK</span>

          <h2>Selected Projects</h2>
        </div>

        <p>
          A selection of our strongest AI-powered creative work.
        </p>
      </div>

      <div className="featured-work__grid">
        {featuredProjects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>

      <div className="featured-work__action">
        <a href="#portfolio">
          View All Work <span>→</span>
        </a>
      </div>
    </section>
  );
}

export default FeaturedWork;