import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaFacebook, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = ({ language = 'fr' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formMessage, setFormMessage] = useState({ text: '', type: '' });

  // Traductions
  const contactTranslations = {
    fr: {
      title: "Contactez-nous",
      subtitle: "Une question, une suggestion ou juste envie de nous dire bonjour ?",
      phone: "Téléphone",
      address: "Adresse",
      email: "Email",
      name: "Nom",
      subject: "Sujet",
      message: "Message",
      send: "Envoyer",
      follow: "Nous suivre",
      followers: "Déjà +12k abonnés qui savourent avec nous",
      success: "Votre message a été envoyé avec succès!",
      phoneNumber: "+33 1 23 45 67 89",
      addressText: "123 Rue du Café, 75001 Paris",
      emailAddress: "contact@cafemoderne.com"
    },
    it: {
      title: "Contattaci",
      subtitle: "Hai una domanda, un suggerimento o vuoi solo salutare?",
      phone: "Telefono",
      address: "Indirizzo",
      email: "Email",
      name: "Nome",
      subject: "Oggetto",
      message: "Messaggio",
      send: "Invia",
      follow: "Seguici",
      followers: "Già oltre 12k iscritti che si godono con noi",
      success: "Il tuo messaggio è stato inviato con successo!",
      phoneNumber: "+33 1 23 45 67 89",
      addressText: "Via del Caffè 123, 75001 Parigi",
      emailAddress: "contact@cafemoderne.com"
    },      
    ar: {
      title: "اتصل بنا",
      subtitle: "هل لديك سؤال أو اقتراح أو تريد فقط أن تقول مرحبًا؟",
      phone: "هاتف",
      address: "عنوان",
      email: "البريد الإلكتروني",
      name: "الاسم",
      subject: "الموضوع",
      message: "الرسالة",
      send: "إرسال",
      follow: "تابعنا",
      followers: "أكثر من 12 ألف متابع يستمتعون معنا",
      success: "تم إرسال رسالتك بنجاح!",
      phoneNumber: "+33 1 23 45 67 89",
      addressText: "123 شارع القهوة، 75001 باريس",
      emailAddress: "contact@cafemoderne.com"
    }
  };

  const contactItems = contactTranslations[language];
  const isRTL = language === 'ar';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi réussi
    setFormMessage({ 
      text: contactItems.success, 
      type: 'success' 
    });
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container py-4 py-md-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            <div className="contact-container bg-white rounded-4 shadow-sm p-3 p-md-4 p-lg-5">
              <header className="text-center mb-4 mb-md-5">
                <h1 className="fw-bold text-brown mb-2">
                  {contactItems.title}
                </h1>
                <p className="text-secondary mb-0 fs-5">
                  {contactItems.subtitle}
                </p>
              </header>

              <div className="row mb-4">
                <div className="col-md-4 mb-3">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">
                    <FaPhone className={`flex-shrink-0 ${isRTL ? "ms-3" : "me-3"}`} style={{ color: '#6F4E37', fontSize: '1.5rem' }} />
                    <div>
                      <strong className="d-block">{contactItems.phone}</strong>
                      <span className="text-muted">{contactItems.phoneNumber}</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">
                    <FaMapMarkerAlt className={`flex-shrink-0 ${isRTL ? "ms-3" : "me-3"}`} style={{ color: '#6F4E37', fontSize: '1.5rem' }} />
                    <div>
                      <strong className="d-block">{contactItems.address}</strong>
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=Eiffel+Tower" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted text-decoration-none"
                      >
                        {contactItems.addressText}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">
                    <FaEnvelope className={`flex-shrink-0 ${isRTL ? "ms-3" : "me-3"}`} style={{ color: '#6F4E37', fontSize: '1.5rem' }} />
                    <div>
                      <strong className="d-block">{contactItems.email}</strong>
                      <a 
                        href="mailto:contact@cafemoderne.com" 
                        className="text-muted text-decoration-none"
                      >
                        {contactItems.emailAddress}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mb-4">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label fw-semibold">
                      {contactItems.name}
                    </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">
                      {contactItems.email}
                    </label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label fw-semibold">
                    {contactItems.subject}
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-semibold">
                    {contactItems.message}
                  </label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                  ></textarea>
                </div>
                
                {formMessage.text && (
                  <div 
                    className={`alert ${formMessage.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`}
                  >
                    {formMessage.text}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="btn btn-primary w-100 py-2 fw-semibold"
                  style={{ backgroundColor: '#6F4E37', borderColor: '#6F4E37' }}
                >
                  {contactItems.send}
                </button>
              </form>

              <div className="text-center pt-4 mt-4 border-top">
                <h2 className="h4 mb-2">
                  {contactItems.follow}
                </h2>
                <p className="text-muted mb-3">
                  {contactItems.followers}
                </p>
                <div className="d-flex justify-content-center flex-wrap gap-2">
                  {[
                    { icon: FaInstagram, color: '#E1306C' },
                    { icon: FaFacebook, color: '#1877F2' },
                    { icon: FaTiktok, color: '#000000' },
                    { icon: FaTwitter, color: '#1DA1F2' },
                    { icon: FaYoutube, color: '#FF0000' }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="d-flex align-items-center justify-content-center rounded-circle bg-light text-dark text-decoration-none"
                      style={{ 
                        width: '45px', 
                        height: '45px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <social.icon style={{ color: social.color }} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600&display=swap');
        
        .contact-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f5f5 0%, #e6d2c3 100%);
          padding: 1rem;
          font-family: ${isRTL ? "'Cairo', sans-serif" : "'Poppins', sans-serif"};
        }
        
        .contact-container {
          backdrop-filter: blur(5px);
        }
        
        .text-brown {
          color: #6F4E37;
        }
        
        .form-control:focus {
          border-color: #a17a5d;
          box-shadow: 0 0 0 0.25rem rgba(161, 122, 93, 0.25);
        }
        
        .btn-primary:hover {
          background-color: #a17a5d !important;
          border-color: #a17a5d !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        
        .social-icon:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        
        // Media queries pour le responsive
        @media (max-width: 768px) {
          .contact-page {
            padding: 0.5rem;
          }
          
          .contact-container {
            padding: 1.5rem !important;
          }
          
          .d-flex.align-items-center.p-3 {
            padding: 1rem !important;
          }
        }
        
        @media (max-width: 576px) {
          header h1 {
            font-size: 1.75rem;
          }
          
          header p {
            font-size: 1rem;
          }
          
          .d-flex.align-items-center.p-3 {
            flex-direction: column;
            text-align: center;
          }
          
          .d-flex.align-items-center.p-3 > svg {
            margin-bottom: 0.5rem;
            margin-right: 0 !important;
            margin-left: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;