import React from "react";
import { Descriptions } from "antd";

/*
    description (summary)
    button confirm --> spluga result (or message) 
    reject-->return to step1
    */

const Step6 = ({ name, description, stakeholder, goal, targetOrLimitValue, startDate, endDate }) => {
    return (
        <React.Fragment>
            <Descriptions title="Create Target Summary">
                <Descriptions.Item label={"name"}> {name} </Descriptions.Item>
                <Descriptions.Item label={"description"}> {description} </Descriptions.Item>
                <div />
                <Descriptions.Item label={"stakeholder"}> {stakeholder} </Descriptions.Item>
                <Descriptions.Item label={"goal"}> {goal} </Descriptions.Item>
                <Descriptions.Item label={"limit/target"}> {targetOrLimitValue} </Descriptions.Item>
                <Descriptions.Item label={"start date"}> {startDate} </Descriptions.Item>
                <Descriptions.Item label={"end date"}>{endDate} </Descriptions.Item>
            </Descriptions>
            <div />
            <button>confirm</button>
        </React.Fragment>
    );
};

export default Step6;
