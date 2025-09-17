import { Container, Row, Col, Button } from "react-bootstrap";
import i from "../assets/1.png";
import StatisticsSection from "./stat";
import { heroTranslations } from "./data/tran";
import loadingAnimation from "../../public/Coffee (1).json"; 
import Lottie from "lottie-react";

const Hero = ({ language }) => {
  const t = heroTranslations[language];
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
            <h2 className="hero-title">{t.title}</h2>{" "}
            <p className="hero-text">{t.text}</p>{" "}
            <div className="hero-buttons d-flex flex-wrap justify-content-center">
              {" "}
              <Button href="#menu" className="btn-primary me-3 mb-2">
                {" "}
                {t.menuBtn}{" "}
              </Button>{" "}
              <Button
                href="#contact"
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
    style={{ width: "350px", height: "350px", margin: "0 auto" }}
  />
</Col>
{" "}
        </Row>{" "}
        {/* Statistiques */} <StatisticsSection language={language} />{" "}
      </Container>{" "}
    </section>
  );
};
export default Hero;
