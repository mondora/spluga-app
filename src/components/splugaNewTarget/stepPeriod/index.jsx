import React from "react";
import PropTypes from "prop-types";

import { StepAction } from "../styled";
import { FormattedMessage } from "react-intl";
import ISO8601DayField from "@mondora/arc/antd/ISO8601DayField";

//export function for testing pourpose
export const StepPeriod = ({ onStartDateChange, onEndDateChange }) => {
    const handleChangeStartDate = (e, date, ...name) => {
        const startDate = Object.values(date);

        //console.log("start date", startDate.join(""));
        onStartDateChange(startDate.join(""));
    };

    const handleChangeEndDate = (e, date, ...name) => {
        const startDate = Object.values(date);
        // console.log("start date", startDate.join(""));
        onEndDateChange(startDate.join(""));
    };

    return (
        <StepAction>
            <div style={{ margin: 8 }}>
                <FormattedMessage id="c-splugaNewTarget.period" />
            </div>
            <ISO8601DayField name="date.startDate" onChange={handleChangeStartDate} />
            <ISO8601DayField name="date.endDate" onChange={handleChangeEndDate} />
        </StepAction>
    );
};

StepPeriod.propTypes = {
    onStartDateChange: PropTypes.func,
    onEndDateChange: PropTypes.func
};

export default StepPeriod;
