import { siteConfig } from "../../generated/siteConfig";

function Footer() {
  const businessName = siteConfig?.business?.name || "MS AI Digital Creator";

  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <a href="#top" className="footer__logo">
            <img
              src="/MSLOGO.png"
              alt={`${businessName} Logo`}
              className="footer__logo-img"
            />
            <span>{businessName}</span>
          </a>

          <p>
            {siteConfig?.business?.description ||
              "AI-powered images, videos and creative advertising for modern brands."}
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
        <span>© {new Date().getFullYear()} {businessName}</span>

        <span>AI Images • AI Videos • Creative Advertising</span>
      </div>
    </footer>
  );
}

export default Footer;