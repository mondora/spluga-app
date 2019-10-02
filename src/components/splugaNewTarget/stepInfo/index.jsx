import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import TextField from "@mondora/arc/antd/TextField";
import TextAreaField from "@mondora/arc/antd/TextAreaField";

import { StepAction } from "../styled";
import { translateMessage } from "../../../i18n";

export const StepInfo = ({ onChange, target }) => {
    const handleChangeName = (e, value) => {
        target.name = value;
        onChange(target);
    };

    const handleChangeDescription = (e, value) => {
        target.description = value;
        onChange(target);
    };

    return (
        <StepAction>
            <FormattedMessage id="general.name" />
            <TextField
                id="name"
                name="name"
                type="text"
                placeholder={translateMessage("c-splugaNewTarget.placeholder.name")}
                value={target.name}
                onChange={handleChangeName}
            />

            <FormattedMessage id="general.description" />
            <TextAreaField
                id="description"
                name="description"
                type="text"
                placeholder={translateMessage("c-splugaNewTarget.placeholder.description")}
                value={target.description}
                onChange={handleChangeDescription}
            />
        </StepAction>
    );
};

StepInfo.propTypes = {
    onChange: PropTypes.func,
    target: PropTypes.object
};

export default StepInfo;
