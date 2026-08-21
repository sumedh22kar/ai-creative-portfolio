import { siteConfig } from "../../generated/siteConfig";

function ProjectCTA() {
  const { contact } = siteConfig;

  const whatsappLink = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`
    : null;

  return (
    <section className="project-cta" id="contact">
      <div className="project-cta__content">
        <span className="section-label">START A PROJECT</span>

        <h2>Have a creative idea?</h2>

        <p>
          Let’s create AI-powered visuals and videos for your next project.
        </p>

        <div className="project-cta__actions">
          {whatsappLink && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta__primary"
            >
              WhatsApp Us
            </a>
          )}

          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="project-cta__secondary"
            >
              Email Us
            </a>
          )}

          {!whatsappLink && !contact.email && (
            <span className="project-cta__coming-soon">
              Contact details coming soon
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectCTA;
