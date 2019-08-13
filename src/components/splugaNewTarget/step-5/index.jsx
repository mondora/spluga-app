import React from "react";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const Step5 = ({ onStartDateChange, onEndDateChange }) => {
    const handleChangeDate = (...date) => {
        onStartDateChange(date[1][0]);
        onEndDateChange(date[1][1]);
    };

    return (
        <div className="form-group">
            <RangePicker onChange={handleChangeDate} />
        </div>
    );
};

export default Step5;
