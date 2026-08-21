import { siteConfig } from "../../generated/siteConfig";

function Hero() {
  const heroData = siteConfig?.hero || {};

  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            {heroData.eyebrow || "MS AI DIGITAL CREATOR"}
          </p>

          <h1>
            We Create
            <span> AI-Powered </span>
            Visuals.
          </h1>

          <p className="hero__description">
            {heroData.description ||
              "AI images, AI videos and advertising creatives designed to help modern brands stand out."}
          </p>

          <div className="hero__actions">
            <a href="#portfolio" className="hero__button hero__button--primary">
              {heroData.primaryCta || "View Our Work"}
            </a>

            <a href="#contact" className="hero__button hero__button--secondary">
              {heroData.secondaryCta || "Start a Project"}
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