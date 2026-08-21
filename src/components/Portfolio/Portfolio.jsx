import { useMemo, useState } from "react";
import { projects } from "../../generated/projects";
import PortfolioCard from "./PortfolioCard";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  const publishedProjects = useMemo(() => {
    return projects
      .filter((project) => project.published !== false)
      .sort(
        (a, b) =>
          (a.displayOrder ?? 9999) -
          (b.displayOrder ?? 9999)
      );
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        publishedProjects
          .map((project) => project.category)
          .filter(Boolean)
      ),
    ];

    return ["ALL", ...uniqueCategories];
  }, [publishedProjects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "ALL") {
      return publishedProjects;
    }

    return publishedProjects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory, publishedProjects]);

  return (
    <>
      <section className="portfolio" id="portfolio">
        <div className="portfolio__header">
          <div>
            <span className="section-label">
              ALL WORK
            </span>

            <h2>Creative Portfolio</h2>
          </div>

          <p>
            Explore our AI-powered image and video creative work.
          </p>
        </div>

        <div
          className="portfolio__filters"
          role="tablist"
          aria-label="Project categories"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "portfolio__filter portfolio__filter--active"
                  : "portfolio__filter"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {filteredProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="portfolio__empty">
            <p>No projects found in this category.</p>
          </div>
        )}
      </section>

      <ProjectDetails
        project={selectedProject}
        projects={publishedProjects}
        onClose={() => setSelectedProject(null)}
        onOpenProject={setSelectedProject}
      />
    </>
  );
}

export default Portfolio;