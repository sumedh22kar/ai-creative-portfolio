function PortfolioCard({ project }) {
  return (
    <article className="portfolio-card">
      <div className="portfolio-card__media">
        {project.type === "video" ? (
          <div className="portfolio-card__video-placeholder">
            <span>VIDEO</span>
          </div>
        ) : (
          <div className="portfolio-card__image-placeholder">
            <span>IMAGE</span>
          </div>
        )}
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
