import React from "react";
import PropTypes from "prop-types";

import { StepAction } from "../styled";
import { Input, Select } from "antd";

const { Option } = Select;

//target or limit potrei prenderlo dalle unità di misura (goals) --->  ?
const Step4 = ({ onTargetOrLimitValueChange, onTypeChange, targetOrLimitValue, type }) => {
    const handleOnChangeTargetOrLimitValue = ({ target: { value } }) => {
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
                <Input
                    id="value"
                    name="targetOrLimitValue"
                    type="text"
                    placeholder={`Enter value of your ${type}`}
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
    targetOrLimitValue: PropTypes.string,
    type: PropTypes.string
};

export default Step4;
