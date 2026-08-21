import { projects } from "../../generated/projects";

function StudioStats() {
  const publishedProjects = projects.filter(
    (project) => project.published !== false
  );

  const projectCount = publishedProjects.length;

  const categoryCount = new Set(
    publishedProjects
      .map((project) => project.category)
      .filter(Boolean)
  ).size;

  const mediaTypes = new Set(
    publishedProjects.map((project) => project.type)
  );

  const supportsImages = mediaTypes.has("image");
  const supportsVideos = mediaTypes.has("youtube");

  return (
    <section className="studio-stats">
      <div className="studio-stats__grid">
        <div className="studio-stats__item">
          <strong>{String(projectCount).padStart(2, "0")}+</strong>
          <span>PROJECTS</span>
        </div>

        <div className="studio-stats__item">
          <strong>{String(categoryCount).padStart(2, "0")}</strong>
          <span>CATEGORIES</span>
        </div>

        <div className="studio-stats__item">
          <strong>
            {supportsImages && supportsVideos
              ? "IMAGE + VIDEO"
              : supportsImages
                ? "AI IMAGE"
                : "AI VIDEO"}
          </strong>

          <span>AI CREATIVE</span>
        </div>
      </div>
    </section>
  );
}

export default StudioStats;
