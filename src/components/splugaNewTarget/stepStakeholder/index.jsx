import React from "react";
import PropTypes from "prop-types";

import { StepAction } from "../styled";
import { SelectStringField } from "@mondora/arc/antd/SelectField";
import { FormattedMessage } from "react-intl";

//export function for testing pourpose
export const StepStakeholder = ({ onChange, target }) => {
    const handleStakeholderChange = (e, value) => {
        onChange({ ...target, stakeholder: value });
    };

    return (
        <StepAction>
            <FormattedMessage id="general.stakeholder" />
            <SelectStringField
                name="stakeholder"
                onChange={handleStakeholderChange}
                value={target.stakeholder}
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
        </StepAction>
    );
};

StepStakeholder.propTypes = {
    onChange: PropTypes.func,
    target: PropTypes.object
};

export default StepStakeholder;
