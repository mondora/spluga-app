import it from "./it-IT";
import en from "./en-US";

export const availableLocalisations = {
    "en-US": en,
    "it-IT": it
};

export const getUserLocale = () =>
    (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage || "en-US";

export const getMessagesLocale = (locale = getUserLocale()) => {
    return availableLocalisations[locale] || it;
};

export const translateMessage = key => getMessagesLocale()[key] || key;
