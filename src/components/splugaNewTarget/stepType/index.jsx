import React from "react";
import PropTypes from "prop-types";

import { StepAction } from "../styled";
import { SelectStringField } from "@mondora/arc/antd/SelectField";
import TextField from "@mondora/arc/antd/TextField";
import { FormattedMessage } from "react-intl";

//target or limit potrei prenderlo dalle unità di misura (goals) --->  ?

//export function for testing pourpose
export const StepType = ({ onValueChange, onTypeChange, value, type }) => {
    const handleOnChangeValue = (e, value, ...name) => {
        const val = Object.values(value);
        console.log("value", val.join(""));
        onValueChange(val.join(""));
    };

    const handleOnChangeType = (e, value, ...name) => {
        const type = Object.values(value);
        console.log("type", type.join(""));
        onTypeChange(type.join(""));
    };

    return (
        <React.Fragment>
            <StepAction>
                <label>
                    <FormattedMessage id="c-splugaNewTarget.type" />
                    <SelectStringField
                        name="type.name"
                        value={type}
                        onChange={handleOnChangeType}
                        options={[
                            {
                                value: "target",
                                label: "Target"
                            },
                            {
                                value: "limit",
                                label: <FormattedMessage id="c-splugaNewTarget.type.limit" />
                            }
                        ]}
                    />
                </label>

                <label>
                    <FormattedMessage id="c-splugaNewTarget.type.value" />

                    <TextField name="type.value" value={value} onChange={handleOnChangeValue} />
                </label>
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
