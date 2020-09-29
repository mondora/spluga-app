import React from "react";
import { PropTypes } from "prop-types";
import moment from "moment";
import { FormattedMessage } from "react-intl";

import {
    CardContainer,
    CardTitle,
    CardDescription,
    CardActualProgress,
    CardPercentageProgress,
    CardDate,
    TopElements,
    BottomElements,
    Wave,
    CardBackground,
} from "./styled";

export const TargetCard = ({ target, goal }) => {
    const { name, value, actual, startDate, description, endDate } = target;
    const percent = parseInt((actual / value) * 100) > 100 ? 100 : parseInt((actual / value) * 100);

    return (
        <CardBackground>
            <Wave percent={percent} />
            <CardContainer>
                <TopElements>
                    <CardTitle>{name.toUpperCase()}</CardTitle>
                    <CardDescription>{description.toLowerCase()}</CardDescription>
                </TopElements>
                <BottomElements>
                    <CardDate>
                        {moment(startDate).format("YYYY-MM-DD") + " -> " + moment(endDate).format("YYYY-MM-DD")}
                    </CardDate>
                    <CardPercentageProgress>{percent + " %"}</CardPercentageProgress>
                    <CardActualProgress>
                        {actual + " "}
                        <FormattedMessage id={"general.goals.unit." + goal.unit} />
                    </CardActualProgress>
                </BottomElements>
            </CardContainer>
        </CardBackground>
    );
};

TargetCard.defaultProps = {
    target: { name: "", description: "", actual: 0, value: 0 },
    goal: { unit: "km" },
};

TargetCard.propTypes = {
    target: PropTypes.object,
    goal: PropTypes.object,
};

export default TargetCard;
