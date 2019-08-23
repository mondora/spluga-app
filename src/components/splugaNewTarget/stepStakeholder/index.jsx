import React from "react";
import PropTypes from "prop-types";

import { StepAction } from "../styled";
import { Select } from "antd";
import { FormattedMessage } from "react-intl";

const { Option } = Select;

//export function for testing pourpose
export const StepStakeholder = ({ onStakeholderChange, stakeholder }) => {
    const handleStakeholderChange = value => {
        onStakeholderChange(value);
    };
    return (
        <StepAction>
            <label>
                <FormattedMessage id="newTarget.stakeholder" />
                <Select name="stakeholder" value={stakeholder} onChange={handleStakeholderChange}>
                    <Option name="stakeholder" value="Environment">
                        <FormattedMessage id="newTarget.stakeholder.environment" />
                    </Option>
                    <Option name="stakeholder" value="Community">
                        <FormattedMessage id="newTarget.stakeholder.community" />
                    </Option>
                    <Option name="stakeholder" value="Workers">
                        <FormattedMessage id="newTarget.stakeholder.workers" />
                    </Option>
                    <Option name="stakeholder" value="Governance">
                        <FormattedMessage id="newTarget.stakeholder.governance" />
                    </Option>
                    <Option name="stakeholder" value="Customer">
                        <FormattedMessage id="newTarget.stakeholder.customer" />
                    </Option>
                </Select>
            </label>
        </StepAction>
    );
};

StepStakeholder.propTypes = {
    onStakeholderChange: PropTypes.func,
    stakeholder: PropTypes.string
};

export default StepStakeholder;
