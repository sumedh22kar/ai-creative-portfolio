import { useEffect } from "react";
import PortfolioMedia from "../PortfolioMedia/PortfolioMedia";

function ProjectDetails({ project, projects = [], onClose, onOpenProject }) {
  useEffect(() => {
    if (!project) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  const moreProjects = projects
    .filter((item) => item.id !== project.id && item.published !== false)
    .sort(
      (a, b) =>
        (a.displayOrder ?? 9999) -
        (b.displayOrder ?? 9999)
    )
    .slice(0, 3);

  return (
    <div
      className="project-details"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
    >
      <div
        className="project-details__panel"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="project-details__close"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>

        <div
          className={`project-details__media project-details__media--${project.type}`}
        >
          <div
            className="project-details__media-inner"
            style={{
              aspectRatio:
                project.type === "image"
                  ? project.aspectRatio || "4 / 5"
                  : undefined,
            }}
          >
            <PortfolioMedia project={project} />
          </div>
        </div>

        <div className="project-details__content">
          <span className="section-label">
            {project.category}
          </span>

          <h2>{project.title}</h2>

          <p className="project-details__description">
            {project.description}
          </p>

          {project.services?.length > 0 && (
            <div className="project-details__section">
              <span className="project-details__label">
                SERVICES
              </span>

              <div className="project-details__tags">
                {project.services.map((service) => (
                  <span key={service}>{service}</span>
                ))}
              </div>
            </div>
          )}

          {project.tags?.length > 0 && (
            <div className="project-details__section">
              <span className="project-details__label">
                TAGS
              </span>

              <div className="project-details__tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          )}

          {moreProjects.length > 0 && (
            <div className="project-details__more">
              <span className="project-details__label">
                MORE WORK
              </span>

              <div className="project-details__more-grid">
                {moreProjects.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className="project-details__more-card"
                    onClick={() => onOpenProject(item)}
                  >
                    <div className="project-details__more-media">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        loading="lazy"
                        draggable="false"
                      />
                    </div>

                    <div className="project-details__more-info">
                      <span>{item.category}</span>
                      <strong>{item.title}</strong>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;