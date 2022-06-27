import { initReactI18next } from "react-i18next";

import i18n from "i18next";
import detector from "i18next-browser-languagedetector";

import en from "../locales/en.json";
import ja from "../locales/ja.json";

i18n
  // .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en,
      ja,
    },
    // Comment: This is for test.
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
