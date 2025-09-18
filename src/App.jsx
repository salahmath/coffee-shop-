import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Lottie from "lottie-react";

// Composants
import Navbars from "./components/nav";
import Hero from "./components/hero";
import Menues from "./components/Menu2";
import ContactPage2 from "./components/contacts";
import Team1 from "./components/team";
import Footer from "./components/footer";

// Assets
import loadingAnimation from "../public/Coffee.json";

// Wrapper pour déclencher l'animation à chaque intersection
const AnimatedSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const el = document.getElementById(children.props.id || "section");
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [children.props.id]);

  return React.cloneElement(children, { isVisible });
};

function App() {
  const [language, setLanguage] = useState("fr");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    );
  }

  return (
    <>
      <Navbars language={language} onLanguageChange={setLanguage} />

      <AnimatedSection>
        <div id="home">
          <Hero language={language} />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div id="menu" className="py-5">
          <Menues language={language} />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div id="contacts" className="py-5">
          <ContactPage2 language={language} />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div id="team" className="py-5">
          <Team1 language={language} />
        </div>
      </AnimatedSection>

      <div >
        <Footer language={language} />
      </div>
    </>
  );
}

export default App;
