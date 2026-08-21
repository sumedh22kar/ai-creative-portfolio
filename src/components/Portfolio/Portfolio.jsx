import { useMemo, useState } from "react";
import { projects } from "../../generated/projects";
import { categories } from "../../generated/categories";
import { siteConfig } from "../../generated/siteConfig";
import PortfolioCard from "./PortfolioCard";
import ProjectDetails from "../ProjectDetails/ProjectDetails";


function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);


  const { portfolio } = siteConfig.sections;


  const publishedProjects = useMemo(() => {
    return projects
      .filter((project) => project.published !== false)
      .sort(
        (a, b) =>
          (a.displayOrder ?? 9999) -
          (b.displayOrder ?? 9999)
      );
  }, []);


  const availableCategories = useMemo(() => {
    return categories.filter((category) => {
      if (category.id === "all") {
        return true;
      }


      return publishedProjects.some(
        (project) => project.category === category.id
      );
    });
  }, [publishedProjects]);


  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
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
              {portfolio.eyebrow}
            </span>


            <h2>{portfolio.title}</h2>
          </div>


          <p>{portfolio.description}</p>
        </div>


        <div
          className="portfolio__filters"
          aria-label="Portfolio filters"
        >
          {availableCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`portfolio__filter ${
                activeCategory === category.id
                  ? "portfolio__filter--active"
                  : ""
              }`}
              onClick={() =>
                setActiveCategory(category.id)
              }
            >
              {category.label}
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
          <p className="portfolio__empty">
            No projects available in this category yet.
          </p>
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