import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "../../generated/siteConfig";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Work", anchor: "#portfolio" },
    { label: "Services", anchor: "#services" },
    { label: "About", anchor: "#about" },
    { label: "Contact", anchor: "#contact" },
  ];

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img
            src="/MSLOGO.png"
            alt={`${siteConfig.business.name} Logo`}
            className="navbar__logo-img"
          />
          <span className="navbar__logo-text">{siteConfig.business.name}</span>
        </Link>

        <button
          type="button"
          className="navbar__menu-button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <nav
          className={
            menuOpen ? "navbar__links navbar__links--open" : "navbar__links"
          }
        >
          {navLinks.map((link) =>
            isHome ? (
              <a
                key={link.label}
                href={link.anchor}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={`/${link.anchor}`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;