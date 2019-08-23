import React from "react";
import PropTypes from "prop-types";

import { Input } from "antd";
import { StepAction } from "../styled";
import { translateMessage } from "../../../i18n";
import { FormattedMessage } from "react-intl";

//export class for testing pourpose
export const StepInfo = ({ onNameChange, onDescriptionChange, name, description }) => {
    const handleNameChange = ({ target: { value } }) => {
        onNameChange(value);
    };

    const handleDescriptionChange = ({ target: { value } }) => {
        onDescriptionChange(value);
    };

    return (
        <StepAction>
            <label htmlFor="name">
                <FormattedMessage id="general.name" />
            </label>
            <Input
                id="name"
                name="name"
                type="text"
                placeholder={translateMessage("newTarget.info.name")}
                value={name}
                onChange={handleNameChange}
            />
            <div>
                <label htmlFor="description">
                    <FormattedMessage id="general.description" />
                </label>
                <Input.TextArea
                    id="description"
                    name="description"
                    type="text"
                    placeholder={translateMessage("newTarget.info.description")}
                    value={description}
                    onChange={handleDescriptionChange}
                />
            </div>
        </StepAction>
    );
};

StepInfo.propTypes = {
    onNameChange: PropTypes.func,
    onDescriptionChange: PropTypes.func,
    name: PropTypes.string,
    description: PropTypes.string
};

export default StepInfo;
