import { Link, useParams } from "react-router-dom";
import { projects } from "../../generated/projects";
import PortfolioMedia from "../../components/PortfolioMedia/PortfolioMedia";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug && item.published !== false
  );

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="project-page project-page--not-found">
          <div className="project-page__container">
            <span className="section-label">404</span>
            <h1>Project Not Found</h1>
            <p>
              The project you are looking for does not exist or has been
              removed.
            </p>
            <div className="project-page__cta">
              <Link to="/">← Back to Home</Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="project-page">
        <div className="project-page__top">
          <Link to="/" className="project-page__back">
            ← Back to Portfolio
          </Link>

          <span className="section-label">
            {project.category}
          </span>
        </div>

        <header className="project-page__header">
          <h1>{project.title}</h1>

          <p>{project.description}</p>
        </header>

        <section
          className={`project-page__media project-page__media--${project.type}`}
        >
          <div
            className="project-page__media-inner"
            style={{
              aspectRatio:
                project.type === "image"
                  ? project.aspectRatio || "4 / 5"
                  : undefined,
            }}
          >
            <PortfolioMedia project={project} />
          </div>
        </section>

        <section className="project-page__details">
          <div>
            <span className="project-page__label">
              SERVICES
            </span>

            <div className="project-page__tags">
              {project.services?.map((service) => (
                <span key={service}>
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="project-page__label">
              TAGS
            </span>

            <div className="project-page__tags">
              {project.tags?.map((tag) => (
                <span key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="project-page__label">
              YEAR
            </span>

            <p>{project.year}</p>
          </div>
        </section>

        <div className="project-page__cta">
          <Link to="/#portfolio">
            View more work →
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ProjectPage;
