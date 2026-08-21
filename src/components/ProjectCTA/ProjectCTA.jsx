import { siteConfig } from "../../generated/siteConfig";

function ProjectCTA() {
  const contact = siteConfig?.contact || {};
  const rawWhatsapp = contact.whatsapp || "";
  const digitsOnly = rawWhatsapp.replace(/\D/g, "");
  const whatsappNumber =
    digitsOnly.length === 10 ? `91${digitsOnly}` : digitsOnly;
  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber}`
    : null;

  return (
    <section className="project-cta">
      <div className="project-cta__inner">
        <span className="section-label">START A PROJECT</span>

        <h2>
          Have a creative idea?
          <span> Let's create it.</span>
        </h2>

        <p>
          Let’s create AI-powered visuals and videos for your next project with MS AI Digital Creator.
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
            <a href="#contact" className="project-cta__primary">
              START A PROJECT →
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectCTA;
