import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import tr from "./tr.json";

const resources = {
  tr: tr,
  en: en,
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: "en",
});

export default i18next;
