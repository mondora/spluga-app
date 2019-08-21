import React, { useEffect, useMemo } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { IntlProvider } from "react-intl";

import { Route } from "react-router-dom";
import { getMessagesFromLocale } from "../i18n";
import Root from "./root";
import "moment/locale/it";
import PropTypes from "prop-types";
import { login } from "../actions/auth";

const Routes = ({ auth, login }) => {
    useEffect(() => {
        if (!auth.currentUser) {
            login();
        }
    }, [auth.currentUser, login]);

    const locale =
        (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage || "en-US";

    const messages = useMemo(() => getMessagesFromLocale(locale), [locale]);

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

const composedHoc = compose(
    connect(
        mapStateToProps,
        actions
    )
);

export default composedHoc(Routes);
