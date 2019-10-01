import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

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

    return (
        <StepAction>
            <FormattedMessage id="c-splugaNewTarget.startDate" />
            <ISO8601DayField name="date.startDate" onChange={handleChangeStartDate} value={target.startDate} />

            <FormattedMessage id="c-splugaNewTarget.endDate" />
            <ISO8601DayField name="date.endDate" onChange={handleChangeEndDate} value={target.endDate} />
        </StepAction>
    );
};

StepPeriod.propTypes = {
    onChange: PropTypes.func,
    target: PropTypes.object
};

export default StepPeriod;
