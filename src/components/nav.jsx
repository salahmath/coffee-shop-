import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import { FaInstagram, FaFacebook, FaTiktok,FaBars } from "react-icons/fa";
import { navTranslations } from "./data/tran.js"; // Corrigez le nom du fichier
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

// Traduction du nom du café
const cafeNameTranslations = {
  fr: "Bella Vita",
  ar: "بيلا فيتا",
  it: "Bella Vita",
};

// Composant pour un item de navigation
function NavItem({ label, targetId, onClose }) {
  return (
    <Link
      to={targetId}
      smooth={true}
      duration={500}
      spy={true}
      offset={-70}
      className="nav-link mx-2"
      style={{ cursor: "pointer" }}
      onClick={onClose} // Ferme le menu après clic
    >
      {label}
    </Link>
  );
}

// Partie droite de la navbar (liens + réseaux sociaux + dropdown langues)
function RightNavList({ language, onLanguageChange, onClose }) {
  const t = navTranslations[language];

  return (
    <>
      <NavItem label={t.home} targetId="home" onClose={onClose} />
      <NavItem label={t.menu} targetId="menu" onClose={onClose} />
      <NavItem label={t.contact} targetId="contact" onClose={onClose} />
      <NavItem label={t.team} targetId="team" onClose={onClose} />

      {/* Icônes réseaux sociaux */}
      <div className="d-flex align-items-center ms-3 social-icons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook mx-2"
          onClick={onClose}
        >
          <FaFacebook size={28} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram mx-2"
          onClick={onClose}
        >
          <FaInstagram size={28} />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="tiktok mx-2"
          onClick={onClose}
        >
          <FaTiktok size={28} />
        </a>
      </div>

      <MDBDropdown>
  <MDBDropdownToggle tag="a" className="btn btn-link text-dark" role="button" >
    {language === "fr" && <i className="flag flag-france m-0"></i>}
    {language === "ar" && <i className="flag flag-tunisia m-0"></i>}
    {language === "it" && <i className="flag flag-italy m-0"></i>}
  </MDBDropdownToggle>

  <MDBDropdownMenu style={{ minWidth: '150px', fontSize: '1.1rem' }}>
    <MDBDropdownItem link onClick={() => { onLanguageChange("fr"); onClose(); }}>
      <i className="flag flag-france"></i> Français
    </MDBDropdownItem>
    <MDBDropdownItem link onClick={() => { onLanguageChange("ar"); onClose(); }}>
      <i className="flag flag-tunisia"></i> العربية
    </MDBDropdownItem>
    <MDBDropdownItem link onClick={() => { onLanguageChange("it"); onClose(); }}>
      <i className="flag flag-italy"></i> Italiano
    </MDBDropdownItem>
  </MDBDropdownMenu>
</MDBDropdown>

    </>
  );
}

// Composant principal Navbar
export function Navbars({ language, onLanguageChange }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className="py-3 navbar-glass"
    >
      <Container>
        {/* Nom du café */}
        <Navbar.Brand
          className="fw-bold me-4"
          style={{
            fontSize: "1.8rem",
            fontFamily: "'Playfair Display', serif",
            color: "#6F4E37",
            fontWeight: "700",
          }}
        >
          {cafeNameTranslations[language]}
        </Navbar.Brand>

        <div 
          className="navbar-toggler custom-toggler" 
          onClick={() => setExpanded(!expanded)}
          style={{
            border: "none",
            padding: "0.25rem 0.5rem",
            fontSize: "1.5rem",
            cursor: "pointer"
          }}
        >
          <FaBars />
        </div>

        {/* Contenu du menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <RightNavList
              language={language}
              onLanguageChange={onLanguageChange}
              onClose={() => setExpanded(false)} // ferme le menu automatiquement
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
