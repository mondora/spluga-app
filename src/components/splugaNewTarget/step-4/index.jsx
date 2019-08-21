import React from "react";
import PropTypes from "prop-types";

import { StepAction } from "../styled";
import { Select, InputNumber } from "antd";

const { Option } = Select;

//target or limit potrei prenderlo dalle unità di misura (goals) --->  ?

//export function for testing pourpose
export const Step4 = ({ onTargetOrLimitValueChange, onTypeChange, targetOrLimitValue, type }) => {
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
                    Target/Limit:
                    <Select name="type" value={type} onChange={handleOnChangeType}>
                        <Option name="type" value="target">
                            Target
                        </Option>
                        <Option name="type" value="limit">
                            Limit
                        </Option>
                    </Select>
                </label>

                <label htmlFor="value"> Value </label>
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

Step4.propTypes = {
    onTargetOrLimitValueChange: PropTypes.func,
    onTypeChange: PropTypes.func,
    targetOrLimitValue: PropTypes.number,
    type: PropTypes.string
};

export default Step4;
