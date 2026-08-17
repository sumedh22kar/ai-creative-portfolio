function Contact() {
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
          <a href="mailto:your@email.com" className="contact__button">
            Email Us
          </a>

          <a
            href="https://wa.me/YOUR_NUMBER"
            target="_blank"
            rel="noreferrer"
            className="contact__button contact__button--outline"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;