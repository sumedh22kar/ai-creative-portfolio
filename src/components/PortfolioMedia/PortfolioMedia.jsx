import { useState } from "react";

function getYoutubeEmbedUrl(mediaUrl, autoplay) {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });

  if (autoplay) {
    params.set("autoplay", "1");
    params.set("mute", "1");
  }

  return `${mediaUrl}?${params.toString()}`;
}

function PortfolioMedia({ project, autoplay = false, interactive = true }) {
  const [videoStarted, setVideoStarted] = useState(autoplay);

  if (project.type === "image") {
    if (!project.mediaUrl) {
      return (
        <div className="portfolio-media portfolio-media--placeholder">
          IMAGE
        </div>
      );
    }

    return (
      <div
        className="portfolio-image-wrapper"
        style={{
          aspectRatio: project.aspectRatio || "4 / 5",
        }}
        onContextMenu={(event) => event.preventDefault()}
      >
        <img
          className="portfolio-media portfolio-media--image"
          src={project.mediaUrl}
          alt={project.title}
          loading="lazy"
          draggable="false"
        />

        <div className="portfolio-media__watermark">
          MS AI DIGITAL CREATOR
        </div>
      </div>
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
      const PreviewElement = interactive ? "button" : "div";

      return (
        <PreviewElement
          {...(interactive ? { type: "button" } : {})}
          className="portfolio-video-preview"
          style={{
            "--video-thumbnail": `url("${project.thumbnail}")`,
            aspectRatio: project.aspectRatio || "16 / 10",
          }}
          onContextMenu={(event) => event.preventDefault()}
          onClick={
            interactive
              ? (event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setVideoStarted(true);
                }
              : undefined
          }
          aria-label={interactive ? `Play ${project.title}` : undefined}
        >
          <div className="portfolio-video-preview__overlay">
            <span className="portfolio-video-preview__play">▶</span>
          </div>

          <div className="portfolio-video-preview__label">
            WATCH VIDEO
          </div>
        </PreviewElement>
      );
    }

    return (
      <iframe
        className="portfolio-media portfolio-media--youtube"
        style={{ aspectRatio: project.aspectRatio || "16 / 10" }}
        src={getYoutubeEmbedUrl(project.mediaUrl, videoStarted)}
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
