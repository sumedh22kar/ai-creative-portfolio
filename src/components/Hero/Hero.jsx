import { siteConfig } from "../../generated/siteConfig";

function Hero() {
  const { hero } = siteConfig;

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