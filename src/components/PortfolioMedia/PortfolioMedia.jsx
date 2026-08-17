import { useState } from "react";

function PortfolioMedia({ project }) {
  const [videoStarted, setVideoStarted] = useState(false);

  if (project.type === "image") {
    if (!project.mediaUrl) {
      return (
        <div className="portfolio-media portfolio-media--placeholder">
          IMAGE
        </div>
      );
    }

    return (
      <img
        className="portfolio-media"
        style={{ aspectRatio: project.aspectRatio || "16 / 10" }}
        src={project.mediaUrl}
        alt={project.title}
        loading="lazy"
      />
    );
  }

  if (project.type === "youtube") {
    if (!project.mediaUrl) {
      return (
        <div className="portfolio-media portfolio-media--placeholder">
          VIDEO
        </div>
      );
    }

    if (!videoStarted) {
      return (
        <button
  type="button"
  className="portfolio-video-preview"
  style={{
    "--video-thumbnail": `url("${project.thumbnail}")`,
    aspectRatio: project.aspectRatio || "16 / 10",
  }}
  onClick={() => setVideoStarted(true)}
  aria-label={`Play ${project.title}`}
>
  <div className="portfolio-video-preview__overlay">
    <span className="portfolio-video-preview__play">▶</span>
  </div>

  <div className="portfolio-video-preview__label">
    WATCH VIDEO
  </div>
</button>
      );
    }

    return (
      <iframe
        className="portfolio-media portfolio-media--youtube"
        style={{ aspectRatio: project.aspectRatio || "16 / 10" }}
        src={`${project.mediaUrl}?autoplay=1`}
        title={project.title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <div className="portfolio-media portfolio-media--placeholder">
      MEDIA
    </div>
  );
}

export default PortfolioMedia;