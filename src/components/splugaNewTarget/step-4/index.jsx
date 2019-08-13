import React from "react";

//target or limit potrei prenderlo dalle unità di misura (goals) --->  ?
const Step4 = ({ onTargetOrLimitValueChange, onTypeChange, targetOrLimitValue, type }) => {
    const handleOnChangeTargetOrLimitValue = ({ target: { value } }) => {
        onTargetOrLimitValueChange(value);
    };

    const handleOnChangeType = ({ target: { value } }) => {
        onTypeChange(value);
    };

    return (
        <React.Fragment>
            <div>
                <label>
                    Target or Limit:
                    <select name="type" value={type} onChange={handleOnChangeType}>
                        <option name="type" value="target">
                            Target
                        </option>
                        <option name="type" value="limit">
                            Limit
                        </option>
                    </select>
                </label>
            </div>
            <div>
                <label htmlFor="value"> Value </label>
                <input
                    id="value"
                    name="targetOrLimitValue"
                    type="text"
                    placeholder={`Enter value of your ${type}`}
                    value={targetOrLimitValue}
                    onChange={handleOnChangeTargetOrLimitValue}
                />
            </div>
        </React.Fragment>
    );
};

export default Step4;
