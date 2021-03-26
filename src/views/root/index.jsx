import React from "react";
import { useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import { Switch, Route } from "react-router-dom";

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
import { logOut } from "../../actions/auth";

export const Root = ({ match, auth }) => {
    const dispatch = useDispatch();

    return (
        <PageContainer>
            <SideBar currentPage={match.url} />

            <Container>
                <Header user={auth.currentUser} onClick={() => dispatch(logOut())} />

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
    match: PropTypes.object,
};

export default Root;
