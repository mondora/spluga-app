import React from "react";
import PropTypes from "prop-types";

import { Descriptions } from "antd";
import { StepAction } from "../styled";

//export function for testing pourpose
export const Step6 = ({ name, description, stakeholder, goal, targetOrLimitValue, startDate, endDate }) => {
    return (
        <React.Fragment>
            <StepAction>
                <Descriptions title="Create Target Summary">
                    <Descriptions.Item label={"name"}> {name} </Descriptions.Item>
                    <Descriptions.Item label={"description"}> {description} </Descriptions.Item>
                    <Descriptions.Item label={"stakeholder"}> {stakeholder} </Descriptions.Item>
                    <Descriptions.Item label={"goal"}> {goal} </Descriptions.Item>
                    <Descriptions.Item label={"limit/target"}> {targetOrLimitValue} </Descriptions.Item>
                    <Descriptions.Item label={"start date"}> {startDate} </Descriptions.Item>
                    <Descriptions.Item label={"end date"}>{endDate} </Descriptions.Item>
                </Descriptions>
            </StepAction>
        </React.Fragment>
    );
};

Step6.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    stakeholder: PropTypes.string,
    goal: PropTypes.string,
    targetOrLimitValue: PropTypes.number,
    startDate: PropTypes.string,
    endDate: PropTypes.string
};

export default Step6;
