function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <a href="#top" className="footer__logo">
            AI<span>CREATIVE</span>
          </a>

          <p>
            AI-powered images, videos and creative advertising
            for modern brands.
          </p>
        </div>

        <div className="footer__links">
          <a href="#portfolio">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} AI Creative Studio</span>

        <span>AI Images • AI Videos • Creative Advertising</span>
      </div>
    </footer>
  );
}

export default Footer;