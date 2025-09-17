import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";

// Traductions pour le menu
const menuTranslations = {
  fr: {
    menuTitle: "Menu",
    hotDrinks: "Boissons Chaudes",
    coldDrinks: "Boissons Fraîches",
    pastries: "Pâtisseries",
    hotDrinksIntro: "Laissez-vous envelopper par la chaleur de nos créations, des cafés riches et des chocolats onctueux, préparés avec passion pour réconforter votre journée.",
    coldDrinksIntro: "Découvrez nos créations rafraîchissantes, parfaites pour les journées ensoleillées. Des saveurs fruitées et des textures glacées qui vous transporteront.",
    pastriesIntro: "Succombez à la tentation de nos douceurs maison, préparées avec amour et les meilleurs ingrédients. Chaque bouchée est un moment de bonheur."
  },
  ar: {
    menuTitle: "قائمة الطعام",
    hotDrinks: "المشروبات الساخنة",
    coldDrinks: "المشروبات الباردة",
    pastries: "الحلويات والمعجنات",
    hotDrinksIntro: "دع نفسك تُغمر بدفء إبداعاتنا، من القهوة الغنية والشوكولاتة الحريرية، مُعدة بشغف لتروق يومك.",
    coldDrinksIntro: "اكتشف إبداعاتنا المنعشة، المثالية لأيام الشمس. نكهات فواكه وقوام مثلج ينقلك إلى عالم آخر.",
    pastriesIntro: "استسلم لإغراء حلوياتنا المنزلية، المُعدة بحب وبأفضل المكونات. كل قضمة هي لحظة سعادة."
  },
  it: {
    menuTitle: "Menù",
    hotDrinks: "Bevande Calde",
    coldDrinks: "Bevande Fredde",
    pastries: "Pasticceria",
    hotDrinksIntro: "Lasciati avvolgere dal calore delle nostre creazioni, caffè ricchi e cioccolati vellutati, preparati con passione per confortare la tua giornata.",
    coldDrinksIntro: "Scopri le nostre creazioni rinfrescanti, perfette per le giornate soleggiate. Sapori fruttati e texture ghiacciate che ti trasporteranno.",
    pastriesIntro: "Cedi alla tentazione delle nostre dolcezze casalinghe, preparate con amore e i migliori ingredienti. Ogni boccone è un momento di felicità."
  }
};

// Données des menus avec traductions
const getMenuData = (language) => {
    const t = menuItemTranslations[language];
    
    return {
      hotDrinks: [
        {
          id: 1,
          name: t.hotDrinks1.name,
          price: "2.50€",
          description: t.hotDrinks1.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign-v2/302x570/hot-coffee.png",
        },
        {
          id: 2,
          name: t.hotDrinks2.name,
          price: "3.00€",
          description: t.hotDrinks2.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign-v2/302x570/hot-americano.png",
        },
        {
          id: 3,
          name: t.hotDrinks3.name,
          price: "3.60€",
          description: t.hotDrinks3.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign-v2/302x570/hot-latte.png",
        },
        {
          id: 4,
          name: t.hotDrinks4.name,
          price: "4.50€",
          description: t.hotDrinks4.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign-v2/302x570/hot-signature-latte.png",
        },
        {
          id: 5,
          name: t.hotDrinks5.name,
          price: "3.80€",
          description: t.hotDrinks5.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign-v2/302x570/hot-macchiato.png",
        },
        {
          id: 6,
          name: t.hotDrinks6.name,
          price: "3.70€",
          description: t.hotDrinks6.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign-v2/302x570/hot-cappuccino.png",
        },
        {
          id: 7,
          name: t.hotDrinks7.name,
          price: "2.20€",
          description: t.hotDrinks7.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign-v2/302x570/espresso.png",
        },
        {
          id: 8,
          name: t.hotDrinks8.name,
          price: "2.80€",
          description: t.hotDrinks8.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign-v2/302x570/hot-tea.png",
        },
        {
          id: 9,
          name: t.hotDrinks9.name,
          price: "3.40€",
          description: t.hotDrinks9.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign-v2/302x570/hot-chocolate.png",
        },
        {
          id: 10,
          name: t.hotDrinks10.name,
          price: "4.20€",
          description: t.hotDrinks10.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign-v2/302x570/hot-matcha-latte.png",
        },
        {
          id: 11,
          name: t.hotDrinks11.name,
          price: "4.00€",
          description: t.hotDrinks11.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign-v2/302x570/hot-chai-latte.png",
        }
      ],
      coldDrinks: [
        {
          id: 1,
          name: t.coldDrinks1.name,
          price: "3.20€",
          description: t.coldDrinks1.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign-v2/302x570/iced_coffee.png",
        },
        {
          id: 2,
          name: t.coldDrinks2.name,
          price: "3.80€",
          description: t.coldDrinks2.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign-v2/302x570/cold_brew.png",
        },
        {
          id: 3,
          name: t.coldDrinks3.name,
          price: "3.50€",
          description: t.coldDrinks3.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign-v2/302x570/iced_americano.png",
        },
        {
          id: 4,
          name: t.coldDrinks4.name,
          price: "4.20€",
          description: t.coldDrinks4.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign/espresso-coffee/DNK00724_IcedLatte_200px@2x.png",
        },
        {
          id: 5,
          name: t.coldDrinks5.name,
          price: "4.90€",
          description: t.coldDrinks5.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign/espresso-coffee/Iced%20Signature%20Latte@2x.png",
        },
        {
          id: 6,
          name: t.coldDrinks6.name,
          price: "4.40€",
          description: t.coldDrinks6.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign/espresso-coffee/DNK00542_IcedCaramelMacchiatto_200px@2x.png",
        },
        {
          id: 7,
          name: t.coldDrinks7.name,
          price: "4.30€",
          description: t.coldDrinks7.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign/espresso-coffee/DNK00557_IcedFrenchVanillaCap_200px@2x.png",
        },
        {
          id: 8,
          name: t.coldDrinks8.name,
          price: "3.20€",
          description: t.coldDrinks8.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign-v2/302x570/iced-tea.png",
        },
        {
          id: 9,
          name: t.coldDrinks9.name,
          price: "4.10€",
          description: t.coldDrinks9.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign-v2/302x570/dunkin-refresher.png",
        },
        {
          id: 10,
          name: t.coldDrinks10.name,
          price: "4.50€",
          description: t.coldDrinks10.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign-v2/302x570/SPARKD_Rectangle.png",
        },
        {
          id: 11,
          name: t.coldDrinks11.name,
          price: "4.60€",
          description: t.coldDrinks11.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign-v2/302x570/iced-matcha-latte.png",
        },
        {
          id: 12,
          name: t.coldDrinks12.name,
          price: "4.40€",
          description: t.coldDrinks12.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign-v2/302x570/iced-chai-latte.png",
        }
      ],
      pastries: [
        {
          id: 1,
          name: t.pastries1.name,
          price: "4.90€",
          description: t.pastries1.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign/sandwiches-and-more/DNK00673_CroissantSausageEggCheese_lib_RGB@2x.png",
        },
        {
          id: 2,
          name: t.pastries2.name,
          price: "5.20€",
          description: t.pastries2.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign/sandwiches-and-more/DNK00686_BaconEggCheeseBagel_200px@2x.png",
        },
        {
          id: 3,
          name: t.pastries3.name,
          price: "5.10€",
          description: t.pastries3.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign/sandwiches-and-more/DNK00671_EngMuffinTurkeySausageEggCheese_lib_RGB%20copy@2x.png",
        },
        {
          id: 4,
          name: t.pastries4.name,
          price: "4.50€",
          description: t.pastries4.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign/sandwiches-and-more/DNK00672_EngMuffinEggCheese_lib_RGB%20copy@2x.png",
        },
        {
          id: 5,
          name: t.pastries5.name,
          price: "5.50€",
          description: t.pastries5.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign/sandwiches-and-more/SourdoughBNT.png",
        },
        {
          id: 6,
          name: t.pastries6.name,
          price: "3.80€",
          description: t.pastries6.description,
          image: "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign/sandwiches-and-more/DNK00688_BaconEggCheeseWakeUpWrap_500px%20copy@2x.png",
        }
      ],
    };
  };
  
  // Traductions des éléments de menu
  const menuItemTranslations = {
    fr: {
      hotDrinks1: {
        name: "Café",
        description: "Notre café signature, torréfié à la perfection pour un goût riche et équilibré."
      },
      hotDrinks2: {
        name: "Americano",
        description: "Espresso allongé avec de l'eau chaude pour une boisson robuste et savoureuse."
      },
      hotDrinks3: {
        name: "Latte",
        description: "Espresso équilibré avec du lait vapeur et une légère couche de mousse."
      },
      hotDrinks4: {
        name: "Latte Signature",
        description: "Notre latte premium avec des saveurs signature et du lait vapeur onctueux."
      },
      hotDrinks5: {
        name: "Macchiato",
        description: "Espresso marqué d'une touche de mousse de lait pour une saveur intense."
      },
      hotDrinks6: {
        name: "Cappuccino",
        description: "Espresso classique avec des parts égales de lait vapeur et de mousse onctueuse."
      },
      hotDrinks7: {
        name: "Espresso",
        description: "Notre espresso intense et audacieux, parfait pour les puristes du café."
      },
      hotDrinks8: {
        name: "Thé Chaud",
        description: "Sélection de thés fins infusés à la perfection pour une expérience réconfortante."
      },
      hotDrinks9: {
        name: "Chocolat Chaud",
        description: "Chocolat riche et crémeux préparé avec du vrai chocolat et du lait vapeur."
      },
      hotDrinks10: {
        name: "Matcha Latte Chaud",
        description: "Latte préparé avec du matcha premium et du lait vapeur onctueux."
      },
      hotDrinks11: {
        name: "Chai Latte Chaud",
        description: "Mélange épicé de thé chai traditionnel avec du lait vapeur crémeux."
      },
      coldDrinks1: {
        name: "Café Glacé",
        description: "Notre café signature rafraîchissant, servi sur glace pour une journée parfaite."
      },
      coldDrinks2: {
        name: "Cold Brew",
        description: "Café infusé à froid pendant 12 heures pour une saveur douce et peu acide."
      },
      coldDrinks3: {
        name: "Americano Glacé",
        description: "Espresso rafraîchissant avec de l'eau froide et de la glace."
      },
      coldDrinks4: {
        name: "Latte Glacé",
        description: "Espresso rafraîchissant avec du lait froid et de la glace."
      },
      coldDrinks5: {
        name: "Latte Signature Glacé",
        description: "Notre latte signature servi glacé pour une expérience rafraîchissante."
      },
      coldDrinks6: {
        name: "Macchiato Glacé",
        description: "Macchiato rafraîchissant avec de la glace et une touche de caramel."
      },
      coldDrinks7: {
        name: "Cappuccino Glacé",
        description: "Notre cappuccino signature servi froid avec de la vanille française."
      },
      coldDrinks8: {
        name: "Thé Glacé",
        description: "Thé rafraîchissant infusé à froid, parfait pour se désaltérer."
      },
      coldDrinks9: {
        name: "Dunkin' Refreshers",
        description: "Boisson énergisante rafraîchissante à base de thé vert et de saveurs fruitées."
      },
      coldDrinks10: {
        name: "Dunkin' Energy",
        description: "Boisson énergisante à base d'extraits de café pour un boost d'énergie instantané."
      },
      coldDrinks11: {
        name: "Matcha Latte Glacé",
        description: "Matcha latte rafraîchissant servi avec de la glace et du lait froid."
      },
      coldDrinks12: {
        name: "Chai Latte Glacé",
        description: "Notre chai latte épicé servi froid pour une expérience rafraîchissante."
      },
      pastries1: {
        name: "Croissant Saucisse, Œuf & Fromage",
        description: "Croissant beurré garni de saucisse, d'œuf et de fromage fondant."
      },
      pastries2: {
        name: "Bacon, Œuf & Fromage",
        description: "Bagel garni de bacon croustillant, d'œuf et de fromage fondant."
      },
      pastries3: {
        name: "Dinde Saucisse, Œuf & Fromage",
        description: "Muffin anglais avec saucisse de dinde, œuf et fromage fondant."
      },
      pastries4: {
        name: "Œuf & Fromage",
        description: "Muffin anglais simple et délicieux avec œuf et fromage fondant."
      },
      pastries5: {
        name: "Sandwich Petit Déjeuner Pain au Levain",
        description: "Pain au levain grillé garni d'œuf, de fromage et de votre choix de viande."
      },
      pastries6: {
        name: "Wake-Up Wrap",
        description: "Tortilla légère garnie de bacon, d'œuf et de fromage, parfaite pour un petit déjeuner sur le pouce."
      }
    },
    ar: {
        // مشروبات ساخنة
        hotDrinks1: { name: "قهوة", description: "قهوة توقيعنا، محمصة بإتقان للحصول على طعم غني ومتوازن." },
        hotDrinks2: { name: "أمريكانو", description: "إسبرسو مخفف بالماء الساخن لمذاق قوي ولذيذ." },
        hotDrinks3: { name: "لاتيه", description: "إسبرسو متوازن مع حليب مبخر وطبقة خفيفة من الرغوة." },
        hotDrinks4: { name: "لاتيه مميز", description: "لاتيه فاخر بنكهات مميزة وحليب مبخر كريمي." },
        hotDrinks5: { name: "ماكياتو", description: "إسبرسو مع لمسة من رغوة الحليب لمذاق قوي." },
        hotDrinks6: { name: "كابتشينو", description: "إسبرسو كلاسيكي مع أجزاء متساوية من الحليب المبخر والرغوة الكريمية." },
        hotDrinks7: { name: "إسبرسو", description: "إسبرسو مركز وجريء، مثالي لعشاق القهوة الخالصة." },
        hotDrinks8: { name: "شاي ساخن", description: "مجموعة مختارة من الشاي الفاخر المخمر بإتقان لتجربة مريحة." },
        hotDrinks9: { name: "شوكولاتة ساخنة", description: "شوكولاتة غنية وكريمية محضرة من الشوكولاتة الحقيقية والحليب المبخر." },
        hotDrinks10: { name: "ماتشا لاتيه ساخن", description: "لاتيه محضر بماتشا فاخر وحليب مبخر كريمي." },
        hotDrinks11: { name: "شاي لاتيه ساخن", description: "مزيج شاي تشاي التقليدي مع حليب مبخر كريمي." },
    
        // مشروبات باردة
        coldDrinks1: { name: "قهوة مثلجة", description: "قهوة توقيعنا المنعشة، تقدم مع الثلج ليوم مثالي." },
        coldDrinks2: { name: "كولد برو", description: "قهوة مخمرة على البارد لمدة 12 ساعة لمذاق ناعم وقليل الحموضة." },
        coldDrinks3: { name: "أمريكانو مثلج", description: "إسبرسو منعش مع ماء بارد وثلج." },
        coldDrinks4: { name: "لاتيه مثلج", description: "إسبرسو منعش مع حليب بارد وثلج." },
        coldDrinks5: { name: "لاتيه مميز مثلج", description: "لاتيه توقيعنا يقدم مثلجًا لتجربة منعشة." },
        coldDrinks6: { name: "ماكياتو مثلج", description: "ماكياتو منعش مع ثلج ولمسة كراميل." },
        coldDrinks7: { name: "كابتشينو مثلج", description: "كابتشينو توقيعنا يقدم بارد مع فانيليا فرنسية." },
        coldDrinks8: { name: "شاي مثلج", description: "شاي منعش مخمر على البارد، مثالي لإرواء العطش." },
        coldDrinks9: { name: "ريفريشرز", description: "مشروب طاقة منعش يعتمد على الشاي الأخضر والنكهات الفاكهية." },
        coldDrinks10: { name: "مشروب طاقة بالقهوة", description: "مشروب طاقة يعتمد على مستخلصات القهوة لزيادة فورية للطاقة." },
        coldDrinks11: { name: "ماتشا لاتيه مثلج", description: "ماتشا لاتيه منعش يقدم مع ثلج وحليب بارد." },
        coldDrinks12: { name: "شاي لاتيه مثلج", description: "شاي لاتيه حار بنكهة التوابل يقدم مثلجًا لتجربة منعشة." },
    
        // معجنات
        pastries1: { name: "كرواسون سجق، بيض وجبن", description: "كرواسون بالزبدة محشو بالسجق والبيض والجبن الذائب." },
        pastries2: { name: "بيكون، بيض وجبن", description: "خبز البيغل محشو ببيكون مقرمش وبيض وجبن ذائب." },
        pastries3: { name: "سجق ديك رومي، بيض وجبن", description: "مافن إنجليزي مع سجق ديك رومي وبيض وجبن ذائب." },
        pastries4: { name: "بيض وجبن", description: "مافن إنجليزي بسيط ولذيذ مع بيض وجبن ذائب." },
        pastries5: { name: "ساندويتش إفطار بخبز العجين المخمر", description: "خبز عجين مخمر محمص مع بيض وجبن ولحوم من اختيارك." },
        pastries6: { name: "راب إفطار", description: "تورتيلا خفيفة محشوة ببيكون وبيض وجبن، مثالية للإفطار السريع." }
      },
      it: {
        // Bevande calde
        hotDrinks1: { name: "Caffè", description: "Il nostro caffè d’autore, tostato alla perfezione per un gusto ricco ed equilibrato." },
        hotDrinks2: { name: "Americano", description: "Espresso allungato con acqua calda per una bevanda robusta e saporita." },
        hotDrinks3: { name: "Latte", description: "Espresso bilanciato con latte al vapore e un leggero strato di schiuma." },
        hotDrinks4: { name: "Latte Speciale", description: "Il nostro latte premium con sapori speciali e latte al vapore vellutato." },
        hotDrinks5: { name: "Macchiato", description: "Espresso con un tocco di schiuma di latte per un sapore intenso." },
        hotDrinks6: { name: "Cappuccino", description: "Espresso classico con parti uguali di latte al vapore e schiuma cremosa." },
        hotDrinks7: { name: "Espresso", description: "Il nostro espresso intenso e deciso, perfetto per i puristi del caffè." },
        hotDrinks8: { name: "Tè Caldo", description: "Selezione di tè pregiati infusi alla perfezione per un’esperienza rilassante." },
        hotDrinks9: { name: "Cioccolata Calda", description: "Cioccolata ricca e cremosa preparata con vero cioccolato e latte al vapore." },
        hotDrinks10: { name: "Matcha Latte Caldo", description: "Latte preparato con matcha premium e latte al vapore vellutato." },
        hotDrinks11: { name: "Chai Latte Caldo", description: "Miscela speziata di tè chai tradizionale con latte al vapore cremoso." },
    
        // Bevande fredde
        coldDrinks1: { name: "Caffè Freddo", description: "Il nostro caffè d’autore rinfrescante, servito con ghiaccio per una giornata perfetta." },
        coldDrinks2: { name: "Cold Brew", description: "Caffè estratto a freddo per 12 ore per un sapore morbido e poco acido." },
        coldDrinks3: { name: "Americano Freddo", description: "Espresso rinfrescante con acqua fredda e ghiaccio." },
        coldDrinks4: { name: "Latte Freddo", description: "Espresso rinfrescante con latte freddo e ghiaccio." },
        coldDrinks5: { name: "Latte Speciale Freddo", description: "Il nostro latte speciale servito freddo per un’esperienza rinfrescante." },
        coldDrinks6: { name: "Macchiato Freddo", description: "Macchiato rinfrescante con ghiaccio e un tocco di caramello." },
        coldDrinks7: { name: "Cappuccino Freddo", description: "Il nostro cappuccino d’autore servito freddo con vaniglia francese." },
        coldDrinks8: { name: "Tè Freddo", description: "Tè rinfrescante infuso a freddo, perfetto per dissetarsi." },
        coldDrinks9: { name: "Refreshers", description: "Bevanda energetica rinfrescante a base di tè verde e aromi fruttati." },
        coldDrinks10: { name: "Dunkin' Energy", description: "Bevanda energetica a base di estratti di caffè per un’energia immediata." },
        coldDrinks11: { name: "Matcha Latte Freddo", description: "Matcha latte rinfrescante servito con ghiaccio e latte freddo." },
        coldDrinks12: { name: "Chai Latte Freddo", description: "Il nostro chai latte speziato servito freddo per un’esperienza rinfrescante." },
    
        // Pasticceria
        pastries1: { name: "Croissant con Salsiccia, Uovo e Formaggio", description: "Croissant al burro farcito con salsiccia, uovo e formaggio fuso." },
        pastries2: { name: "Bacon, Uovo e Formaggio", description: "Bagel farcito con bacon croccante, uovo e formaggio fuso." },
        pastries3: { name: "Salsiccia di Tacchino, Uovo e Formaggio", description: "Muffin inglese con salsiccia di tacchino, uovo e formaggio fuso." },
        pastries4: { name: "Uovo e Formaggio", description: "Muffin inglese semplice e delizioso con uovo e formaggio fuso." },
        pastries5: { name: "Panino da Colazione con Pane a Lievitazione Naturale", description: "Pane a lievitazione naturale tostato farcito con uovo, formaggio e carne a scelta." },
        pastries6: { name: "Wrap da Colazione", description: "Tortilla leggera farcita con bacon, uovo e formaggio, perfetta per una colazione veloce." }
      }
  };

const MenuPage = ({ language = "fr" }) => {
  const navRef = useRef(null);
  const t = menuTranslations[language];
  const menuData = getMenuData(language);

  useEffect(() => {
    const handleNavClick = (e) => {
      if (
        e.target.tagName === "A" &&
        e.target.getAttribute("href").startsWith("#")
      ) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection && navRef.current) {
          const headerOffset = navRef.current.offsetHeight;
          const elementPosition = targetSection.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset - 20;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    const navElement = navRef.current;
    if (navElement) {
      navElement.addEventListener("click", handleNavClick);
    }

    return () => {
      if (navElement) {
        navElement.removeEventListener("click", handleNavClick);
      }
    };
  }, []);

  const commonSwiperOptions = {
    modules: [Navigation],
    loop: false,
    grabCursor: true,
    spaceBetween: 15,
    slidesPerView: 1,
    breakpoints: {
      600: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 20 },
      1200: { slidesPerView: 4, spaceBetween: 20 },
    },
  };

  return (
    <div className="App" id="menu">
      <Navbar expand="lg" bg="dark" ref={navRef} variant="dark"   className="navbar-padding"
>
        <Container>
          <Navbar.Brand href="#">{t.menuTitle}</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="mx-auto">
              <Nav.Link href="#boissons-chaudes">{t.hotDrinks}</Nav.Link>
              <Nav.Link href="#boissons-fraiches">{t.coldDrinks}</Nav.Link>
              <Nav.Link href="#patisseries">{t.pastries}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="menue my-4">
        {/* Section Boissons Chaudes */}
        <section id="boissons-chaudes" className="mb-5">
          <h2 className="d-flex align-items-center mb-4 pb-2 border-bottom border-accent">
            <img
              src="https://repasmed.com/wp-content/uploads/2024/11/kafteji-au-foie-de-boeuf.jpg"
              alt="Icône boisson chaude"
              className="section-icon me-3"
            />
            {t.hotDrinks}
          </h2>
          <p className="section-intro mx-auto mb-4 text-center fst-italic">
            {t.hotDrinksIntro}
          </p>

          <div className="position-relative px-5">
            <Swiper
              {...commonSwiperOptions}
              navigation={{
                nextEl: ".swiper-button-next-hot",
                prevEl: ".swiper-button-prev-hot",
              }}
              className="swiper-hot"
            >
              {menuData.hotDrinks.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="menu-item card h-100 border-0 shadow-sm">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="item-image card-img-top"
                    />
                    <div className="card-body d-flex flex-column">
                      <div className="item-header d-flex justify-content-between align-items-baseline mb-2">
                        <h3 className="card-title h5 mb-0">{item.name}</h3>
                        <span className="price text-accent fw-medium">
                          {item.price}
                        </span>
                      </div>
                      <p className="card-text text-secondary mt-auto">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev swiper-button-prev-hot position-absolute top-50 start-0 translate-middle-y"></div>
            <div className="swiper-button-next swiper-button-next-hot position-absolute top-50 end-0 translate-middle-y"></div>
          </div>
        </section>

        {/* Section Boissons Fraîches */}
        <section id="boissons-fraiches" className="mb-5">
          <h2 className="d-flex align-items-center mb-4 pb-2 border-bottom border-accent">
            <img
              src="https://repasmed.com/wp-content/uploads/2024/11/Couscous-calamar-farci.jpg"
              alt="Icône boisson fraîche"
              className="section-icon me-3"
            />
            {t.coldDrinks}
          </h2>
          <p className="section-intro mx-auto mb-4 text-center fst-italic">
            {t.coldDrinksIntro}
          </p>

          <div className="position-relative px-5">
            <Swiper
              {...commonSwiperOptions}
              navigation={{
                nextEl: ".swiper-button-next-cold",
                prevEl: ".swiper-button-prev-cold",
              }}
              className="swiper-cold"
            >
              {menuData.coldDrinks.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="menu-item card h-100 border-0 shadow-sm">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="item-image card-img-top"
                    />
                    <div className="card-body d-flex flex-column">
                      <div className="item-header d-flex justify-content-between align-items-baseline mb-2">
                        <h3 className="card-title h5 mb-0">{item.name}</h3>
                        <span className="price text-accent fw-medium">
                          {item.price}
                        </span>
                      </div>
                      <p className="card-text text-secondary mt-auto">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev swiper-button-prev-cold position-absolute top-50 start-0 translate-middle-y"></div>
            <div className="swiper-button-next swiper-button-next-cold position-absolute top-50 end-0 translate-middle-y"></div>
          </div>
        </section>

        {/* Section Pâtisseries */}
        <section id="patisseries" className="mb-5">
          <h2 className="d-flex align-items-center mb-4 pb-2 border-bottom border-accent">
            <img
              src="https://repasmed.com/wp-content/uploads/2024/11/Pizza-Pepperoni-SKU-073.jpg"
              alt="Icône pâtisserie"
              className="section-icon me-3"
            />
            {t.pastries}
          </h2>
          <p className="section-intro mx-auto mb-4 text-center fst-italic">
            {t.pastriesIntro}
          </p>

          <div className="position-relative px-5">
            <Swiper
              {...commonSwiperOptions}
              navigation={{
                nextEl: ".swiper-button-next-pastry",
                prevEl: ".swiper-button-prev-pastry",
              }}
              className="swiper-pastry"
            >
              {menuData.pastries.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="menu-item card h-100 border-0 shadow-sm">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="item-image card-img-top"
                    />
                    <div className="card-body d-flex flex-column">
                      <div className="item-header d-flex justify-content-between align-items-baseline mb-2">
                        <h3 className="card-title h5 mb-0">{item.name}</h3>
                        <span className="price text-accent fw-medium">
                          {item.price}
                        </span>
                      </div>
                      <p className="card-text text-secondary mt-auto">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev swiper-button-prev-pastry position-absolute top-50 start-0 translate-middle-y"></div>
            <div className="swiper-button-next swiper-button-next-pastry position-absolute top-50 end-0 translate-middle-y"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MenuPage;