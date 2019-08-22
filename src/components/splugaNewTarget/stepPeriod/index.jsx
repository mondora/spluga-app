import React from "react";
import PropTypes from "prop-types";

import { StepAction } from "../styled";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

//export function for testing pourpose
export const StepPeriod = ({ onStartDateChange, onEndDateChange }) => {
    const handleChangeDate = (...date) => {
        onStartDateChange(date[1][0]);
        onEndDateChange(date[1][1]);
    };

    return (
        <StepAction>
            <div style={{ margin: 8 }}>Enter your target period:</div>
            <RangePicker onChange={handleChangeDate} />
        </StepAction>
    );
};

StepPeriod.propTypes = {
    onStartDateChange: PropTypes.func,
    onEndDateChange: PropTypes.func
};

export default StepPeriod;
