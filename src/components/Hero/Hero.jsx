function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            AI CREATIVE STUDIO
          </p>

          <h1>
            We Create
            <span> AI-Powered </span>
            Visuals.
          </h1>

          <p className="hero__description">
            AI images, AI videos and advertising creatives designed
            to help modern brands stand out.
          </p>

          <div className="hero__actions">
            <a href="#portfolio" className="hero__button hero__button--primary">
              View Our Work
            </a>

            <a href="#contact" className="hero__button hero__button--secondary">
              Start a Project
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__visual-card hero__visual-card--one" />
          <div className="hero__visual-card hero__visual-card--two" />
          <div className="hero__visual-card hero__visual-card--three" />
        </div>
      </div>
    </section>
  );
}

export default Hero;