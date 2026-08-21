import { useState } from "react";
import { siteConfig } from "../../generated/siteConfig";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="#top" className="navbar__logo" onClick={closeMenu}>
          <img
            src="/MSLOGO.png"
            alt={`${siteConfig.business.name} Logo`}
            className="navbar__logo-img"
          />
          <span className="navbar__logo-text">{siteConfig.business.name}</span>
        </a>

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
          <a href="#portfolio" onClick={closeMenu}>
            Work
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;