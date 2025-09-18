import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { statsTranslations } from "./data/tran";

const StatisticsSection = ({ language = "fr" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const statsData = [
    { number: 45 },
    { number: 8500 },
    { number: 8 },
    { number: 500 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <section ref={statsRef} id="stats" className="stats-section py-5">
      <div className="container">
        <div className="row text-center">
          {statsData.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-6 mb-4">
              <StatItem
                number={stat.number}
                label={statsTranslations[language][index].label}
                isVisible={isVisible}
                delay={index * 150}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ number, label, isVisible, delay }) => {
  const [count, setCount] = useState(0);
  const animationRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      const duration = 2000;
      const start = performance.now();

      const step = (time) => {
        const progress = Math.min((time - start) / duration, 1);
        setCount(Math.ceil(progress * number));
        if (progress < 1) animationRef.current = requestAnimationFrame(step);
      };

      animationRef.current = requestAnimationFrame(step);
    };

    if (isVisible) {
      setCount(0); // reset
      const timeout = setTimeout(animate, delay);
      return () => clearTimeout(timeout);
    } else {
      setCount(0); // reset quand invisible
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    }
  }, [isVisible, number, delay]);

  return (
    <div
      className={`stat-item ${isVisible ? "is-visible" : ""}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      }}
    >
      <h2 className="stat-number fw-bold mb-2">{count.toLocaleString()}</h2>
      <p className="stat-label">{label}</p>
    </div>
  );
};

export default StatisticsSection;
