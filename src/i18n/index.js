import store from "../reducers";
import it from "./it";
import en from "./en";

// This object's keys must be an ISO language code (ex: it, it-IT, en-US)
const availableLocalisations = {
    en,
    it
};

const getUserLocale = () => store; //store.getState().user.user && store.getState().user.user.profile.language;

/**
 * Given the user's locale, returns the appropriate translated messages.
 * If the provided locale has no matching translations, defaults to italian.
 * @param {string} locale The user's locale expressed as an ISO language code (ex: it, it-IT, en-US)
 */
function getMessagesFromLocale(locale = getUserLocale()) {
    /*if (locale) {
    const availableLocaleKeys = Object.keys(availableLocalisations);

    if (availableLocaleKeys.includes(locale)) {
      return availableLocalisations[locale];
    } else if (availableLocaleKeys.includes(locale.split("-")[0])) {
      return availableLocalisations[locale.split("-")[0]];
    }
  }*/

    return availableLocalisations["it"];
}

const translateMessage = key => getMessagesFromLocale()[key] || key;
const translateMessageWithParams = (key, values) => {
    let msg = getMessagesFromLocale()[key] || key;

    Object.keys(values).forEach(valueKey => {
        msg = msg.replace(`{${valueKey}}`, values[valueKey]);
    });

    return msg;
};

export { getMessagesFromLocale, translateMessage, translateMessageWithParams };
