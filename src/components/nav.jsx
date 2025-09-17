import React, { useState } from "react";
import { Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { navTranslations } from "./data/tran.js"; // Corrigez le nom du fichier

const cafeNameTranslations = {
  fr: "Bella Vita",
  ar: "بيلا فيتا",
  it: "Bella Vita"
};

function NavItem({ label, targetId }) {
  return (
    <Link
      to={targetId}
      smooth={true}
      duration={500}
      spy={true}
      offset={-70}
      className="nav-link mx-2"
      style={{ cursor: "pointer" }}
    >
      {label}
    </Link>
  );
}

function RightNavList({ language, onLanguageChange }) {
  const t = navTranslations[language];

  return (
    <>
      <NavItem label={t.home} targetId="home" />
      <NavItem label={t.menu} targetId="menu" />
      <NavItem label={t.contact} targetId="contact" />
      <NavItem label={t.team} targetId="team" />

      {/* Social Media Icons */}
      <div className="d-flex align-items-center ms-3 social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook mx-2">
          <FaFacebook size={28} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram mx-2">
          <FaInstagram size={28} />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="tiktok mx-2">
          <FaTiktok size={28} />
        </a>
      </div>

      <NavDropdown title={language.toUpperCase()} id="language-dropdown">
        <NavDropdown.Item onClick={() => onLanguageChange("fr")}>
          Français
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => onLanguageChange("ar")}>
          العربية
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => onLanguageChange("it")}>
          Italiano
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
}

export function Navbars({ language, onLanguageChange }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" fixed="top" expanded={expanded} className="py-3 navbar-glass">
      <Container>
        <Navbar.Brand
          className="fw-bold me-4"
          style={{
            fontSize: "1.8rem",
            fontFamily: "'Playfair Display', serif",
            color: "#6F4E37",
            fontWeight: "700"
          }}
        >
          {cafeNameTranslations[language]}
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <RightNavList language={language} onLanguageChange={onLanguageChange} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;