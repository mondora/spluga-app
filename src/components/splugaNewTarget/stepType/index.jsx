import React from "react";
import PropTypes from "prop-types";

import { StepAction } from "../styled";
import { Select, InputNumber } from "antd";
import { FormattedMessage } from "react-intl";

const { Option } = Select;

//target or limit potrei prenderlo dalle unità di misura (goals) --->  ?

//export function for testing pourpose
export const StepType = ({ onValueChange, onTypeChange, value, type }) => {
    const handleOnChangeValue = value => {
        onValueChange(value);
    };

    const handleOnChangeType = value => {
        onTypeChange(value);
    };

    return (
        <React.Fragment>
            <StepAction>
                <label>
                    <FormattedMessage id="c-splugaNewTarget.type" />
                    <Select name="type" value={type} onChange={handleOnChangeType}>
                        <Option name="type" value="target">
                            Target
                        </Option>
                        <Option name="type" value="limit">
                            <FormattedMessage id="c-splugaNewTarget.type.limit" />
                        </Option>
                    </Select>
                </label>

                <label htmlFor="value">
                    <FormattedMessage id="c-splugaNewTarget.type.value" />
                </label>
                <InputNumber id="value" name="value" value={value} onChange={handleOnChangeValue} />
            </StepAction>
        </React.Fragment>
    );
};

StepType.propTypes = {
    onValueChange: PropTypes.func,
    onTypeChange: PropTypes.func,
    value: PropTypes.number,
    type: PropTypes.string
};

export default StepType;
