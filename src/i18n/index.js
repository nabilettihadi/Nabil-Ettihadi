import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      hero: {
        title: "Bonjour, je suis Nabil Ettihadi",
        description: "Développeur Java passionné par le développement web et les nouvelles technologies. Spécialisé en Spring Boot, Laravel et Vue.js.",
        contactBtn: "Me contacter",
        downloadCV: "Télécharger CV"
      },
      nav: {
        about: "À propos",
        experience: "Expérience",
        projects: "Projets",
        contact: "Contact"
      },
      about: {
        title: "À propos",
        description: "Passionné par le développement web et les nouvelles technologies, je suis un développeur Full Stack avec une solide formation en informatique. Mon parcours académique et mes projets pratiques m'ont permis de développer une expertise particulière en Java et Spring Boot, ainsi qu'en développement web moderne.",
        frontend: {
          title: "Développeur Frontend",
          description: "HTML5, CSS3, Sass, JavaScript, React, Angular, TailwindCSS, Bootstrap, i18n"
        },
        backend: {
          title: "Développeur Backend",
          description: "PHP, Laravel, Java, Spring Boot, RESTful APIs"
        },
        ui: {
          title: "Conception",
          description: "UML, Merise, Agile (Scrum, Kanban), Jira, Trello"
        }
      },
      experience: {
        title: "Expérience",
        education: "Formation",
        positions: {
          geerd: {
            title: "Développeur Web Full Stack - Stage",
            company: "GEERD",
            period: "05/2024 - 07/2024"
          },
          youcode: {
            title: "Développement Web Full Stack",
            company: "Youcode Safi - UM6P",
            period: "2023 - en cours"
          }
        },
        education: {
          bac: {
            title: "Baccalauréat Sciences Mathématiques",
            option: "B BIOF",
            school: "Lycée technique Alkhawarizmi - Safi",
            period: "2020"
          },
          university: {
            title: "Sciences Mathématique et Informatique",
            school: "Faculté Polydisciplinaire de SAFI",
            period: "2020 - 2023"
          },
          certificate: {
            title: "Certificat de l'intelligence artificielle",
            organization: "MoroccoAI",
            school: "Faculté Polydisciplinaire de SAFI",
            period: "2022"
          }
        }
      },
      projects: {
        title: "Projets",
        viewDemo: "Démo",
        viewCode: "Code",
        citronix: {
          title: "Citronix",
          description: "Application de gestion pour une ferme de citrons, permettant de suivre la production, la récolte, et la vente, avec une gestion optimisée de la productivité des arbres."
        },
        cch: {
          title: "CCH API",
          description: "API REST pour la gestion des compétitions cyclistes, incluant la gestion des équipes, des coureurs, des courses et des résultats."
        },
        itlens: {
          title: "ITLens",
          description: "Système de gestion avancée des enquêtes avec création d'enquêtes hiérarchiques et analyse en temps réel."
        }
      },
      contact: {
        title: "Contact",
        subtitle: "N'hésitez pas à me contacter !",
        email: "Email",
        phone: "Téléphone"
      },
      languages: {
        title: "Langues",
        switchTo: "Changer en {{lang}}",
        ar: "Arabe - Langue maternelle",
        fr: "Français - Courant",
        en: "Anglais - Intermédiaire",
        de: "Allemand - Notions de base"
      },
      skills: {
        i18n: "Internationalisation"
      }
    }
  },
  en: {
    translation: {
      hero: {
        title: "Hi, I'm Nabil Ettihadi",
        description: "Java developer passionate about web development and new technologies. Specialized in Spring Boot, Laravel and Vue.js.",
        contactBtn: "Contact Me",
        downloadCV: "Download Resume"
      },
      nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact"
      },
      about: {
        title: "About",
        description: "Passionate about web development and new technologies, I am a Full Stack developer with a solid background in computer science. My academic journey and practical projects have allowed me to develop particular expertise in Java and Spring Boot, as well as modern web development.",
        frontend: {
          title: "Frontend Developer",
          description: "HTML5, CSS3, Sass, JavaScript, React, Angular, TailwindCSS, Bootstrap, i18n"
        },
        backend: {
          title: "Backend Developer",
          description: "PHP, Laravel, Java, Spring Boot, RESTful APIs"
        },
        ui: {
          title: "Design",
          description: "UML, Merise, Agile (Scrum, Kanban), Jira, Trello"
        }
      },
      experience: {
        title: "Experience",
        education: "Education",
        positions: {
          geerd: {
            title: "Full Stack Web Developer - Internship",
            company: "GEERD",
            period: "05/2024 - 07/2024"
          },
          youcode: {
            title: "Full Stack Web Development",
            company: "Youcode Safi - UM6P",
            period: "2023 - ongoing"
          }
        },
        education: {
          bac: {
            title: "Mathematics Science Baccalaureate",
            option: "B BIOF",
            school: "Alkhawarizmi Technical High School - Safi",
            period: "2020"
          },
          university: {
            title: "Mathematics and Computer Science",
            school: "Polydisciplinary Faculty of SAFI",
            period: "2020 - 2023"
          },
          certificate: {
            title: "Artificial Intelligence Certificate",
            organization: "MoroccoAI",
            school: "Polydisciplinary Faculty of SAFI",
            period: "2022"
          }
        }
      },
      projects: {
        title: "Projects",
        viewDemo: "Demo",
        viewCode: "Code",
        citronix: {
          title: "Citronix",
          description: "Management application for a lemon farm, allowing to track production, harvest, and sales, with optimized tree productivity management."
        },
        cch: {
          title: "CCH API",
          description: "REST API for cycling competition management, including team, rider, race and results management."
        },
        itlens: {
          title: "ITLens",
          description: "Advanced survey management system with hierarchical survey creation and real-time analysis."
        }
      },
      contact: {
        title: "Contact",
        subtitle: "Feel free to reach out!",
        email: "Email",
        phone: "Phone"
      },
      languages: {
        title: "Languages",
        switchTo: "Switch to {{lang}}",
        ar: "Arabic - Native",
        fr: "French - Fluent",
        en: "English - Intermediate",
        de: "German - Basic"
      },
      skills: {
        i18n: "Internationalization"
      }
    }
  },
  de: {
    translation: {
      hero: {
        title: "Hallo, ich bin Nabil Ettihadi",
        description: "Java-Entwickler mit Leidenschaft für Webentwicklung und neue Technologien. Spezialisiert auf Spring Boot, Laravel und Vue.js.",
        contactBtn: "Kontaktieren Sie mich",
        downloadCV: "Lebenslauf herunterladen"
      },
      nav: {
        about: "Über mich",
        experience: "Erfahrung",
        projects: "Projekte",
        contact: "Kontakt"
      },
      about: {
        title: "Über mich",
        description: "Als leidenschaftlicher Webentwickler und Technologie-Enthusiast bin ich ein Full-Stack-Entwickler mit fundiertem Informatik-Hintergrund. Mein akademischer Werdegang und praktische Projekte haben es mir ermöglicht, besondere Expertise in Java und Spring Boot sowie in moderner Webentwicklung zu entwickeln.",
        frontend: {
          title: "Frontend-Entwickler",
          description: "HTML5, CSS3, Sass, JavaScript, React, Angular, TailwindCSS, Bootstrap, i18n"
        },
        backend: {
          title: "Backend-Entwickler",
          description: "PHP, Laravel, Java, Spring Boot, RESTful APIs"
        },
        ui: {
          title: "Design",
          description: "UML, Merise, Agile (Scrum, Kanban), Jira, Trello"
        }
      },
      experience: {
        title: "Erfahrung",
        education: "Ausbildung",
        positions: {
          geerd: {
            title: "Full-Stack Webentwickler - Praktikum",
            company: "GEERD",
            period: "05/2024 - 07/2024"
          },
          youcode: {
            title: "Full-Stack Webentwicklung",
            company: "Youcode Safi - UM6P",
            period: "2023 - laufend"
          }
        },
        education: {
          bac: {
            title: "Abitur in Mathematik",
            option: "B BIOF",
            school: "Technisches Gymnasium Alkhawarizmi - Safi",
            period: "2020"
          },
          university: {
            title: "Mathematik und Informatik",
            school: "Fakultät für Interdisziplinäre Studien SAFI",
            period: "2020 - 2023"
          },
          certificate: {
            title: "Zertifikat für Künstliche Intelligenz",
            organization: "MoroccoAI",
            school: "Fakultät für Interdisziplinäre Studien SAFI",
            period: "2022"
          }
        }
      },
      projects: {
        title: "Projekte",
        viewDemo: "Demo",
        viewCode: "Code",
        citronix: {
          title: "Citronix",
          description: "Verwaltungsanwendung für eine Zitronenfarm zur Verfolgung von Produktion, Ernte und Verkauf mit optimierter Baumproduktivitätsverwaltung."
        },
        cch: {
          title: "CCH API",
          description: "REST-API für die Verwaltung von Radrennen, einschließlich Team-, Fahrer-, Rennen- und Ergebnisverwaltung."
        },
        itlens: {
          title: "ITLens",
          description: "Fortgeschrittenes Umfrageverwaltungssystem mit hierarchischer Umfrageerstellung und Echtzeit-Analyse."
        }
      },
      contact: {
        title: "Kontakt",
        subtitle: "Kontaktieren Sie mich gerne!",
        email: "E-Mail",
        phone: "Telefon"
      },
      languages: {
        title: "Sprachen",
        switchTo: "Zu {{lang}} wechseln",
        ar: "Arabisch - Muttersprache",
        fr: "Französisch - Fließend",
        en: "Englisch - Mittelstufe",
        de: "Deutsch - Grundkenntnisse"
      },
      skills: {
        i18n: "Internationalisierung"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 