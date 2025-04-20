import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Star } from "react-feather";
import { initReactI18next, Trans } from "react-i18next";
import About from "../components/About";


i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: "de", 
    resources: {
        en: {
            translation: {
                heroheaderOne: "Your Pathway to",
                heroheaderTwo: "Global Opportunities",
                headerContent: "Expert migration consulting and tailored labor solutions with a human touch",
                StartYourJourney: "Start Your Journey",
                Countries: "Countries",
                SatisfactionRate: "Satisfaction Rate",
                Support: "Support",
                Transparency: "Transparency",
                Experience: "Years of Experience",
                AboutUs: "About Us",
                AboutUsContent: "We believe work should be fulfilling and collaborative, creating value for both employers and employees.",
                GlobalSolutions: "Global Solutions",
                GlobalSolutionsContent: "Customized consulting and creative solutions spanning 25+ countries",
                CollaborativeApproach: "Collaborative Approach",
                CollaborativeApproachContent: "Promoting genuine collaboration between people and companies",
                SecureOpportunities: "Secure Opportunities",
                SecureOpportunitiesContent: "Developing secure, enriching jobs tailored to individual needs",
                OurCommitment: "Our Commitment",
                OurCommitmentContent: "Quality through transparency, reliability, and flexible solutions",
            },
        },
        fr: {
            translation: {
                heroheaderOne: "Votre passerelle vers",
                heroheaderTwo: "des opportunités mondiales",
                headerContent: "Consultation en migration experte et solutions de travail sur mesure avec une touche humaine",
                StartYourJourney: "Commencez votre voyage",
                Countries: "Pays",
                SatisfactionRate: "Taux de satisfaction",
                Support: "Soutien",
                Transparency: "Transparence",
                Experience: "Années d'expérience",
                AboutUs: "À propos de nous",
                AboutUsContent: "Nous croyons que le travail doit être épanouissant et collaboratif, créant de la valeur pour les employeurs et les employés.",
                GlobalSolutions: "Solutions mondiales",
                GlobalSolutionsContent: "Consultation personnalisée et solutions créatives couvrant plus de 25 pays",
                CollaborativeApproach: "Approche collaborative",
                CollaborativeApproachContent: "Favoriser une collaboration authentique entre les personnes et les entreprises",
                SecureOpportunities: "Opportunités sécurisées",
                SecureOpportunitiesContent: "Développer des emplois sécurisés et enrichissants adaptés aux besoins individuels",
                OurCommitment: "Notre engagement",
                OurCommitmentContent: "Qualité grâce à la transparence, à la fiabilité et à des solutions flexibles",
            },
        },
        de: {
            translation: {
                heroheaderOne: "Ihr Weg zu",
                heroheaderTwo: "globalen Möglichkeiten",
                headerContent: "Expertenberatung zur Migration und solutions de travail sur mesure avec une touche humaine",
                StartYourJourney: "Beginnen Sie Ihre Reise",
                Countries: "Länder",
                SatisfactionRate: "Zufriedenheitsquote",
                Support: "Unterstützung",
                Transparency: "Transparenz",
                Experience: "Jahre Erfahrung",
                AboutUs: "Über uns",
                AboutUsContent: "Wir glauben, dass Arbeit erfüllend und kollaborativ sein sollte und sowohl für Arbeitgeber als auch für Arbeitnehmer einen Mehrwert schafft.",
                GlobalSolutions: "Globale Lösungen",
                GlobalSolutionsContent: "Maßgeschneiderte Beratung und kreative Lösungen in über 25 Ländern",
                CollaborativeApproach: "Kollaborativer Ansatz",
                CollaborativeApproachContent: "Förderung einer echten Zusammenarbeit zwischen Menschen und Unternehmen",
                SecureOpportunities: "Sichere Möglichkeiten",
                SecureOpportunitiesContent: "Entwicklung sicherer, bereichernder Arbeitsplätze, die auf individuelle Bedürfnisse zugeschnitten sind",
                OurCommitment: "Unser Engagement",
                OurCommitmentContent: "Qualität durch Transparenz, Zuverlässigkeit und flexible Lösungen",
            },
        },
    },
    interpolation: {
        escapeValue: false // React already does escaping
    }
});
