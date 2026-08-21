import { siteConfig } from "../../generated/siteConfig";

function Contact() {
  const contact = siteConfig?.contact || {};
  const rawWhatsapp = contact.whatsapp || "755 843 4056";
  const digitsOnly = rawWhatsapp.replace(/\D/g, "");
  const whatsappNumber = digitsOnly.length === 10 ? `91${digitsOnly}` : digitsOnly;

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <span className="section-label">START A PROJECT</span>

        <h2>
          Have an idea?
          <span>Let's create it.</span>
        </h2>

        <p>
          Tell us what you want to create and let's discuss how we can
          turn your idea into an AI-powered creative.
        </p>

        <div className="contact__actions">
          {contact.email ? (
            <a href={`mailto:${contact.email}`} className="contact__button">
              Email Us
            </a>
          ) : null}

          {whatsappNumber ? (
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="contact__button contact__button--outline"
            >
              WhatsApp Us ({rawWhatsapp})
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Contact;