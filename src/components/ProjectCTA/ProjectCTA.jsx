function ProjectCTA() {
  return (
    <section className="project-cta">
      <div className="project-cta__inner">
        <span className="section-label">
          HAVE A PROJECT IN MIND?
        </span>

        <h2>
          Let's create something
          <span> impossible to ignore.</span>
        </h2>

        <p>
          AI-powered images, videos and advertising creatives
          built for brands, products and social media.
        </p>

        <div className="project-cta__actions">
          <a
            href="#contact"
            className="project-cta__primary"
          >
            START A PROJECT →
          </a>

          <a
            href="#portfolio"
            className="project-cta__secondary"
          >
            VIEW OUR WORK
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectCTA;
