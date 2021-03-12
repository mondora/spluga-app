import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { IntlProvider, FormattedMessage } from "react-intl";
import { checkLogin } from "../actions/auth";
import { compose } from "redux";
import CookieConsent from "react-cookie-consent";
import { usePath } from "hookrouter";

import { getMessagesLocale, getUserLocale } from "../i18n";
import { Container } from "./styled.js";

import Root from "./root";
import PropTypes from "prop-types";
import Landing from "./landing";
import Cookie from "./cookie";
import Privacy from "./privacy";

export const Routes = ({ auth, checkLogin }) => {
    useEffect(() => {
        checkLogin();
    }, [checkLogin]);

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
            component = !auth.currentUser ? Landing : Root;
    }

    return (
        <Container>
            <IntlProvider locale={locale} messages={messages}>
                <BrowserRouter>
                    <Route path="/:page?" component={component} />
                </BrowserRouter>
                <CookieConsent location="bottom" buttonText="ok" cookieName="splugaCookie" expires={150}>
                    <FormattedMessage id="general.cookie.text" />
                </CookieConsent>
            </IntlProvider>
        </Container>
    );
};

Routes.propTypes = {
    auth: PropTypes.object.isRequired,
    checkLogin: PropTypes.func,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

const composedHoc = compose(connect(mapStateToProps, { checkLogin }));

export default composedHoc(Routes);
