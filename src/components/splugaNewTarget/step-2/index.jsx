import React from "react";
import PropTypes from "prop-types";

import { StepAction } from "../styled";
import { Select } from "antd";

const { Option } = Select;

const Step2 = ({ onStakeholderChange, stakeholder }) => {
    const handleStakeholderChange = value => {
        onStakeholderChange(value);
    };
    return (
        <StepAction>
            <label>
                Stakeholder
                <Select name="stakeholder" value={stakeholder} onChange={handleStakeholderChange}>
                    <Option name="stakeholder" value="Environment">
                        Environment
                    </Option>
                    <Option name="stakeholder" value="Community">
                        Community
                    </Option>
                    <Option name="stakeholder" value="Workers">
                        Workers
                    </Option>
                    <Option name="stakeholder" value="Governance">
                        Governance
                    </Option>
                    <Option name="stakeholder" value="Customer">
                        Customer
                    </Option>
                </Select>
            </label>
        </StepAction>
    );
};

Step2.propTypes = {
    onStakeholderChange: PropTypes.func,
    stakeholder: PropTypes.string
};

export default Step2;
