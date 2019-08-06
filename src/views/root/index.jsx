import React from "react";
import { Switch } from "react-router-dom";
import NavBar from "../../components/navbar";
import Header from "../../components/header";
import Activities from "../activities";
import { Route } from "react-router-dom";

import Home from "../home";
import Companies from "../companies";
import Targets from "../targets";
import Goals from "../goals";
import Apps from "../apps";
import { connect } from "react-redux";
import { Container, Menu, Page, PageContainer } from "./styled.js";
import { PropTypes } from "prop-types";

//auth mappa l'oggetto dello store alla Root
export const Root = ({ match, auth }) => (
  <PageContainer>
    <Header user={auth.currentUser} />
    <Container>
      <Menu>
        <NavBar currentPage={match.params.page} />
      </Menu>
      <Page>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/apps" component={Apps} />
          <Route path="/companies" component={Companies} />
          <Route path="/targets" component={Targets} />
          <Route path="/activities" component={Activities} />
          <Route path="/goals" component={Goals} />
        </Switch>
      </Page>
    </Container>
  </PageContainer>
);

Root.PropType = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Root);
