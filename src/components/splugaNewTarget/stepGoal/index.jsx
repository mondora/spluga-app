import React from "react";
import PropTypes from "prop-types";

import { SelectStringField } from "@mondora/arc/antd/SelectField";
import { StepAction } from "../styled";

/*

TODO GETGOALS  
--> I GOAL SONO UNITà DI MISURA GIA CREATE, dovro passare a step-3 un array di oggetti goal contenti il nome dell'unità di misura
-->I GOAL POSSO ESSERE INSERITI NUOVI DA QUA (CREO QUA UNA NUOVA UNITà DIM MISURA PER IL TARGET CHE VOGLIO RAGGIUNGERE ?)


 LIMIT/TARGET  già decisi IN BASE AL TIPO DI GOAL?
*/

//export function for testing pourpose
export const StepGoal = ({ onGoalChange, goal }) => {
    const handleGoalChange = (e, value, ...name) => {
        const goal = Object.values(value);

        console.log("goal", goal.join(""));
        onGoalChange(goal.join(""));
    };

    return (
        <StepAction>
            <label>
                Goal
                <SelectStringField
                    name="goal"
                    value={goal}
                    onChange={handleGoalChange}
                    options={[
                        {
                            value: "goal1",
                            label: "Goal-1"
                        },
                        {
                            value: "goal2",
                            label: "Goal-2"
                        },
                        {
                            value: "goal3",
                            label: "Goal-3"
                        },
                        {
                            value: "goal4",
                            label: "Goal-4"
                        }
                    ]}
                />
            </label>
        </StepAction>
    );
};

StepGoal.propTypes = {
    onGoalChange: PropTypes.func,
    goal: PropTypes.string
};
export default StepGoal;
