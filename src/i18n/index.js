import it from "./it-IT";
import en from "./en-US";
import itPrivacy from "./it-IT-privacy";
import enPrivacy from "./en-US-privacy";
import itCookies from "./it-IT-cookies";
import enCookies from "./en-US-cookies";

export const availableLocalisations = {
    "en-US": { ...en, ...enPrivacy, ...enCookies },
    "it-IT": { ...it, ...itPrivacy, ...itCookies }
};

export const getUserLocale = () =>
    (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage || "en-US";

export const getMessagesLocale = (locale = getUserLocale()) => {
    return availableLocalisations[locale] || it;
};

export const translateMessage = key => getMessagesLocale()[key] || key;
