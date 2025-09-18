import React, { useState, useEffect, useRef } from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Team1 = ({ language = 'fr' }) => {
  const [counter, setCounter] = useState(0);
  const teamRef = useRef(null);
  const counterRef = useRef(null);

  // Dictionnaire de traductions
  const translations = {
    fr: {
      title: "Notre Équipe",
      subtitle: "Les passionnés qui créent la magie chaque jour.",
      yearsExp: "ans d'expérience cumulée en café et hospitalité",
      sophie: {
        name: "Sophie – Barista en Chef",
        role: "Maître de l'art du latte, passionnée par l'arôme parfait."
      },
      leo: {
        name: "Léo – Maître Torréfacteur",
        role: "L'expert qui sélectionne et torréfie nos grains d'exception."
      },
      clara: {
        name: "Clara – Pâtissière Créative",
        role: "Ses douceurs sont conçues pour s'accorder avec nos meilleurs cafés."
      },
      marc: {
        name: "Marc – Responsable d'Accueil",
        role: "Son sourire est le premier ingrédient de votre expérience chez nous."
      }
    },
    it: {
      title: "Il Nostro Team",
      subtitle: "Gli appassionati che creano la magia ogni giorno.",
      yearsExp: "anni di esperienza cumulativa nel caffè e nell'ospitalità",
      sophie: {
        name: "Sophie – Barista Capo",
        role: "Maestra dell'arte del latte, appassionata dell'aroma perfetto."
      },
      leo: {
        name: "Léo – Maestro Torrefattore",
        role: "L'esperto che seleziona e torrefà i nostri chicchi eccezionali."
      },
      clara: {
        name: "Clara – Pasticcera Creativa",
        role: "Le sue delizie sono concepite per abbinarsi ai nostri migliori caffè."
      },
      marc: {
        name: "Marc – Responsabile dell'Accoglienza",
        role: "Il suo sorriso è il primo ingrediente della vostra esperienza da noi."
      }
    },
    ar: {
      title: "فريقنا",
      subtitle: "المتحمسون الذين يخلقون السحر كل يوم.",
      yearsExp: "سنة من الخبرة المتراكمة في القهوة والضيافة",
      sophie: {
        name: "صوفي - رئيسة الباريستا",
        role: "سيدة فن اللاتيه، شغوفة بالرائحة المثالية."
      },
      leo: {
        name: "ليو - أستاذ التحميص",
        role: "الخبير الذي يختار ويحمص حبوبنا الاستثنائية."
      },
      clara: {
        name: "كلارا - صانعة الحلويات المبدعة",
        role: "تم تصميم حلوياتها لتتناسب مع أفضل أنواع القهوة لدينا."
      },
      marc: {
        name: "مارك - مسؤول الاستقبال",
        role: "ابتسامته هي أول مكون في تجربتك معنا."
      }
    }
  };

  // Données des membres de l'équipe
  const teamMembers = [
    {
      name: translations[language].sophie.name,
      role: translations[language].sophie.role,
      image: "https://fr.web.img2.acsta.net/pictures/20/11/18/22/13/0186187.jpg",
      social: { instagram: "#", linkedin: "#" }
    },
    {
      name: translations[language].leo.name,
      role: translations[language].leo.role,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Leonardo_DiCaprio.jpeg/250px-Leonardo_DiCaprio.jpeg",
      social: { instagram: "#", linkedin: "#" }
    },
    {
      name: translations[language].clara.name,
      role: translations[language].clara.role,
      image: "https://media.vanityfair.fr/photos/60d37888cbac52018956d79b/1:1/w_474,h_474,c_limit/clara_luciani_cover_vf_1758.jpeg",
      social: { instagram: "#", linkedin: "#" }
    },
    {
      name: translations[language].marc.name,
      role: translations[language].marc.role,
      image: "https://wdocs-pub.chd.lu/photos/958.jpg",
      social: { instagram: "#", linkedin: "#" }
    }
  ];

  // Animation du compteur
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animer le compteur de 0 à 25
          let current = 0;
          const target = 25;
          const duration = 2000; // 2 secondes
          const steps = 50;
          const increment = target / steps;
          const stepTime = duration / steps;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              clearInterval(timer);
              setCounter(target);
            } else {
              setCounter(Math.ceil(current));
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  // Appliquer la direction RTL pour l'arabe
  const isRTL = language === 'ar';

  return (
    <section 
      id="team" 
      className="py-5" 
      ref={teamRef}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container">
        <h2 className="text-center mb-2 fw-bold" style={{ color: '#6F4E37', fontSize: '2.5rem' }}>
          {translations[language].title}
        </h2>
        <p className="text-center mb-5 mx-auto  "  
  style={{ maxWidth: '600px', color: 'rgb(185, 146, 91)' }}
>
        
          {translations[language].subtitle}
        </p>
        
        <div className="container py-5">
          <div className="row flex-nowrap flex-md-wrap overflow-auto overflow-md-visible gx-3 gx-md-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-10 col-sm-6 col-md-6 col-lg-3 flex-shrink-0 mb-4">
                <div 
                  className="card h-100 border-0 shadow-sm text-center p-3"
                  style={{ borderRadius: '15px', transition: 'transform 0.3s, box-shadow 0.3s' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                  }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="img-fluid rounded-circle mx-auto mb-3"
                    style={{ 
                      width: '130px', 
                      height: '130px', 
                      objectFit: 'cover',
                      border: '5px solid #F5EFE6',
                      boxShadow: '0 0 10px rgba(0,0,0,0.08)'
                    }}
                  />
                  <h3 className="h5 fw-semibold text-brown">{member.name}</h3>
                  <p className="text-muted mb-3" style={{ minHeight: '50px' }}>{member.role}</p>
                  <div className="d-flex justify-content-center">
                    <a 
                      href={member.social.instagram} 
                      className="mx-2 text-decoration-none text-tan"
                      onMouseEnter={(e) => e.currentTarget.style.color = '#6F4E37'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#D2B48C'}
                    >
                      <FaInstagram size="1.3rem" />
                    </a>
                    <a 
                      href={member.social.linkedin} 
                      className="mx-2 text-decoration-none text-tan"
                      onMouseEnter={(e) => e.currentTarget.style.color = '#6F4E37'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#D2B48C'}
                    >
                      <FaLinkedinIn size="1.3rem" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div 
          ref={counterRef}
          className="text-center mt-5 p-4 mx-auto"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '12px',
            border: '1px solid #eee',
            maxWidth: 'max-content'
          }}
        >
          <p className="mb-0 fw-bold" style={{ color: '#6F4E37', fontSize: '1.2rem' }}>
            +<span style={{ fontWeight: '700', fontSize: '1.3rem' }}>{counter}</span> {translations[language].yearsExp}
          </p>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .row {
              scroll-snap-type: x mandatory;
              -webkit-overflow-scrolling: touch;
              padding-bottom: 15px;
            }
            .row::-webkit-scrollbar {
              display: none;
            }
            .col-10 {
              scroll-snap-align: center;
              flex: 0 0 80%;
              max-width: 300px;
            }
          }

          .text-brown { color: #6F4E37; }
          .text-tan { color: #D2B48C; transition: color 0.3s ease; }
        `}
      </style>
    </section>
  );
};

export default Team1;