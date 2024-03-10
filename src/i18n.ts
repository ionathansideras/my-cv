// Import necessary modules
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// Import language resources
import el from "./lang/el.json";
import en from "./lang/en.json";

// Initialize i18next with the initReactI18next module
i18n.use(initReactI18next) // Pass in the i18n instance to initReactI18next
    .init({
        resources: {
            // Define the resources for the 'el' language
            el: {
                translation: el,
            },
            // Define the resources for the 'en' language
            en: {
                translation: en,
            },
            // Add more languages as needed
        },
        lng: "el", // Set the default language to 'el'
        fallbackLng: "en", // Set the fallback language to 'en'

        interpolation: {
            escapeValue: false, // React already escapes by default
        },
    });

// Define your supported languages
const languages = ["en", "el"]; // Add more languages as needed

// Export the initialized i18n instance
export default i18n;
export { languages };
