import React from "react";
import PropTypes from "prop-types";

import { StepAction, GridRow, GridTitle, GridValue } from "../styled";
import { FormattedMessage } from "react-intl";

//export function for testing pourpose
export const StepSummary = ({ target }) => {
    const { name, description, stakeholder, goal, value, startDate, endDate } = target;
    return (
        <StepAction>
            <FormattedMessage id="c-splugaNewTarget.summary" />
            <br />
            <br />
            <GridRow>
                <GridTitle>
                    <FormattedMessage id="general.name" />:
                </GridTitle>
                <GridValue>{name}</GridValue>

                <GridTitle>
                    <FormattedMessage id="general.description" />:
                </GridTitle>
                <GridValue>{description}</GridValue>

                <GridTitle>
                    <FormattedMessage id="general.stakeholder" />:
                </GridTitle>
                <GridValue>{stakeholder}</GridValue>

                <GridTitle>
                    <FormattedMessage id="c-splugaNewTarget.summary.goal" />:
                </GridTitle>
                <GridValue>{goal}</GridValue>

                <GridTitle>
                    <FormattedMessage id="c-splugaNewTarget.type.value" />:
                </GridTitle>
                <GridValue>{value}</GridValue>

                <GridTitle>
                    <FormattedMessage id="c-splugaNewTarget.summary.startDate" />:
                </GridTitle>
                <GridValue>{startDate}</GridValue>

                <GridTitle>
                    <FormattedMessage id="c-splugaNewTarget.summary.endDate" />:
                </GridTitle>
                <GridValue>{endDate}</GridValue>
            </GridRow>
        </StepAction>
    );
};

StepSummary.propTypes = {
    target: PropTypes.object.isRequired
};

export default StepSummary;
