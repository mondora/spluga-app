import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { compose } from "redux";
import { injectIntl } from "react-intl";
import { Spin, notification } from "antd";

import { getCompany } from "../../actions/companies";
import { getUser, addUser } from "../../actions/users";
import { getGoals } from "../../actions/goals";
import { getActivities } from "../../actions/activities";

import { ActivityResult } from "../../components/activityResult";
import SplugaCard from "../../components/splugaCard";
import { SplugaTips } from "../../components/splugaTips";
import SDGImpactChart from "../../components/sdgImpactChart";

import { PageContainer, SpinContainer, FieldLeft, FieldRight, FieldCenter } from "./styled";

const goals = [
    "bikeTravel",
    "busTravel",
    "trainTravel",
    "paperSaved",
    "training",
    "co2Saved",
    "waterSaved",
    "openSourceCode",
    "plasticSaved",
    "treeSaved",
];
const activitiesMock = Array.from({ length: Math.floor(Math.random() * 70) }, () => ({
    date: new Date(
        new Date("2020-01-01").getTime() +
            Math.random() * (new Date("2020-12-31").getTime() - new Date("2020-01-01").getTime())
    ),
    goal: goals[Math.floor(Math.random() * goals.length)],
}));

export const Profile = ({
    auth,
    activities,
    getCompany,
    getActivities,
    getUser,
    addUser,
    user,
    company,
    target,
    intl,
    getGoals,
    goals,
}) => {
    useEffect(() => {
        getCompany({});
    }, [getCompany]);

    useEffect(() => {
        getGoals({});
    }, [getGoals]);

    useEffect(() => {
        getUser({});
    }, [getUser]);

    useEffect(() => {
        getActivities({ userId: auth.currentUser.id });
    }, [getActivities, auth]);

    useEffect(() => {
        const { ended, error, errorInfo } = target;
        if (ended || error) {
            const type = error ? "error" : "info";
            var id = error ? errorInfo.message : "v-companies.target.success";
            const message = intl.formatMessage({ id, defaultMessage: id });
            notify(type, message);
        }
    }, [target, intl]);

    const notify = (type, message) => {
        notification[type]({
            message: type,
            description: message,
        });
    };

    const selectedUser = user ? user.result : null;
    const status = user ? user.status : { ended: true };

    if (status.ended && !selectedUser) {
        addUser(auth.currentUser);
    }

    const loading = company && company.status ? company.status.started : true;
    const activitiesList = activities ? activities.activities : [];
    const goalsList = goals ? goals.goals : [];

    return !loading ? (
        <PageContainer>
            <FieldLeft>
                <SplugaCard auth={auth} type={"user"} />
            </FieldLeft>
            <FieldRight>
                <SDGImpactChart activities={activitiesMock} />
            </FieldRight>
            <FieldCenter>
                <ActivityResult activities={activitiesList} goals={goalsList} />
            </FieldCenter>
            <SplugaTips isCompany={false} />
        </PageContainer>
    ) : (
        <SpinContainer>
            <Spin size="large" />
        </SpinContainer>
    );
};
Profile.propTypes = {
    auth: PropTypes.object.isRequired,
    activities: PropTypes.object,
    company: PropTypes.object,
    user: PropTypes.object,
    target: PropTypes.object,
    getCompany: PropTypes.func,
    getUser: PropTypes.func,
    addUser: PropTypes.func,
    getGoals: PropTypes.func,
    goals: PropTypes.object,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    activities: state.getActivities,
    company: state.getCompany,
    user: state.getUser,
    goals: state.getGoals,
    target: state.addTarget.status,
});

const composedHoc = compose(connect(mapStateToProps, { getCompany, getUser, addUser, getGoals, getActivities }));

export default injectIntl(composedHoc(Profile));
