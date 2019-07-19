import React, { useMemo } from "react";
import { addLocaleData, IntlProvider } from "react-intl";
import { LocaleProvider } from "antd";
import itLocaleData from "react-intl/locale-data/it";
import { BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import { getMessagesFromLocale } from "../i18n";
import { Route } from "react-router-dom";
import Root from "./root";
import Activities from "./activities";

import Companies from "./companies";
import Objectives from "./objectives";
import Goals from "./goals";
import NavBar from "../components/navbar";

import it_IT from "antd/lib/locale-provider/it_IT";
import moment from "moment";
import "moment/locale/it";

moment.locale("it");
addLocaleData(itLocaleData);

const Test = ({ match }) => (
	<React.Fragment>
		<NavBar currentPage={match.params.page} />
		<Switch>
			<Route exact path="/" component={Root} />
			<Route path="/companies" component={Companies} />
			<Route path="/objectives" component={Objectives} />
			<Route path="/activities" component={Activities} />
			<Route path="/goals" component={Goals} />
		</Switch>
	</React.Fragment>
);

const Routes = ({ user, userLocale }) => {
	const messages = useMemo(() => getMessagesFromLocale(userLocale), [
		userLocale
	]);
	return (
		<LocaleProvider locale={it_IT}>
			<IntlProvider
				key="it"
				locale="it"
				messages={messages}
				timeZoneName="it-IT">
				<BrowserRouter>
					<Route path="/:page?" component={Test} />
				</BrowserRouter>
			</IntlProvider>
		</LocaleProvider>
	);
};

const mapStateToProps = state => ({
	user: state.user,
	userLocale: "it"
});

const composedHoc = compose(connect(mapStateToProps));

export default composedHoc(Routes);
