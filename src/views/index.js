import React from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";

import { Route } from "react-router-dom";
import { getMessagesLocale, getUserLocale } from "../i18n";
import Root from "./root";
import PropTypes from "prop-types";
import Landing from "./landing";

export const Routes = ({ auth }) => {
    const locale = getUserLocale();
    const messages = getMessagesLocale();

    const component = !auth.currentUser ? Landing : Root;

    return (
        <IntlProvider locale={locale} messages={messages}>
            <BrowserRouter>
                <Route path="/:page?" component={component} />
            </BrowserRouter>
        </IntlProvider>
    );
};

Routes.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Routes);
