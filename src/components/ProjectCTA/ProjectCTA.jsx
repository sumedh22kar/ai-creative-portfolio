import { siteConfig } from "../../generated/siteConfig";

function ProjectCTA() {
  const { contact } = siteConfig;
  const { contact: contactSection } = siteConfig.sections;

  const whatsappLink = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`
    : null;

  return (
    <section className="project-cta" id="contact">
      <div className="project-cta__content">
        <span className="section-label">
          {contactSection.eyebrow}
        </span>

        <h2>{contactSection.title}</h2>

        <p>{contactSection.description}</p>

        <div className="project-cta__actions">
          {whatsappLink && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta__primary"
            >
              {contactSection.whatsappText}
            </a>
          )}

          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="project-cta__secondary"
            >
              {contactSection.emailText}
            </a>
          )}

          {!whatsappLink && !contact.email && (
            <span className="project-cta__coming-soon">
              {contactSection.emptyText}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectCTA;
