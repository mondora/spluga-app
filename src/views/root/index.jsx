import React from "react";
import { PropTypes } from "prop-types";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

// import NavBar from "../../components/navbar";
import Header from "../../components/header";
import Targets from "../targets";
import Activities from "../activities";
import Profile from "../profile";
import Companies from "../companies";
import Apps from "../apps";
import Team from "../team";
import Sdgs from "../sdgs";

import { Container, Page, PageContainer } from "./styled.js";
import SideBar from "../../components/sidebar";

export const Root = ({ match, auth }) => {
    return (
        <PageContainer>
            <SideBar />

            <Container>
                <Header user={auth.currentUser} />

                <Page>
                    <Switch>
                        <Route exact path="/" component={Profile} />
                        <Route path="/apps" component={Apps} />
                        <Route path="/companies" component={Companies} />
                        <Route path="/targets" component={Targets} />
                        <Route path="/team" component={Team} />
                        <Route path="/activities" component={Activities} />
                        <Route path="/sdgs" component={Sdgs} />
                    </Switch>
                </Page>
            </Container>
        </PageContainer>
    );
};

Root.PropType = {
    auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(Root);
