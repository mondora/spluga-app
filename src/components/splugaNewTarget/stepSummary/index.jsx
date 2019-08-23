import React from "react";
import PropTypes from "prop-types";

import { Descriptions } from "antd";
import { StepAction } from "../styled";
import { FormattedMessage } from "react-intl";

//export function for testing pourpose
export const StepSummary = ({ name, description, stakeholder, goal, targetOrLimitValue, startDate, endDate }) => {
    return (
        <React.Fragment>
            <StepAction>
                <Descriptions title={<FormattedMessage id="newTarget.summary.title" />}>
                    <Descriptions.Item label={<FormattedMessage id="newTarget.summary.name" />}>
                        {name}
                    </Descriptions.Item>
                    <Descriptions.Item label={<FormattedMessage id="newTarget.summary.description" />}>
                        {description}
                    </Descriptions.Item>
                    <Descriptions.Item label={<FormattedMessage id="newTarget.summary.stakeholder" />}>
                        {stakeholder}
                    </Descriptions.Item>
                    <Descriptions.Item label={<FormattedMessage id="newTarget.summary.goal" />}>
                        {goal}
                    </Descriptions.Item>
                    <Descriptions.Item label={<FormattedMessage id="newTarget.summary.target" />}>
                        {targetOrLimitValue}
                    </Descriptions.Item>
                    <Descriptions.Item label={<FormattedMessage id="newTarget.summary.startDate" />}>
                        {startDate}
                    </Descriptions.Item>
                    <Descriptions.Item label={<FormattedMessage id="newTarget.summary.endDate" />}>
                        {endDate}
                    </Descriptions.Item>
                </Descriptions>
            </StepAction>
        </React.Fragment>
    );
};

StepSummary.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    stakeholder: PropTypes.string,
    goal: PropTypes.string,
    targetOrLimitValue: PropTypes.number,
    startDate: PropTypes.string,
    endDate: PropTypes.string
};

export default StepSummary;
