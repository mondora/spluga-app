import React from "react";

/*

TODO GETGOALS  
--> I GOAL SONO UNITà DI MISURA GIA CREATE, dovro passare a step-3 un array di oggetti goal contenti il nome dell'unità di misura
-->I GOAL POSSO ESSERE INSERITI NUOVI DA QUA (CREO QUA UNA NUOVA UNITà DIM MISURA PER IL TARGET CHE VOGLIO RAGGIUNGERE ?)


 LIMIT/TARGET  già decisi IN BASE AL TIPO DI GOAL?
*/

const Step3 = ({ onGoalChange, goal }) => {
    const handleGoalChange = ({ target: { value } }) => {
        onGoalChange(value);
    };

    return (
        <div>
            <label>
                Goal
                <select name="goal" value={goal} onChange={handleGoalChange}>
                    <option name="goal" value="goal1">
                        Goal-1
                    </option>
                    <option name="goal" value="goal2">
                        Goal-2
                    </option>
                    <option name="stakeholder" value="goal3">
                        Goal-3
                    </option>
                    <option name="stakeholder" value="goal4">
                        Goal-4
                    </option>
                </select>
            </label>
        </div>
    );
};

export default Step3;
