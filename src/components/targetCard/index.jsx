import React from "react";
import { PropTypes } from "prop-types";
import { Progress } from "antd";
import moment from "moment";
import { FormattedMessage } from "react-intl";

import { CardContainer, CardTitle, CardDescription, CardProgress, CardDate } from "./styled";

export const TargetCard = ({ target, goal }) => {
    const { name, value, actual, startDate, description, endDate } = target;
    const percent = parseInt((actual / value) * 100);

    const expired = moment().diff(endDate, "days") > 0;
    const exception = actual < value;
    const status = expired && exception ? "exception" : null;
    return (
        <CardContainer>
            <CardTitle> {name}</CardTitle>
            <CardDescription>{description}</CardDescription>

            <CardProgress>
                <Progress type="circle" percent={percent} status={status} />
            </CardProgress>
            <CardDescription>
                {actual + " "}
                <FormattedMessage id={"general.goals.unit." + goal.unit} />
            </CardDescription>
            <CardDate>
                {moment(startDate).format("YYYY-MM-DD") + " -> " + moment(endDate).format("YYYY-MM-DD")}
            </CardDate>
        </CardContainer>
    );
};

TargetCard.defaultProps = {
    target: { name: "", description: "", actual: 0, value: 0 },
    goal: { unit: "km" }
};

TargetCard.propTypes = {
    target: PropTypes.object,
    goal: PropTypes.object
};

export default TargetCard;
