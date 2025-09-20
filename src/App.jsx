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
import loadingAnimation from "../public/src/Coffee.json";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [language, setLanguage] = useState("fr");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // 👉 Initialisation AOS ici
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 100,
      easing: "ease-in-out"
    });
  }, []);
  

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor:"white"
        }}
      >
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    );
  }

  return (
    <>
      <Navbars language={language} onLanguageChange={setLanguage} />

      <div id="home">
        <Hero language={language} />
      </div>

      <div id="menu" className="py-5" data-aos="fade-up">
        <Menues language={language} />
      </div>

      <div id="contacts" className="py-5" data-aos="fade-up">
        <ContactPage2 language={language} />
      </div>

      <div id="team" className="py-5" data-aos="fade-right">
        <Team1 language={language} />
      </div>

      <div>
        <Footer language={language} />
      </div>
    </>
  );
}

export default App;
