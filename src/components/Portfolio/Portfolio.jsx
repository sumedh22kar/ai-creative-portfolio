import { useMemo, useState } from "react";
import { projects } from "../../generated/projects";
import PortfolioCard from "./PortfolioCard";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(projects.map((project) => project.category)),
    ];

    return ["All", ...uniqueCategories];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) => project.published)
      .filter(
        (project) =>
          activeCategory === "All" ||
          project.category === activeCategory,
      )
      .sort((a, b) => a.displayOrder - b.displayOrder);
  }, [activeCategory]);

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

      <div className="portfolio-filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={
              activeCategory === category
                ? "portfolio-filter active"
                : "portfolio-filter"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <PortfolioCard
            key={project.id}
            project={project}
            onOpen={setSelectedProject}
          />
        ))}
      </div>

      <ProjectDetails
        project={selectedProject}
        projects={projects}
        onClose={() => setSelectedProject(null)}
        onOpenProject={setSelectedProject}
      />
    </section>
  );
}

export default Portfolio;