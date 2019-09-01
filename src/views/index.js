import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";

import { Route } from "react-router-dom";
import { getMessagesLocale, getUserLocale } from "../i18n";
import Root from "./root";
import PropTypes from "prop-types";
import { login } from "../actions/auth";

export const Routes = ({ auth, login }) => {
    useEffect(() => {
        if (!auth.currentUser) {
            login();
        }
    }, [auth.currentUser, login]);

    const locale = getUserLocale();
    const messages = getMessagesLocale();

    console.log({ locale });
    console.log({ messages });

    return (
        <IntlProvider locale={locale} messages={messages}>
            <BrowserRouter>
                <Route path="/:page?" component={Root} />
            </BrowserRouter>
        </IntlProvider>
    );
};

Routes.propTypes = {
    auth: PropTypes.object.isRequired,
    login: PropTypes.func
};

const actions = {
    login
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    actions
)(Routes);
