import React from "react";
import PropTypes from "prop-types";

import { StepAction } from "../styled";
import { SelectStringField } from "@mondora/arc/antd/SelectField";
import { FormattedMessage } from "react-intl";

//export function for testing pourpose
export const StepStakeholder = ({ onStakeholderChange, stakeholder }) => {
    const handleStakeholderChange = (e, value, ...name) => {
        const stakeholder = Object.values(value);

        console.log("start date", stakeholder.join(""));
        onStakeholderChange(stakeholder.join(""));
    };
    return (
        <StepAction>
            <label>
                <FormattedMessage id="c-splugaNewTarget.stakeholder" />

                <SelectStringField
                    name="stakeholder"
                    value={stakeholder}
                    onChange={handleStakeholderChange}
                    options={[
                        {
                            value: "Environment",
                            label: <FormattedMessage id="c-splugaNewTarget.stakeholder.environment" />
                        },
                        {
                            value: "Community",
                            label: <FormattedMessage id="c-splugaNewTarget.stakeholder.community" />
                        },
                        {
                            value: "Workers",
                            label: <FormattedMessage id="c-splugaNewTarget.stakeholder.workers" />
                        },
                        {
                            value: "Governance",
                            label: <FormattedMessage id="c-splugaNewTarget.stakeholder.governance" />
                        },
                        {
                            value: "Customer",
                            label: <FormattedMessage id="c-splugaNewTarget.stakeholder.customer" />
                        }
                    ]}
                />
            </label>
        </StepAction>
    );
};

StepStakeholder.propTypes = {
    onStakeholderChange: PropTypes.func,
    stakeholder: PropTypes.string
};

export default StepStakeholder;
