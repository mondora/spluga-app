import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import { Route } from "react-router-dom";
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

	return (
		<BrowserRouter>
			<Route path="/:page?" component={Root} />
		</BrowserRouter>
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
