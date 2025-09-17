import React from "react";
import Marquee from "react-fast-marquee";
import "bootstrap/dist/css/bootstrap.min.css";

const teamTranslations = {
  fr: [
    {
      name: "Sophie",
      role: "Barista en Chef",
      image: "https://getweeklyupdate.com/blog/wp-content/uploads/2018/02/27.jpg",
      description:
        "Sophie est l'artiste derrière chaque tasse parfaite. Sa passion pour les grains de café est contagieuse, et elle transforme chaque commande en une œuvre d'art, avec une mousse délicate et des arômes envoûtants. Elle se souvient de votre boisson préférée avant même que vous ne la commandiez."
    },
    {
      name: "Marc",
      role: "Chef Pâtissier",
      image: "https://getweeklyupdate.com/blog/wp-content/uploads/2018/02/27.jpg",
      description:
        "Avec Marc, chaque bouchée est un voyage. Ce magicien des saveurs concocte des douceurs qui se marient à merveille avec nos cafés, des croissants feuilletés aux gâteaux décadents. Il met tout son cœur dans ses créations, et ça se sent !"
    },
    {
      name: "Léa",
      role: "Responsable Accueil",
      image: "https://getweeklyupdate.com/blog/wp-content/uploads/2018/02/27.jpg",
      description:
        "Le sourire chaleureux de Léa est la première chose que vous rencontrez en franchissant notre seuil. Elle veille à ce que chacun se sente instantanément à l'aise et bienvenu. Pour Léa, chaque visiteur est un ami qu'elle n'a pas encore rencontré."
    },
    {
      name: "Thomas",
      role: "Torréfacteur et Expert en Café",
      image: "https://getweeklyupdate.com/blog/wp-content/uploads/2018/02/27.jpg",
      description:
        "Thomas est notre âme exploratrice, toujours à la recherche des meilleurs grains du monde. Il supervise notre torréfaction, assurant que chaque lot révèle son potentiel maximal en arômes. Sa connaissance du café est une véritable encyclopédie vivante, qu'il aime partager."
    }
  ],
  ar: [
    {
      name: "صوفي",
      role: "خبيرة الباريستا",
      image: "https://getweeklyupdate.com/blog/wp-content/uploads/2018/02/27.jpg",
      description:
        "صوفي هي الفنانة وراء كل كوب مثالي. شغفها بحبوب القهوة معدٍ، وتحول كل طلب إلى عمل فني، برغوة دقيقة وروائح جذابة. إنها تتذكر مشروبك المفضل قبل أن تطلبه."
    },
    {
      name: "مارك",
      role: "رئيس الحلويات",
      image: "https://getweeklyupdate.com/blog/wp-content/uploads/2018/02/27.jpg",
      description:
        "مع مارك، كل لقمة رحلة. هذا الساحر في النكهات يحضر الحلويات التي تتماشى بشكل رائع مع قهوتنا، من الكرواسان المقرمش إلى الكعك الفاخر. يضع قلبه كله في إبداعاته، وهذا محسوس!"
    },
    {
      name: "ليا",
      role: "مسؤولة الاستقبال",
      image: "https://getweeklyupdate.com/blog/wp-content/uploads/2018/02/27.jpg",
      description:
        "ابتسامة ليا الدافئة هي أول ما تراه عند دخولك. إنها تضمن شعور كل شخص بالراحة والترحيب فورًا. بالنسبة ليا، كل زائر هو صديق لم تقابله بعد."
    },
    {
      name: "توماس",
      role: "خبير التحميص والقهوة",
      image: "https://getweeklyupdate.com/blog/wp-content/uploads/2018/02/27.jpg",
      description:
        "توماس هو روحنا المستكشفة، دائم البحث عن أفضل الحبوب في العالم. يشرف على التحميص لدينا، ويضمن أن يكشف كل دفعة عن أقصى إمكانياتها من النكهات. معرفته بالقهوة هي موسوعة حية يحب مشاركتها."
    }
  ],
  it: [
    {
      name: "Sophie",
      role: "Barista Capo",
      image: "https://getweeklyupdate.com/blog/wp-content/uploads/2018/02/27.jpg",
      description:
        "Sophie è l'artista dietro ogni tazza perfetta. La sua passione per i chicchi di caffè è contagiosa e trasforma ogni ordine in un'opera d'arte, con una schiuma delicata e aromi avvolgenti. Ricorda la tua bevanda preferita prima ancora che tu la ordini."
    },
    {
      name: "Marc",
      role: "Chef Pasticcere",
      image: "https://getweeklyupdate.com/blog/wp-content/uploads/2018/02/27.jpg",
      description:
        "Con Marc, ogni morso è un viaggio. Questo mago dei sapori prepara dolci che si sposano perfettamente con i nostri caffè, dai croissant sfogliati alle torte decadenti. Mettere tutto il suo cuore nelle creazioni si sente!"
    },
    {
      name: "Léa",
      role: "Responsabile Accoglienza",
      image: "https://getweeklyupdate.com/blog/wp-content/uploads/2018/02/27.jpg",
      description:
        "Il sorriso caloroso di Léa è la prima cosa che incontri entrando. Si assicura che ognuno si senta subito a proprio agio e benvenuto. Per Léa, ogni visitatore è un amico che deve ancora incontrare."
    },
    {
      name: "Thomas",
      role: "Tostatore ed Esperto di Caffè",
      image: "https://getweeklyupdate.com/blog/wp-content/uploads/2018/02/27.jpg",
      description:
        "Thomas è la nostra anima esploratrice, sempre alla ricerca dei migliori chicchi del mondo. Supervisiona la tostatura, assicurandosi che ogni lotto riveli il massimo del potenziale aromatico. La sua conoscenza del caffè è un'enciclopedia vivente che ama condividere."
    }
  ]
};

const TeamSection = ({ language = "fr" }) => {
  const teamMembers = teamTranslations[language];

  return (
    <section id="equipe" className="travaill py-5 bg-light" style={{ backgroundColor: "black" }}>
      <div className="container text-center">
        <h1
          className="mb-5"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: 'clamp(2rem, 5vw, 5rem)',
            color: '#704214',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}
        >
          {language === 'fr' ? "Mon Équipe" : language === 'ar' ? "فريقي" : "La Mia Squadra"}
        </h1>
        <Marquee gradient={false} speed={50} autoFill={true} className="py-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member card shadow-sm text-center mx-3 p-3"
              style={{ minWidth: "250px", borderRadius: "15px", backgroundColor: "#fff" }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-circle mx-auto mb-3"
                style={{ width: "100px", height: "100px", objectFit: "cover", border: "4px solid #d2b48c" }}
              />
              <h5 style={{ color: "#6a4f41" }}>{member.name}</h5>
              <p className="fw-semibold" style={{ color: "#a0522d", fontStyle: "italic" }}>{member.role}</p>
              <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: "1.5" }}>{member.description}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TeamSection;
