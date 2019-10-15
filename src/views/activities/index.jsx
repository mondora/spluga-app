import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { PageContainer } from "./styled";
import ActivityForm from "../../components/activityForm";
import { getGoals } from "../../actions/goals";
import { addActivityUser, addActivityCompany } from "../../actions/activities";
import { getCompany } from "../../actions/companies";

export const Activities = ({
    auth,
    company,
    getCompany,
    getGoals,
    addActivityUser,
    addActivityCompany,
    goals,
    activitiesUser
}) => {
    useEffect(() => {
        if (!getGoals.started) {
            getGoals({});
        }
    }, [getGoals]);

    useEffect(() => {
        if (!getCompany.started) {
            getCompany({});
        }
    }, [getCompany]);

    const handleSubmit = data => {
        const companyId = company && company.result ? company.result._id : null;
        const goalKey = data ? data.goal : null;
        const goal = goals.filter(goal => goal.key === goalKey)[0];
        const impact = goal ? goal.impact : null;
        addActivityUser(data, auth.currentUser, companyId, impact);
        addActivityCompany(data, auth.currentUser, companyId, impact);
    };

    const result = activitiesUser ? activitiesUser.result : null;

    return (
        <PageContainer>
            <ActivityForm goals={goals} onSubmit={handleSubmit} result={result} />
        </PageContainer>
    );
};

Activities.propTypes = {
    auth: PropTypes.object,
    getGoals: PropTypes.func,
    getCompany: PropTypes.func,
    activitiesUser: PropTypes.object
};

const mapStateToProps = state => ({
    auth: state.auth,
    goals: state.getGoals.goals,
    company: state.getCompany,
    activitiesUser: state.addActivityUser
});

export default connect(
    mapStateToProps,
    { getGoals, getCompany, addActivityUser, addActivityCompany }
)(Activities);
