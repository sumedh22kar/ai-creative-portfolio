import PortfolioMedia from "../PortfolioMedia/PortfolioMedia";

function PortfolioCard({ project, onOpen }) {
  return (
    <article
      className="portfolio-card portfolio-card--clickable"
      onClick={() => onOpen(project)}
      tabIndex={0}
      role="button"
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(project);
        }
      }}
    >
      <div
        className="portfolio-card__media"
        style={{
          aspectRatio: project.aspectRatio || "16 / 9",
        }}
      >
        <PortfolioMedia project={project} />

        <div className="portfolio-card__overlay">
          <span className="portfolio-card__open">
            VIEW PROJECT ↗
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
    </article>
  );
}

export default PortfolioCard;