import it from "./it-IT";
import en from "./en-US";
import itPrivacy from "./it-IT-privacy";
import enPrivacy from "./en-US-privacy";
import itCookies from "./it-IT-cookies";
import enCookies from "./en-US-cookies";
import itEmail from "./it-IT-email";
import enEmail from "./en-US-email";

export const availableLocalisations = {
    en: { ...en, ...enPrivacy, ...enCookies, ...enEmail },
    it: { ...it, ...itPrivacy, ...itCookies, ...itEmail },
};

export const getUserLocale = () =>
    (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage || "en-US";

export const getMessagesLocale = (locale = getUserLocale()) => {
    return availableLocalisations[locale] || availableLocalisations.it;
};

export const translateMessage = (key) => {
    return getMessagesLocale()[key] || key;
};
