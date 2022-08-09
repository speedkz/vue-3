import { createI18n } from "vue-i18n";
import { EN_MESSAGES, PAGES, COMMON, FIELD, ERROR_MESSAGES } from "@/i18n/en";

const messages = {
  en: {
    EN_MESSAGES,
    PAGES,
    COMMON,
    FIELD,
    ERROR_MESSAGES,
  },
  ja: {
    message: {
      hello: "こんにちは、世界",
    },
  },
};

// 2. Create i18n instance with options
const i18n = createI18n({
  locale: "en", // set locale
  fallbackLocale: "en", // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});

export default i18n;
