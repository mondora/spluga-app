import React from "react";
import PropTypes from "prop-types";

import { Input } from "antd";
import { StepAction } from "../styled";

const Step1 = ({ onNameChange, onDescriptionChange, name, description }) => {
    const handleNameChange = ({ target: { value } }) => {
        onNameChange(value);
    };

    const handleDescriptionChange = ({ target: { value } }) => {
        onDescriptionChange(value);
    };

    return (
        <StepAction>
            <label htmlFor="name">Name</label>
            <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter target's name"
                value={name}
                onChange={handleNameChange}
            />
            <div>
                <label htmlFor="description">Decscription</label>
                <Input.TextArea
                    id="description"
                    name="description"
                    type="text"
                    placeholder="Enter description"
                    value={description}
                    onChange={handleDescriptionChange}
                />
            </div>
        </StepAction>
    );
};

Step1.propTypes = {
    onNameChange: PropTypes.func,
    onDescriptionChange: PropTypes.func,
    name: PropTypes.string,
    description: PropTypes.string
};

export default Step1;
