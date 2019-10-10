import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { PageContainer } from "./styled";
import ActivityForm from "../../components/activityForm";
import { getGoals } from "../../actions/goals";
import { addActivity } from "../../actions/activities";
import { getCompany } from "../../actions/companies";

export const Activities = ({ auth, company, getCompany, getGoals, addActivity, goals }) => {
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
        const goal = goals.filter(goal => goal.key === data.goal)[0];
        addActivity(data, auth.currentUser, companyId, goal.impact);
    };

    return (
        <PageContainer>
            <ActivityForm goals={goals} onSubmit={handleSubmit} />
        </PageContainer>
    );
};

Activities.propTypes = {
    auth: PropTypes.object,
    getGoals: PropTypes.func,
    getCompany: PropTypes.func
};

const mapStateToProps = state => ({
    auth: state.auth,
    goals: state.getGoals.goals,
    company: state.getCompany
});

export default connect(
    mapStateToProps,
    { getGoals, getCompany, addActivity }
)(Activities);
