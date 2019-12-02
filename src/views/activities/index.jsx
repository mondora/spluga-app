import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { PageContainer } from "./styled";
import ActivityForm from "../../components/activityForm";
import { getGoals } from "../../actions/goals";
import { addActivity } from "../../actions/activities";
import { getCompany } from "../../actions/companies";

export const Activities = ({ auth, company, getCompany, getGoals, addActivity, goals, activities }) => {
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
        const companyId = company && company.result ? company.result._id.toString() : null;
        const goalKey = data ? data.goal : null;
        const goal = goals.filter(goal => goal.key === goalKey)[0];
        const impact = goal ? goal.impact : null;
        addActivity(data, auth.currentUser, companyId, impact);
    };

    const result = activities ? activities.result : null;

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
    activities: PropTypes.object
};

const mapStateToProps = state => ({
    auth: state.auth,
    goals: state.getGoals.goals,
    company: state.getCompany,
    activities: state.addActivity
});

export default connect(mapStateToProps, { getGoals, getCompany, addActivity })(Activities);
