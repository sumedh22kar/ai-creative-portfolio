import { Link } from "react-router-dom";
import PortfolioMedia from "../PortfolioMedia/PortfolioMedia";

function PortfolioCard({ project, onOpen }) {
  const cardMediaRatio =
    project.type === "youtube"
      ? "4 / 5"
      : project.aspectRatio || "4 / 5";

  const cardContent = (
    <>
      <div
        className="portfolio-card__media"
        style={{
          "--card-media-ratio": cardMediaRatio,
        }}
      >
        <PortfolioMedia project={project} interactive={false} />

        <div className="portfolio-card__overlay">
          <span className="portfolio-card__open">
            VIEW PROJECT
          </span>
        </div>
      </div>

      <div className="portfolio-card__content">
        <div className="portfolio-card__meta">
          <span className="portfolio-card__category">
            {project.category}
          </span>

          {project.year && (
            <span className="portfolio-card__year">
              {project.year}
            </span>
          )}
        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        {project.tags?.length > 0 && (
          <div className="portfolio-card__tags">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </>
  );

  if (onOpen) {
    const openProject = () => {
      onOpen(project);
    };

    return (
      <article
        className="portfolio-card portfolio-card--clickable"
        role="button"
        tabIndex={0}
        onClick={openProject}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openProject();
          }
        }}
        aria-label={`Open ${project.title}`}
      >
        {cardContent}
      </article>
    );
  }

  return (
    <Link
      to={`/project/${project.slug}`}
      className="portfolio-card__link"
    >
      <article className="portfolio-card">
        {cardContent}
      </article>
    </Link>
  );
}

export default PortfolioCard;
