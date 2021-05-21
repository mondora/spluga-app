import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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

import * as Realm from "realm-web";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Routes = () => {
    const realm = useSelector((state) => state.realm);

    const locale = getUserLocale();
    const messages = getMessagesLocale();
    const path = usePath();

    useEffect(() => {
        Realm.handleAuthRedirect();

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (realm.isLoggedIn) {
            history.push("/");
        }
        console.log("history", history);
        console.log("routes realm", realm);

        // eslint-disable-next-line
    }, [realm.isLoggedIn]);

    var component;
    switch (path) {
        case "/privacy":
            component = Privacy;
            break;
        case "/cookie":
            component = Cookie;
            break;
        default:
            component = realm.currentUser ? Root : Landing;
    }

    return (
        <Container>
            <IntlProvider locale={locale} messages={messages}>
                <Router history={history}>
                    <Route path="/:page?" component={component} realm={realm} />
                </Router>
                <CookieConsent location="bottom" buttonText="ok" cookieName="splugaCookie" expires={150}>
                    <FormattedMessage id="general.cookie.text" />
                </CookieConsent>
            </IntlProvider>
        </Container>
    );
};

export default Routes;
