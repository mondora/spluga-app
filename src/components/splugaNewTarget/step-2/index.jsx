import React from "react";

const Step2 = ({ onStakeholderChange, stakeholder }) => {
    const handleStakeholderChange = ({ target: { value } }) => {
        onStakeholderChange(value);
    };
    return (
        <div>
            <label>
                Stakeholder
                <select name="stakeholder" value={stakeholder} onChange={handleStakeholderChange}>
                    <option name="stakeholder" value="EVIRONMENT">
                        Environment
                    </option>
                    <option name="stakeholder" value="COMMUNITY">
                        Community
                    </option>
                    <option name="stakeholder" value="WORKERS">
                        Workers
                    </option>
                    <option name="stakeholder" value="GOVERNANCE">
                        Governance
                    </option>
                    <option name="stakeholder" value="CUSTOMER">
                        Customer
                    </option>
                </select>
            </label>
        </div>
    );
};

export default Step2;
