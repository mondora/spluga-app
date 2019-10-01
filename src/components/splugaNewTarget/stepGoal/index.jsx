import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { SelectStringField } from "@mondora/arc/antd/SelectField";
import { StepAction } from "../styled";
import { getGoals } from "../../../actions/goals";
import NumberField from "@mondora/arc/antd/NumberField";
import { FormattedMessage } from "react-intl";

export const StepGoal = ({ onChange, target, getGoals, goals }) => {
    useEffect(() => {
        if (!getGoals.started) {
            getGoals({});
        }
    }, [getGoals]);

    const handleGoalChange = (e, value) => {
        onChange({ ...target, goal: value });
    };

    const handleOnChangeValue = (e, value, ...name) => {
        onChange({ ...target, value: value });
    };

    var options = [];
    if (goals) {
        goals.forEach(goal => {
            options.push({ value: goal.key, label: goal.key });
        });
    }
    const value = target.value || 0;

    return (
        <StepAction>
            Goal
            <SelectStringField name="goal" value={target.goal} onChange={handleGoalChange} options={options} />
            <FormattedMessage id="c-splugaNewTarget.type.value" />
            <NumberField name="value" value={value} onChange={handleOnChangeValue} />
        </StepAction>
    );
};

StepGoal.propTypes = {
    onChange: PropTypes.func,
    target: PropTypes.object,
    getGoals: PropTypes.func
};

const mapStateToProps = state => ({
    goals: state.getGoals.goals,
    getGoalsStatus: state.getApps.status
});

export default connect(
    mapStateToProps,
    { getGoals }
)(StepGoal);
