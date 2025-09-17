import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

// Traductions pour le footer
const footerTranslations = {
  fr: {
    ourCafe: "Notre Café",
    cafeDescription: "L'art du café, la chaleur humaine. Découvrez notre univers où chaque tasse raconte une histoire.",
    openingHours: "Heures d'ouverture",
    weekdays: "Lundi-Vendredi: 7h-20h",
    weekends: "Samedi-Dimanche: 8h-22h",
    contact: "Contact",
    address: "123 Rue du Café",
    city: "Paris, 75000",
    phone: "01 23 45 67 89",
    email: "contact@notrecafe.fr",
    followUs: "Suivez-nous",
    copyright: "© 2023 Notre Café. Tous droits réservés."
  },
  ar: {
    ourCafe: "مقهانا",
    cafeDescription: "فن القهوة، الدفء الإنساني. اكتشف عالمنا حيث كل فنجان يحكي قصة.",
    openingHours: "ساعات العمل",
    weekdays: "الإثنين-الجمعة: 7 صباحاً-8 مساءً",
    weekends: "السبت-الأحد: 8 صباحاً-10 مساءً",
    contact: "اتصل بنا",
    address: "123 شارع القهوة",
    city: "باريس، 75000",
    phone: "01 23 45 67 89",
    email: "contact@notrecafe.fr",
    followUs: "تابعنا",
    copyright: "© 2023 مقهانا. جميع الحقوق محفوظة."
  },
  it: {
    ourCafe: "Il Nostro Caffè",
    cafeDescription: "L'arte del caffè, il calore umano. Scopri il nostro universo dove ogni tazza racconta una storia.",
    openingHours: "Orari di Apertura",
    weekdays: "Lunedì-Venerdì: 7:00-20:00",
    weekends: "Sabato-Domenica: 8:00-22:00",
    contact: "Contatti",
    address: "123 Via del Caffè",
    city: "Parigi, 75000",
    phone: "01 23 45 67 89",
    email: "contact@notrecafe.fr",
    followUs: "Seguici",
    copyright: "© 2023 Il Nostro Caffè. Tutti i diritti riservati."
  }
};

const Footer = ({ language = "fr" }) => {
  const t = footerTranslations[language];

  return (
    <footer className="cafe-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{t.ourCafe}</h3>
          <p>{t.cafeDescription}</p>
        </div>
        
        <div className="footer-section">
          <h4>{t.openingHours}</h4>
          <p>{t.weekdays}</p>
          <p>{t.weekends}</p>
        </div>
        
        <div className="footer-section">
          <h4>{t.contact}</h4>
          <p>{t.address}</p>
          <p>{t.city}</p>
          <p>{t.phone}</p>
          <p>{t.email}</p>
        </div>
        
        <div className="footer-section">
          <h4>{t.followUs}</h4>
          <div className="social-icons1">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>{t.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;