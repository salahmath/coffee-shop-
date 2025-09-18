import { useState, useEffect } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import i from "../assets/coff.png";
import StatisticsSection from "./stat";
import { heroTranslations } from "./data/tran";

const Hero = ({ language }) => {
  const t = heroTranslations[language];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const getLottieSize = (width) => {
    if (width <= 288) return "120px";
    if (width <= 324) return "140px";
    if (width <= 420) return "180px";
    if (width <= 550) return "250px";
    return "350px";
  };

  return (
    <section
      id="hero"
      className="hero-section d-flex align-items-center justify-content-center text-center"
    >
      {" "}
      <Container>
        {" "}
        <Row className="align-items-center justify-content-center">
          {" "}
          {/* Texte */}{" "}
          <Col lg={6} md={10} className="hero-left mb-4 mb-lg-0">
            {" "}
            <h2
              className="hero-title fs-1 fs-md-2 fs-lg-1 fw-bold mb-3 "
              style={{ color: "a0522d" }}
            >
              {t.title}
            </h2>{" "}
            <p className="hero-text">{t.text}</p>{" "}
            <div className="hero-buttons d-flex flex-wrap justify-content-center">
              {" "}
              <Button href="#menu" className="btn-primary me-3 mb-2">
                {" "}
                {t.menuBtn}{" "}
              </Button>{" "}
              <Button
                href="#contacts"
                variant="outline-primary"
                className="mb-2"
              >
                {" "}
                {t.contactBtn}{" "}
              </Button>{" "}
            </div>{" "}
          </Col>{" "}
          {/* Image */}
          <Col
            xs={12}
            md={6}
            className="hero-right d-flex justify-content-center align-items-center"
          >
            <img
              className="img-fluid rounded shadow-sm"
              src={i}
              alt="bgg"
              style={{
                maxWidth: "80%",
                height: "auto",
              }}
            />
          </Col>
        </Row>{" "}
        <StatisticsSection language={language} />{" "}
      </Container>{" "}
    </section>
  );
};
export default Hero;
