import PortfolioMedia from "../PortfolioMedia/PortfolioMedia";

function PortfolioCard({ project }) {
  return (
    <article className="portfolio-card">
      <div className="portfolio-card__media">
        <PortfolioMedia project={project} />
      </div>

      <div className="portfolio-card__content">
        <span className="portfolio-card__category">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>
      </div>
    </article>
  );
}

export default PortfolioCard;