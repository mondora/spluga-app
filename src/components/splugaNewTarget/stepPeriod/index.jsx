import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import moment from "moment";

import ISO8601DayField from "@mondora/arc/antd/ISO8601DayField";

import { StepAction } from "../styled";

export const StepPeriod = ({ onChange, target }) => {
    const handleChangeStartDate = (e, value) => {
        target.startDate = value;
        onChange(target);
    };

    const handleChangeEndDate = (e, value) => {
        target.endDate = value;
        onChange(target);
    };

    const disableStartDate = current => {
        return current && current < moment().endOf("day");
    };

    const disableEndDate = current => {
        return current && current < moment(target.startDate);
    };

    return (
        <StepAction>
            <FormattedMessage id="c-splugaNewTarget.goal" />
            <br />
            <br />
            <FormattedMessage id="c-splugaNewTarget.startDate" />
            <ISO8601DayField
                name="startDate"
                onChange={handleChangeStartDate}
                value={target.startDate}
                disabledDate={disableStartDate}
            />

            <FormattedMessage id="c-splugaNewTarget.endDate" />
            <ISO8601DayField
                name="endDate"
                onChange={handleChangeEndDate}
                value={target.endDate}
                disabledDate={disableEndDate}
            />
        </StepAction>
    );
};

StepPeriod.propTypes = {
    onChange: PropTypes.func,
    target: PropTypes.object
};

export default StepPeriod;
