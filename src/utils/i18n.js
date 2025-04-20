import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Star } from "react-feather";
import { initReactI18next, Trans } from "react-i18next";


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
            },
        },
    },
    interpolation: {
        escapeValue: false // React already does escaping
    }
});
