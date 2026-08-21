import { siteConfig } from "../../generated/siteConfig";
import { projects } from "../../generated/projects";

function Hero() {
  const { hero } = siteConfig;
  const featuredProject =
    projects.find((project) => project.featured && project.published !== false) ||
    projects.find((project) => project.published !== false);

  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            {hero.eyebrow}
          </p>

          <h1>{hero.title}</h1>

          <p className="hero__description">
            {hero.description}
          </p>

          <div className="hero__actions">
            <a href="#portfolio" className="hero__button hero__button--primary">
              {hero.primaryCta}
            </a>

            <a href="#contact" className="hero__button hero__button--secondary">
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-label="Featured AI creative preview">
          {featuredProject && (
            <>
              <div className="hero__visual-frame">
                <img
                  src={featuredProject.thumbnail || featuredProject.mediaUrl}
                  alt={featuredProject.title}
                  className="hero__visual-media"
                  loading="eager"
                />

                <div className="hero__visual-shade" />

                <div className="hero__visual-badge">
                  <span>{featuredProject.type === "youtube" ? "VIDEO" : "IMAGE"}</span>
                  <strong>{featuredProject.title}</strong>
                </div>
              </div>

              <div className="hero__visual-panel">
                <span>AI CREATIVE</span>
                <strong>Image + Video Production</strong>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
