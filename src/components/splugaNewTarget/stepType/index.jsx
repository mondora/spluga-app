import React from "react";
import PropTypes from "prop-types";

import { StepAction } from "../styled";
import { Select, InputNumber } from "antd";
import { FormattedMessage } from "react-intl";

const { Option } = Select;

//target or limit potrei prenderlo dalle unità di misura (goals) --->  ?

//export function for testing pourpose
export const StepType = ({ onTargetOrLimitValueChange, onTypeChange, targetOrLimitValue, type }) => {
    const handleOnChangeTargetOrLimitValue = value => {
        onTargetOrLimitValueChange(value);
    };

    const handleOnChangeType = value => {
        onTypeChange(value);
    };

    return (
        <React.Fragment>
            <StepAction>
                <label>
                    <FormattedMessage id="newTarget.type" />
                    <Select name="type" value={type} onChange={handleOnChangeType}>
                        <Option name="type" value="target">
                            Target
                        </Option>
                        <Option name="type" value="limit">
                            <FormattedMessage id="newTarget.type.limit" />
                        </Option>
                    </Select>
                </label>

                <label htmlFor="value">
                    <FormattedMessage id="newTarget.type.value" />
                </label>
                <InputNumber
                    id="value"
                    name="targetOrLimitValue"
                    value={targetOrLimitValue}
                    onChange={handleOnChangeTargetOrLimitValue}
                />
            </StepAction>
        </React.Fragment>
    );
};

StepType.propTypes = {
    onTargetOrLimitValueChange: PropTypes.func,
    onTypeChange: PropTypes.func,
    targetOrLimitValue: PropTypes.number,
    type: PropTypes.string
};

export default StepType;
