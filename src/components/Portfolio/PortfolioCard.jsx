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
      <div className="portfolio-card__media">
        <PortfolioMedia project={project} />
      </div>

      <div className="portfolio-card__content">
        <span className="portfolio-card__category">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <span className="portfolio-card__view">
          VIEW PROJECT →
        </span>
      </div>
    </article>
  );
}

export default PortfolioCard;