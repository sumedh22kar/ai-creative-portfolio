import { useState } from "react";
import { projects } from "../../generated/projects";
import PortfolioCard from "../Portfolio/PortfolioCard";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = projects
    .filter((project) => project.published && project.featured)
    .sort(
      (a, b) =>
        (a.displayOrder ?? 9999) -
        (b.displayOrder ?? 9999)
    );

  return (
    <>
      <section className="featured-work" id="featured">
        <div className="featured-work__header">
          <div>
            <span className="section-label">
              FEATURED WORK
            </span>

            <h2>Selected Projects</h2>
          </div>

          <p>
            A selection of our strongest AI-powered creative work.
          </p>
        </div>

        <div className="featured-work__grid">
          {featuredProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
            />
          ))}
        </div>

        <div className="featured-work__action">
          <a href="#portfolio">
            View All Work <span>→</span>
          </a>
        </div>
      </section>

      <ProjectDetails
        project={selectedProject}
        projects={projects}
        onClose={() => setSelectedProject(null)}
        onOpenProject={setSelectedProject}
      />
    </>
  );
}

export default FeaturedWork;