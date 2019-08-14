import React from "react";
import PropTypes from "prop-types";

import { Select } from "antd";
import { StepAction } from "../styled";

const { Option } = Select;

/*

TODO GETGOALS  
--> I GOAL SONO UNITà DI MISURA GIA CREATE, dovro passare a step-3 un array di oggetti goal contenti il nome dell'unità di misura
-->I GOAL POSSO ESSERE INSERITI NUOVI DA QUA (CREO QUA UNA NUOVA UNITà DIM MISURA PER IL TARGET CHE VOGLIO RAGGIUNGERE ?)


 LIMIT/TARGET  già decisi IN BASE AL TIPO DI GOAL?
*/

const Step3 = ({ onGoalChange, goal }) => {
    const handleGoalChange = value => {
        onGoalChange(value);
    };

    return (
        <StepAction>
            <label>
                Goal
                <Select name="goal" value={goal} onChange={handleGoalChange}>
                    <Option name="goal" value="goal1">
                        Goal-1
                    </Option>
                    <Option name="goal" value="goal2">
                        Goal-2
                    </Option>
                    <Option name="stakeholder" value="goal3">
                        Goal-3
                    </Option>
                    <Option name="stakeholder" value="goal4">
                        Goal-4
                    </Option>
                </Select>
            </label>
        </StepAction>
    );
};

Step3.propTypes = {
    onGoalChange: PropTypes.func,
    goal: PropTypes.string
};
export default Step3;
