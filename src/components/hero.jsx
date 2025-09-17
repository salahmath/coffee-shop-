import { useState, useEffect } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import i from "../assets/1.png";
import StatisticsSection from "./stat";
import { heroTranslations } from "./data/tran";
import loadingAnimation from "../../public/Coffee (1).json";
import Lottie from "lottie-react";
import { FaBars } from "react-icons/fa";

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
            <h2 className="hero-title fs-1 fs-md-2 fs-lg-1 fw-bold mb-3 text-brown">
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
          {/* Image */}{" "}
          <Col lg={6} md={10} className="hero-right text-center">
            <Lottie
              animationData={loadingAnimation}
              loop={true}
              className="hero-img"
              style={{
                width: getLottieSize(windowWidth),
                height: getLottieSize(windowWidth),
                margin: "0 auto",
                transition: "all 0.3s ease",
              }}
            />
          </Col>
        </Row>{" "}
        {/* Statistiques */} <StatisticsSection language={language} />{" "}
      </Container>{" "}
    </section>
  );
};
export default Hero;
