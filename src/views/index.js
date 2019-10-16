import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import { checkLogin } from "../actions/auth";
import { compose } from "redux";

import { getMessagesLocale, getUserLocale } from "../i18n";
import { Container } from "./styled.js";

import Root from "./root";
import PropTypes from "prop-types";
import Landing from "./landing";

export const Routes = ({ auth, checkLogin }) => {
    useEffect(() => {
        checkLogin({});
    }, [checkLogin]);

    const locale = getUserLocale();
    const messages = getMessagesLocale();

    const component = !auth.currentUser ? Landing : Root;

    return (
        <Container>
            <IntlProvider locale={locale} messages={messages}>
                <BrowserRouter>
                    <Route path="/:page?" component={component} />
                </BrowserRouter>
            </IntlProvider>
        </Container>
    );
};

Routes.propTypes = {
    auth: PropTypes.object.isRequired,
    checkLogin: PropTypes.func
};

const mapStateToProps = state => ({
    auth: state.auth
});

const composedHoc = compose(
    connect(
        mapStateToProps,
        { checkLogin }
    )
);

export default composedHoc(Routes);
