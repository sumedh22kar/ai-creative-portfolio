import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "../../generated/siteConfig";

function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const footerLinks = [
    { label: "Work", anchor: "#portfolio" },
    { label: "Services", anchor: "#services" },
    { label: "About", anchor: "#about" },
    { label: "Contact", anchor: "#contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <Link to="/" className="footer__logo">
            <img
              src="/MSLOGO.png"
              alt={`${siteConfig.business.name} Logo`}
              className="footer__logo-img"
            />
            <span>{siteConfig.business.name}</span>
          </Link>

          <p>{siteConfig.business.description}</p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) =>
            isHome ? (
              <a key={link.label} href={link.anchor}>
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={`/${link.anchor}`}>
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>

      <div className="footer__bottom">
        <span>
          © {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.
        </span>

        <span>AI Images • AI Videos • Creative Advertising</span>
      </div>
    </footer>
  );
}

export default Footer;