import { useState, useEffect } from "react";
import Navbars from "./components/nav";
import Hero from "./components/hero";
import Menues from "./components/Menu2";
import Contact from "./components/contact";
import TeamSection from "./components/travailleur";
import Footer from "./components/footer";
import bgImage from "./assets/ft.jpg";
import Lottie from "lottie-react";

import loadingAnimation from "../public/Coffee.json"; 

function App() {
  const [language, setLanguage] = useState("fr"); // langue globale
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Fin du chargement après 2 secondes
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
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
      ) : (
        <>
          <Navbars language={language} onLanguageChange={setLanguage} />

          <div
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              minHeight: "100vh",
              width: "100%",
            }}
          >
            <div id="home"  className="home-section1">
              <Hero language={language} />
            </div>

            <div id="menu" style={{ paddingTop: "100px" }}>
              <Menues language={language} />
            </div>

            <div id="contacts" style={{ paddingTop: "10px" }}>
              <Contact language={language} />
            </div>

            <div id="team" style={{ paddingTop: "10px" }}>
              <TeamSection language={language} />
            </div>

            <div style={{ paddingTop: "70px" }}>
              <Footer language={language} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
