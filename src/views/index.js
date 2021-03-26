import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { IntlProvider, FormattedMessage } from "react-intl";
import CookieConsent from "react-cookie-consent";
import { usePath } from "hookrouter";

import { getMessagesLocale, getUserLocale } from "../i18n";
import { Container } from "./styled.js";

import Root from "./root";
import Landing from "./landing";
import Cookie from "./cookie";
import Privacy from "./privacy";
const Routes = () => {
    const auth = useSelector((state) => state.auth);
    const locale = getUserLocale();
    const messages = getMessagesLocale();
    const path = usePath();

    var component;
    switch (path) {
        case "/privacy":
            component = Privacy;
            break;
        case "/cookie":
            component = Cookie;
            break;
        default:
            component = auth.currentUser ? Root : Landing;
    }

    return (
        <Container>
            <IntlProvider locale={locale} messages={messages}>
                <BrowserRouter>
                    <Route path="/:page?" component={component} auth={auth} />
                </BrowserRouter>
                <CookieConsent location="bottom" buttonText="ok" cookieName="splugaCookie" expires={150}>
                    <FormattedMessage id="general.cookie.text" />
                </CookieConsent>
            </IntlProvider>
        </Container>
    );
};

export default Routes;
