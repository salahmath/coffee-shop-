import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import i1 from "../assets/cc.jpg";
import i11 from "../assets/211.jpg";
import i2 from "../assets/map.jpg";

// Traductions
const contactTranslations = {
  fr: [
    { id: 'phone', title: 'Appelez-nous', bubbleTitle: 'Téléphone', content: '+33 1 23 45 67 89' },
    { id: 'email', title: 'Écrivez-nous', bubbleTitle: 'Email', content: <a href="mailto:contact@moncafeparfait.com" className="text-decoration-none text-reset fw-bold">contact@moncafeparfait.com</a> },
    { 
      id: 'map', 
      title: 'Trouvez-nous', 
      bubbleTitle: 'Adresse', 
      content: (
        <>
          <p>123 Rue du Café, 75001 Paris</p>
          <div className="mt-2 border border-secondary rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1783060155077!2d-0.1277583843519888!3d51.50735097963567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c7c7f1a39f%3A0x6336330b6f932e67!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1678901234567!5m2!1sen!2suk"
              width="100%"
              height="150"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte de localisation"
            ></iframe>
          </div>
        </>
      ) 
    },
  ],
  ar: [
    { id: 'phone', title: 'اتصل بنا', bubbleTitle: 'هاتف', content: '+33 1 23 45 67 89' },
    { id: 'email', title: 'راسلنا', bubbleTitle: 'البريد الإلكتروني', content: <a href="mailto:contact@moncafeparfait.com" className="text-decoration-none text-reset fw-bold">contact@moncafeparfait.com</a> },
    { 
      id: 'map', 
      title: 'اعثر علينا', 
      bubbleTitle: 'العنوان', 
      content: (
        <>
          <p>123 شارع القهوة، 75001 باريس</p>
          <div className="mt-2 border border-secondary rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1783060155077!2d-0.1277583843519888!3d51.50735097963567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c7c7f1a39f%3A0x6336330b6f932e67!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1678901234567!5m2!1sen!2suk"
              width="100%"
              height="150"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="خريطة الموقع"
            ></iframe>
          </div>
        </>
      )
    },
  ],
  it: [
    { id: 'phone', title: 'Chiamaci', bubbleTitle: 'Telefono', content: '+33 1 23 45 67 89' },
    { id: 'email', title: 'Scrivici', bubbleTitle: 'Email', content: <a href="mailto:contact@moncafeparfait.com" className="text-decoration-none text-reset fw-bold">contact@moncafeparfait.com</a> },
    { 
      id: 'map', 
      title: 'Trova la nostra sede', 
      bubbleTitle: 'Indirizzo', 
      content: (
        <>
          <p>123 Rue du Café, 75001 Parigi</p>
          <div className="mt-2 border border-secondary rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1783060155077!2d-0.1277583843519888!3d51.50735097963567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c7c7f1a39f%3A0x6336330b6f932e67!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1678901234567!5m2!1sen!2suk"
              width="100%"
              height="150"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa"
            ></iframe>
          </div>
        </>
      )
    },
  ]
};

const Contact = ({ language = 'fr' }) => {
  const [activeBubble, setActiveBubble] = useState(null);
  const handleItemClick = (id) => setActiveBubble(activeBubble === id ? null : id);

  const contactItems = contactTranslations[language];

  return (
    <div className="contact min-vh-100 d-flex justify-content-center align-items-center py-5" 
         style={{
           fontFamily: "'Merriweather', serif",
           backgroundColor: '#FDF5E6',
           color: '#4A2C00',
           backgroundImage: 'url("parchment_texture.png")',
           backgroundSize: 'cover',
           backgroundAttachment: 'fixed',
           padding: '3rem 1rem'
         }}>
      <div className="bg-light bg-opacity-85 border border-5 rounded-3 p-5 text-center position-relative overflow-visible"
           style={{
             borderColor: '#704214',
             boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.3)',
             width: '95%',
             maxWidth: '1200px',
             backgroundImage: 'url("menu_border.png")',
             backgroundSize: '100% 100%',
             backgroundRepeat: 'no-repeat',
             margin: '2rem'
           }}>
        <h1
          className="mb-5"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: 'clamp(2rem, 1vw, 1rem)',
            color: '#704214',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}
        >
          { language === 'fr' ? 'Contactez-nous' : language === 'ar' ? 'اتصل بنا' : 'Contattaci' }
        </h1>

        <div className="d-flex justify-content-center align-items-start flex-wrap gap-5">
          {contactItems.map((item, index) => (
            <div
              key={item.id}
              className="cartes position-relative border border-dashed rounded-3 p-4 cursor-pointer d-flex flex-column justify-content-center align-items-center"
              style={{
                backgroundColor: activeBubble === item.id ? '#fcecdb' : '#FDF5E6',
                borderColor: '#8D5B3C',
                width: '220px',
                height: '220px',
                boxShadow: activeBubble === item.id ? '8px 8px 20px rgba(0,0,0,0.3)' : '5px 5px 15px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
                transform: activeBubble === item.id ? 'translateY(-10px) rotate(-3deg)' : 'none'
              }}
              onClick={() => handleItemClick(item.id)}
            >
              <img
                src={index === 0 ? i1 : index === 1 ? i11 : i2}
                alt={item.title}
                className="mb-3"
                style={{
                  width: '100px',
                  height: '100px',
                  filter: activeBubble === item.id ? 'sepia(0.5) brightness(0.9)' : 'sepia(0.8) brightness(0.7)',
                  transition: 'filter 0.3s ease'
                }}
              />
              <p className="fw-bold m-0" style={{ color: '#4A2C00', fontSize: '1.3em' }}>{item.title}</p>
              
              <div 
                className="position-absolute top-0 start-50 translate-middle bg-light border rounded-3 p-4 z-3"
                style={{
                  border: '3px solid #8D5B3C',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                  minWidth: '300px',
                  opacity: activeBubble === item.id ? 1 : 0,
                  visibility: activeBubble === item.id ? 'visible' : 'hidden',
                  transform: activeBubble === item.id ? 'translateX(-50%) scale(1)' : 'translateX(-50%) scale(0.8)',
                  top: activeBubble === item.id ? '-250px' : '-20px',
                  transition: 'opacity 0.4s ease, transform 0.4s ease, visibility 0.4s ease, top 0.4s ease',
                  backgroundImage: 'url("parchment_bubble.png")',
                  backgroundSize: 'cover'
                }}
              >
                <p className="m-0 mb-2" style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: '2.5em',
                  color: '#704214',
                  lineHeight: 1
                }}>{item.bubbleTitle}</p>
                <div style={{ color: '#4A2C00', fontSize: '1.2em' }}>
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
