import React from "react";
import { Switch } from "react-router-dom";
import NavBar from "../../components/navbar";
import Header from "../../components/header";
import Activities from "../activities";
import { Route } from "react-router-dom";

import Home from "../home";
import Companies from "../companies";
import Objectives from "../objectives";
import Goals from "../goals";
import { connect } from "react-redux";
import { Container, Menu, Page, PageContainer } from "./styled.js";

const Root = ({ match, auth }) => (
	<PageContainer>
		<Header user={auth.currentUser} />
		<Container>
			<Menu>
				<NavBar currentPage={match.params.page} />
			</Menu>
			<Page>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/companies" component={Companies} />
					<Route path="/objectives" component={Objectives} />
					<Route path="/activities" component={Activities} />
					<Route path="/goals" component={Goals} />
				</Switch>
			</Page>
		</Container>
	</PageContainer>
);

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Root);
