import React from "react";
import PropTypes from "prop-types";

import TextField from "@mondora/arc/antd/TextField";
import TextAreaField from "@mondora/arc/antd/TextAreaField";
import { StepAction } from "../styled";
import { translateMessage } from "../../../i18n";
import { FormattedMessage } from "react-intl";

//export class for testing pourpose
export const StepInfo = ({ onNameChange, onDescriptionChange, name, description }) => {
    const handleNameChange = (e, value, ...name) => {
        console.log("nome: ", value);
        onNameChange(value);
    };

    const handleDescriptionChange = (e, value, ...name) => {
        console.log("description: ", value);
        onDescriptionChange(value);
    };

    return (
        <StepAction>
            <label htmlFor="name">
                <FormattedMessage id="general.name" />
            </label>
            <TextField
                id="name"
                name="info.name"
                type="text"
                placeholder={translateMessage("c-splugaNewTarget.info.name")}
                value={name}
                onChange={handleNameChange}
            />
            <div>
                <label htmlFor="description">
                    <FormattedMessage id="general.description" />
                </label>
                <TextAreaField
                    id="description"
                    name="info.description"
                    type="text"
                    placeholder={translateMessage("c-splugaNewTarget.info.description")}
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
