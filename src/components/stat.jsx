import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Traductions
import {statsTranslations} from "./data/tran" 

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
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
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
                delay={index * 100}
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
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;

      const duration = 2000;
      const increment = number / (duration / 16);
      let current = 0;

      const timer = setTimeout(() => {
        const updateCounter = () => {
          current += increment;
          if (current < number) {
            setCount(Math.ceil(current));
            requestAnimationFrame(updateCounter);
          } else {
            setCount(number);
          }
        };
        updateCounter();
      }, delay);

      return () => clearTimeout(timer);
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
