import React from "react";
import PropTypes from "prop-types";

import { StepAction } from "../styled";
import { FormattedMessage } from "react-intl";

//export function for testing pourpose
export const StepSummary = ({ target }) => {
    const { name, description, stakeholder, goal, value, startDate, endDate } = target;
    return (
        <StepAction>
            <b>
                <FormattedMessage id="general.name" />:
            </b>
            {name}
            <br />
            <b>
                <FormattedMessage id="general.description" />:
            </b>
            {description}
            <br />
            <b>
                <FormattedMessage id="general.stakeholder" />:
            </b>
            {stakeholder}
            <br />
            <b>
                <FormattedMessage id="c-splugaNewTarget.summary.goal" />:
            </b>
            {goal}
            <br />
            <b>
                <FormattedMessage id="c-splugaNewTarget.type.value" />
            </b>
            :{value}
            <br />
            <b>
                <FormattedMessage id="c-splugaNewTarget.summary.startDate" />:
            </b>
            {startDate}
            <br />
            <b>
                <FormattedMessage id="c-splugaNewTarget.summary.endDate" />:
            </b>
            {endDate}
        </StepAction>
    );
};

StepSummary.propTypes = {
    target: PropTypes.object.isRequired
};

export default StepSummary;
